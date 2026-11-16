---
title: Buradaki her yazının bir parmak izi var
description: Her başlığın yanındaki çizim, yazının dosya adının hash'i; 17×9'luk bir tahtada sarhoş bir filin yürüyüşüyle çiziliyor. Nasıl çalıştığını anlatıyorum.
date: 2026-11-16
tags: [bu-site, hashing]
---

Bu sitedeki her yazının yanında küçük, macenta renkli bir çizgi çizimi var. Bu bir illüstrasyon değil, kimse de çizmedi. Yazının dosya adı SHA-256'dan geçiyor ve OpenSSH'tan gelen bir algoritma onu resme çeviriyor.

## Fikir nereden geliyor

`ssh-keygen -lv` komutunu çalıştırdığında OpenSSH, anahtarın parmak izinin altına şöyle bir şey basar:

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

Bu kutunun adı *randomart*. İnsanlar 64 karakterlik hex dizilerini karşılaştırmakta kötü ama bir resmin farklı göründüğünü hemen fark ediyor; böylece değişmiş bir sunucu anahtarı daha kolay göze çarpıyor. Arkadaki algoritmanın da güzel bir adı var: **sarhoş fil** (*drunken bishop*).

## Yürüyüş

Bir fil 17×9'luk tahtanın ortasından başlar. Hash bayt bayt okunur; her bayt, en düşük anlamlı çiftten başlayarak ikişer bitlik dört hamle verir:

- ilk bit sol (0) ya da sağ (1) seçer,
- ikinci bit yukarı (0) ya da aşağı (1) seçer.

Yani her hamle satrançtaki fil gibi çaprazdır. Hamle tahtanın dışına çıkacaksa fil duvar boyunca kayar. Her kare kaç kez ziyaret edildiğini sayar; ssh sık uğranan kareleri daha yoğun karakterlerle basar (`.`, `o`, `+`, `=`, `*`, `B`, `O`, `X` vb.), başlangıcı `S`, bitişi `E` ile işaretler.

SHA-256 özeti 32 bayttır, yani fil 128 hamle yapar. İşin özü TypeScript'te şöyle:

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

## Basmak yerine çizmek

Bu site yürüyüşü koruyup karakterleri atıyor. Filin rotası tek, kesintisiz bir kalem çizgisine dönüşüyor; birden fazla uğranan kareler sayıyla büyüyen mürekkep noktaları oluyor, başlangıç boş bir kare, bitiş ise dolu macenta bir nokta. Her adım çapraz olduğu için çizgi hep bir kalem çizicisinden (plotter) çıkmış gibi görünüyor.

Tohum değeri yazının başlığı değil, dosya adı. Bu yüzden bir yazının İngilizce, Almanca ve Türkçe sürümleri aynı çizimi paylaşıyor: parmak izi dile değil, fikre ait. Başlıktaki bir yazım hatasını düzeltmek de onu değiştirmiyor.

Her şey derleme sırasında oluyor. Bu çizimler için tarayıcıda hiç JavaScript çalışmıyor; site derlenirken üretilen SVG'den ibaret.

## Neden uğraşayım

Bir blog dizini, hepsi birbirine benzeyen başlıklardan oluşan bir listedir. Parmak izi, her yazıya stok fotoğraf aramama gerek kalmadan bir yüz veriyor; üstelik bu yüz dürüst: hesaplanmış, benzersiz ve on yıl sonra da aynı görünecek.
