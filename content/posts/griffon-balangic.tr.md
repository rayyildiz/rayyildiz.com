+++
date= "2011-10-29"
title= "Griffon Başlangıç"
slug="griffon-baslangic"
tags= ["java","groovy"]
categories= ["Genel","Yazilim gelistirme"]
+++

Chicago da gerçekleştirilen SpringOne2GX etkinliği kapsamında epey ilginç ve de güzel seyler gördüm. Etkinliğin son gunü, paralel giden konferanslardan sonuncusunda herhangi bir bilgimin olmadigi ve diğer konuları beğenmediğinden dolayı Griffon a katılmayı tercih ettim. Hakkında çok az şey biliyordum. Ancak sunu soylemeliyim ki etkinlik kapsamında bu kadar beni şaşırtan konu olmamıştı. Bu nedenle hakkında bazı bilgileri paylaşma gereği duyuyorum.

Eğer Groovy ile program yazdıysanız, hele de grails ile proje geliştirdiyseniz, griffon size çok kolay gelecektir.

Griffon grails gibi proje geliştirmek için gelistirilmis bir proje. Griffon JSR 295 ve JSR 296 uyumlu. Su an itibariyle 170 ten fazla plugin e sahip.

## Griffon Başlangıç
Griffon indirdekten sonra, bazı ayarlar yapmanız gerekiyor. Buradan bilgi alarak bu işlemleri gerçekleştirebilirsiniz.

Grails de olduğu gibi griffon ile bir proje acmak çok kolay.

```bash
griffon create-app
```

Evet sadece bu kadar. Peki hatırlayalım, grails de bir projeyi çalıştırmak için ne yapıyorduk ?
```bash
grails run-app
```

Tahmin edebileceğiniz gibi griffon da bir proyi çalıştırmak grails de projeyi çalıştırmak gibi.
```bash
griffon run-app
```

Java da çeşitli uygulamaları denince applet de akla gelir. Peki bir griffon ile bir applet nasıl yazarız? Cevap çok kolay herhangi bir şey yapmanıza gerek yok: sadece uygulamanızı yazın ve calistirirken şu sekilde çalıştırın.

```bash
griffon run-applet
```

Aklınıza applet güzel ama biz bunu web den calistirabilir bir sekilde nasıl yazarız diye gelebilir. Hemen onun da cevabını söyleyeyim.

```bash
griffon run-webstart
```

Projenizi yazdınız ve deployment yapmak istiyorsunuz. Grails de olduğu gibi

```bash
griffon dev package
```

demeniz yeterli. Bu sizin için standolone, applet, webstart için paketleri olusuturacaktir. Hatta applet için self signed bir sertifika ile oluşturacaktir.

![Griffon](/images/griffon.jpg)

Swing ve java ile ugrastiysaniz, jar dosyasını dağıtmanın hiç de mantıklı olmadıgını bilirsiniz. Size tavsiyem installer adında bir plugin var, onu kullanmanızı tavsiye ederim.

```bash
griffon installer-plugin installer
```

Plugin kurduktan sonra şu sekilde projenizi paket oluşturabilirsiniz. Bu size MAC OS, Windows ve debian için kurulum paketleir hazirlayacaktir.

```bash
griffon package dmg izpack deb
```

Griffon Archtype
Eğer Groovy bilmiyorsanız, güzel bir haberim var: griffon scala, Java, jython … dillerini de destekliyor. Projenizi olustururken archtype belirterek projenizi istediğiniz bir dilde yazabilirsiniz.

```bash
griffon create-app -archtype=scala
griffon create-app -archtype=java
```

### Bizi Ne Bekliyor
Proje su anda 0.9.4 sürümü mevcut. Yıl sonunda 1.0 gelecek. Proje epey iyi bir şekilde yoluna devam ediyor. Avusturalya da çok önemli bir şirket tüm uygulamalarını griffon ile yazmış. Amerika’da da epey bir şirket projelerini griffon ile yazmaya başlamış.
Şu anda veri tabanı işlemi için datasource adındaki plugin i kullanabilirsiniz. Yalnız griffon 2 ile birlikte GORM birlikte gelecek. Bununla beraber griffon 2.0 da scaffold da geliyor.

Son söz olarak, bu projeyi oldukça başarılı bulduğumu tekrar belirtmek isterim. Desktop projelerimde griffon u kullanmayı hedefliyorum. Şimdilik bu kadar, eve gidince griffon ile geliştireceğim projeleri ve griffon hakkında daha detaylı calışmalarımı paylaşacağım.