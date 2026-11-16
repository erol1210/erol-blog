---
title: Every post here has a fingerprint
description: The drawing next to each title is a hash of the post’s file name, walked across a 17×9 board by a drunken bishop. Here is how it works.
date: 2026-11-16
tags: [this-site, hashing]
---

Next to every post on this site there is a small magenta line drawing. It is not an illustration and nobody drew it. It is the post’s file name, run through SHA-256 and turned into a picture by an algorithm from OpenSSH.

## Where the idea comes from

When you run `ssh-keygen -lv`, OpenSSH prints something like this under the key’s fingerprint:

```text
+-----[erol]------+
|       .o ..o.=. |
|      .+ .oo.. + |
|      o.E.oo  o .|
|       o.o.. . o.|
|      . S..   + +|
|       = .  ..++.|
|      . o  . =o=.|
|       . .. ..O++|
|      ....  .+oBo|
+----[SHA256]-----+
```

That box is called *randomart*. Humans are bad at comparing 64 hex characters but good at noticing that a picture looks different, so the picture makes a changed server key easier to spot. The algorithm behind it has a lovely name: the **drunken bishop**.

## The walk

A bishop starts in the middle of a 17×9 board. The hash is read one byte at a time, and every byte gives four moves, two bits each, starting from the least significant pair:

- the first bit picks left (0) or right (1),
- the second bit picks up (0) or down (1).

So every move is diagonal, like a bishop in chess. When a move would leave the board, the bishop slides along the wall instead. Each square counts how often it was visited; ssh prints busier squares with denser characters (`.`, `o`, `+`, `=`, `*`, `B`, `O`, `X` and so on), marks the start with `S` and the end with `E`.

A SHA-256 digest is 32 bytes, so the bishop makes 128 moves. Here is the core of it in TypeScript:

```ts
for (const byte of digest) {
  for (let step = 0; step < 4; step++) {
    const bits = (byte >> (step * 2)) & 0b11;
    x = clamp(x + (bits & 1 ? 1 : -1), 0, 16);
    y = clamp(y + (bits & 2 ? 1 : -1), 0, 8);
    visits[y * 17 + x]++;
  }
}
```

## Drawing it instead of printing it

This site keeps the walk and drops the characters. The bishop’s route becomes one continuous pen line, squares it visited more than once become ink dots that grow with the count, the start is an open square and the end is a filled magenta dot. Because every step is diagonal, the line always looks like it came off a pen plotter.

The seed is the post’s file name, not its title. That means the English, German and Turkish editions of a post share the same drawing: the fingerprint belongs to the idea, not to the language. Fixing a typo in the title does not change it either.

Everything happens at build time. There is no JavaScript involved in drawing these, just SVG generated while the site is built.

## Why bother

A blog index is a list of titles that all look alike. A fingerprint gives each post a face without me having to find a stock photo for it, and the face is honest: it is computed, it is unique, and it will look the same in ten years.
