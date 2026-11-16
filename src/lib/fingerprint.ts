import { createHash } from 'node:crypto';

/**
 * "Drunken bishop" visual fingerprint — the same walk OpenSSH uses for
 * `ssh-keygen -lv` randomart, fed with SHA-256 of a string.
 *
 * A bishop starts in the middle of a 17×9 board. Each byte of the digest
 * gives four moves (two bits each, least significant first):
 *   bit 0 → horizontal (0 = left, 1 = right)
 *   bit 1 → vertical   (0 = up,   1 = down)
 * Moves that would leave the board slide along the wall instead.
 */
export const W = 17;
export const H = 9;
const SYMBOLS = ' .o+=*BOX@%&#/^';

export interface Fingerprint {
  seed: string;
  hex: string;
  /** Every square the bishop stood on, in order (start included). */
  path: Array<[number, number]>;
  /** Visit count per square, row-major. */
  visits: number[];
  start: [number, number];
  end: [number, number];
  /** The classic ASCII rendering, framed like ssh-keygen prints it. */
  ascii: string;
}

export function fingerprint(seed: string): Fingerprint {
  const digest = createHash('sha256').update(seed).digest();
  const visits = new Array(W * H).fill(0);
  let x = Math.floor(W / 2);
  let y = Math.floor(H / 2);
  const start: [number, number] = [x, y];
  const path: Array<[number, number]> = [[x, y]];

  for (const byte of digest) {
    for (let step = 0; step < 4; step++) {
      const bits = (byte >> (step * 2)) & 0b11;
      x = Math.min(W - 1, Math.max(0, x + (bits & 1 ? 1 : -1)));
      y = Math.min(H - 1, Math.max(0, y + (bits & 2 ? 1 : -1)));
      visits[y * W + x]++;
      path.push([x, y]);
    }
  }

  const end: [number, number] = [x, y];
  const label = `[${seed.slice(0, 11)}]`;
  const padL = Math.floor((W - label.length) / 2);
  const top = `+${'-'.repeat(padL)}${label}${'-'.repeat(W - padL - label.length)}+`;
  const rows: string[] = [];
  for (let r = 0; r < H; r++) {
    let line = '|';
    for (let c = 0; c < W; c++) {
      if (c === start[0] && r === start[1]) line += 'S';
      else if (c === end[0] && r === end[1]) line += 'E';
      else line += SYMBOLS[Math.min(visits[r * W + c], SYMBOLS.length - 1)];
    }
    rows.push(`${line}|`);
  }
  const bottom = `+${'-'.repeat(4)}[SHA256]${'-'.repeat(W - 12)}+`;

  return {
    seed,
    hex: digest.toString('hex'),
    path,
    visits,
    start,
    end,
    ascii: [top, ...rows, bottom].join('\n'),
  };
}
