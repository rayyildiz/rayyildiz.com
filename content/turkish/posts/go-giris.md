---
title: "Go Giriş"
date: 2023-02-28
tags: ["go"]
categories: ["Go", "Development"]
series: ["Go"]
slug: "go-giris"
---

[Golang](https://go.dev/) olarak da bilinen Go, Google tarafından [2007](https://www.youtube.com/watch?v=sln-gJaURzk) yılında [Robert Griesemer](https://github.com/griesemer), [Rob Pike](https://github.com/robpike) ve [Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson) tarafından geliştirilen bir programlama dilidir. 
Basit, verimli ve okuması ve yazması kolay olacak şekilde tasarlanmış statik olarak yazılmış bir dildir. 
Go, birçok geliştiricinin kullanım kolaylığını ve performansını övmesiyle yıllar içinde giderek daha popüler hale geldi.

```go
package main

import "fmt"

func main() {
	fmt.Println("Merhaba dünya")
}
```

Go'nun ana özelliklerinden biri basitliğidir. Sözdizimi basit ve anlaşılması kolaydır, bu da onu yeni başlayanlar için öğrenmesi için mükemmel bir dil yapar. 
Go ayrıca, karmaşıklığı azaltmaya yardımcı olan ve dili daha yönetilebilir hale getiren [az sayıda anahtar kelimeye](https://go.dev/ref/spec) sahiptir.

Birkaç özelliğini vurgulamak gerekirse:

- Unicode desteği ile gelir, yani [Türkçe fonksiyon/değişken adı](ağaçSayısıKaçtır) kullanabilirsiniz.
- [Exception](https://www.w3schools.com/java/java_try_catch.asp) yoktur, hatalar için bir value olan [error](https://go.dev/ref/spec#Errors) kullanılır. 
- `do-while`,`while-do` yoktur, sadece oldukça yetenekli olan [for](https://go.dev/ref/spec#For_statements) vardır.
- OOP dillerinde olduğu gibi [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)), [overloading](https://en.wikipedia.org/wiki/Function_overloading), [overriding](https://en.wikipedia.org/wiki/Method_overriding) yoktur.
- [Thread](https://www.w3schools.com/java/java_threads.asp) yoktur, sadece [fiber/lite thread veya coroutine](https://en.wikipedia.org/wiki/Coroutine)  de denilen **goroutine** vardır.
- Runtime da gerek GC gerekse memory kullanımı için pek fazla seçenek sunmaz. Hatta bu konuda şu şekilde bir [tavsiye](https://go.dev/ref/mem) bile var. 
Yani memory yönetimi compiler ı yazan kişilerin düşünmesi gereken bir konu, son kullanıcının değil 😊 

> If you must read the rest of this document to understand the behavior of your program, you are being too clever. 
> Don't be clever.

Go ayrıca hızlı ve verimli olacak şekilde tasarlanmıştır. Belleği yönetmek için GC(garbage collector = çöp toplamayı) kullanır, bu da geliştiricileri belleği el ile ayırma ve yeniden ayırma ihtiyacından kurtarır. 
Go aynı zamanda derlenmiş bir dildir, bu da kodun doğrudan bilgisayarın işlemcisi tarafından yürütülebilen makine koduna dönüştürüldüğü anlamına gelir. 
Bu, Go'yu Java, Python veya Ruby gibi yorumlanan dillerden önemli ölçüde daha hızlı hale getirir.

Go'nun bir diğer özelliği de [concurrency (eşzamanlılık)](https://go.dev/tour/concurrency/1) desteğidir. 
Go, concurrency düşünülerek tasarlanmış olup ve geliştiricilerin aynı anda birden çok görevi gerçekleştirebilen programlar yazmasını kolaylaştırır. 
Dil, goroutinler (hafif iş parçacıkları) arasında veri iletmek için kullanılan [channel (kanallar)](https://go.dev/tour/concurrency/2) için yerleşik destek içerir. 
Goroutinler, eşzamanlı programlamayı daha kolay ve daha verimli hale getirmek için kullanılır.

Örnekte, hem bir goroutine hem de channel örneği görmektesiniz. Her saat çalışan örnekteki kod, hata alması durumunda admin e mail atmaktadır. 
[ticker.C](https://pkg.go.dev/time#NewTicker) bir buffered channel olup ve süre gelmeden alt satıra geçmez.  
```go
go func() {
    ticker := time.NewTicker(time.Hour)
    for {
        <-ticker.C
        err := doBackup(config, dbModel)
        if err != nil {
            emailAdmin("backup alırken hata aldı: %v", err)
        }
    }
}() 
```

Go ayrıca ağ oluşturma, kriptografi ve diğer genel görevler için destek içeren zengin bir standart kitaplığa sahiptir. 
Bu, geliştiricilerin harici kitaplıklar veya araçlar kullanmaya ihtiyaç duymadan uygulama oluşturmasını kolaylaştırır.

Go, Google, Uber, Dropbox ve Netflix dahil olmak üzere [birçok şirket](https://go.dev/solutions/#case-studies) tarafından kullanılmıştır. 
[Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/) ve [Prometheus](https://prometheus.io/) gibi popüler açık kaynaklı projeler geliştirmek için de kullanılmıştır. 
Go'nun popülaritesi, kısmen kullanım kolaylığı ve performansından değil, aynı zamanda **geniş ve aktif** bir geliştirici topluluğuna sahip açık kaynaklı bir dil olmasından kaynaklanmaktadır.

Sonuç olarak, Go **basit** , **verimli** ve **okuması ve yazması kolay** olacak şekilde tasarlanmış bir programlama dilidir. 
Birçok geliştiricinin kullanım kolaylığını ve performansını övmesiyle yıllar içinde giderek daha popüler hale geldi. 
Go'nun basitliği, hızı, eşzamanlılık desteği ve zengin standart kitaplığı, onu her boyutta uygulama oluşturmak için mükemmel bir seçim haline getirdi. 
Daha fazla geliştirici Go'nun faydalarını keşfettikçe, popülaritesinin artmaya devam etmesi ve yazılım geliştirme dünyasında daha da [önemli bir araç](https://madnight.github.io/githut/#/stars/2022/4) haline geleçeği muhtemeldir.

Bazı yararlı linkler:

- [Matt Holiday](https://www.youtube.com/@mattkdvb5154) in hazırladığı videolar çok yararlı.
- [Junmin Lee](https://www.youtube.com/watch?v=dgIh-VYcWYw&list=PL0q7mDmXPZm625OqhkdCPRkY9XAq6X7kW) ın hazırfladığı görsel olarak da desteklediği golang serisi, bazı konseptleri anlamakta cok yararlı olacaktır.
- [Dave Chaney](https://dave.cheney.net/) in blog her zaman ileri seviyede bilgiler içermektedir.
- Ve tabi ki [go.dev](https://go.dev/).

> Bu kaynaklar hepsi de İngilizce ve maalesef Türkçe bir kaynak bulmak zor oluyor 😥. 


Son olarak da yazıyı daha tecrübeli geliştiriceler için şu sözle bitirmek isterim. `Lütfen Java/C# özelliklerini go ya getirmeyiniz.` 
[Rob Pike dediği gibi](https://youtu.be/rFejpH_tAHM?t=83) basitliği korumak go nun önemli bir özelliği, bu nedenle java yazdığınız gibi go yazmamalısınız.
Buna rağmen [go sıkıcı](https://www.youtube.com/watch?v=4hxKEbWO5u0) derseniz de, böyle kalmasını kişisel olarak tercih ederim 😊.