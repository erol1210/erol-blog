---
title: Jeder Text hier hat einen Fingerabdruck
description: Die Zeichnung neben jedem Titel ist ein Hash des Dateinamens, von einem betrunkenen Läufer über ein 17×9-Brett getragen. So funktioniert es.
date: 2026-11-16
tags: [diese-seite, hashing]
---

Neben jedem Text auf dieser Seite steht eine kleine magentafarbene Strichzeichnung. Es ist keine Illustration, und niemand hat sie gezeichnet. Es ist der Dateiname des Textes, durch SHA-256 geschickt und von einem Algorithmus aus OpenSSH in ein Bild verwandelt.

## Woher die Idee kommt

Wer `ssh-keygen -lv` ausführt, bekommt unter dem Fingerabdruck des Schlüssels so etwas zu sehen:

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

Diese Box heißt *Randomart*. Menschen vergleichen 64 Hex-Zeichen schlecht, merken aber schnell, wenn ein Bild anders aussieht. So fällt ein geänderter Server-Schlüssel eher auf. Der Algorithmus dahinter hat einen schönen Namen: der **betrunkene Läufer** (im Original *drunken bishop*).

## Der Weg

Ein Läufer startet in der Mitte eines 17×9-Bretts. Der Hash wird Byte für Byte gelesen, und jedes Byte ergibt vier Züge zu je zwei Bits, beginnend mit dem niederwertigsten Paar:

- das erste Bit wählt links (0) oder rechts (1),
- das zweite Bit wählt oben (0) oder unten (1).

Jeder Zug ist also diagonal, wie beim Läufer im Schach. Würde ein Zug das Brett verlassen, rutscht der Läufer stattdessen an der Wand entlang. Jedes Feld zählt, wie oft es besucht wurde; ssh druckt vielbesuchte Felder mit dichteren Zeichen (`.`, `o`, `+`, `=`, `*`, `B`, `O`, `X` usw.), markiert den Start mit `S` und das Ende mit `E`.

Ein SHA-256-Digest hat 32 Bytes, der Läufer macht also 128 Züge. Der Kern in TypeScript:

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

## Zeichnen statt drucken

Diese Seite behält den Weg und lässt die Zeichen weg. Die Route des Läufers wird zu einer durchgehenden Linie, mehrfach besuchte Felder werden zu Tintenpunkten, die mit der Anzahl wachsen, der Start ist ein offenes Quadrat und das Ende ein gefüllter Magenta-Punkt. Weil jeder Schritt diagonal ist, sieht die Linie immer aus wie von einem Stiftplotter.

Der Seed ist der Dateiname des Textes, nicht sein Titel. Deshalb teilen sich die englische, deutsche und türkische Fassung dieselbe Zeichnung: Der Fingerabdruck gehört zur Idee, nicht zur Sprache. Ein korrigierter Tippfehler im Titel ändert ihn auch nicht.

Alles passiert beim Build. Für die Zeichnungen läuft kein JavaScript im Browser, nur SVG, das beim Bauen der Seite erzeugt wird.

## Warum der Aufwand

Eine Blog-Übersicht ist eine Liste von Titeln, die alle gleich aussehen. Ein Fingerabdruck gibt jedem Text ein Gesicht, ohne dass ich ein Stockfoto suchen muss, und dieses Gesicht ist ehrlich: berechnet, einzigartig und in zehn Jahren noch genauso.
