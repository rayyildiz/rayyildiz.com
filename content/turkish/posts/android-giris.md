+++
date= "2009-02-11"
title= "Android Giriş"
slug="android-giris"
tags= ["android", "java", "mobile programlama"]
categories= ["Mobil"]
+++



Yeni icatlar hep “Nasıl?” sorusunun cevabıymış. Son yıllarda yaşanan teknolojik dev adımları görünce buna hak vermemek mümkün değil.
Bilgisayar ilk icat edildiğinde bir odaya bile sığmıyordu. Zamanla mikro bilgisayarların yerini almasıyla ‚Äúteknolojiyi dahada nasıl küçültebiliriz?‚Äù sorusu akıllara gelmeye başladı. Sadece konuşma özelliği bulunan telefonlar acaba nasıl yanımızda taşıyabiliriz sorusu cep telefonlarının icat edilmesiyle sonuçlandı. Bunu takip eden dönemde ise acaba cep telefonlarıyla bilgisayarı nasıl birleştirebiliriz sorusu oldu. Bu sorunun cevabını birkaç yıl önce cevap vermişler, pocket bilgisayar üretildi. Ancak şimdi akıllara gelen soru, cep telefonuna nasıl daha fazla özellik ekleyebiliriz.

İşletim sistemi, bir bilgisayarın ilk çalışmasını sağlayan programdır. Bilgisayar ilk icat edildikten kısa bir süre sonra işletim sisteminin asıl ve tek görevi açılış ve kapanışları cok uzun süren ve oldukça karmaşık işleri yapmasına yönelik gelişitirilmiş programlardır. Ancak zamanla mikro bilgisayarların günlük hayata girmesiyle, işletim sistemleri daha yetenekli olmaya başladılar. Aynı durum cep telefonu içinde gecerli. Cep telefonu için bahsedeceğimiz işletim sistemleri başlarda basit işlevleri yerine getiriyordu, hatta cep telefonu için işletim sistemi tabiri bile tercih edilmiyordu. Ancak gelişen teknolojinin dahada küçülmesi, daha küçük bilgisayar üretmek yerine, herkesde bulunan cep telefonuna bilgisayar özelliği ekleyelim fikri sonucunda, cep telefonları için de işletim sistemi tabiri kullanılmaya başlandı.

Teknolojideki bu gelişmeleri yakından takip eden Google, 2005 yılında Android Inc. Satın alarak bu sektörde de var olduğunu duyurmuş oldu. Gecen sayılarımızda iPhone telefonları yine burada anlatmıştık. Bu gelişmelerden cokda uzak olmayan google, gPhone ile cep telefonları için geliştirilmiş Android işletim sistemiyle karşımızda.


İşletim sistemi, bir bilgisayarın ilk çalışmasını sağlayan programdır. Bilgisayar ilk icat edildikten kısa bir süre sonra işletim sisteminin asıl ve tek görevi açılış ve kapanışları cok uzun süren ve oldukça karmaşık işleri yapmasına yönelik gelişitirilmiş programlardır. Ancak zamanla mikro bilgisayarların günlük hayata girmesiyle, işletim sistemleri daha yetenekli olmaya başladılar. Aynı durum cep telefonu içinde gecerli. Cep telefonu için bahsedeceğimiz işletim sistemleri başlarda basit işlevleri yerine getiriyordu, hatta cep telefonu için işletim sistemi tabiri bile tercih edilmiyordu. Ancak gelişen teknolojinin dahada küçülmesi, daha küçük bilgisayar üretmek yerine, herkesde bulunan cep telefonuna bilgisayar özelliği ekleyelim fikri sonucunda, cep telefonları için de işletim sistemi tabiri kullanılmaya başlandı.

Teknolojideki bu gelişmeleri yakından takip eden Google, 2005 yılında Android Inc. Satın alarak bu sektörde de var olduğunu duyurmuş oldu. Gecen sayılarımızda iPhone telefonları yine burada anlatmıştık. Bu gelişmelerden cokda uzak olmayan google, gPhone ile cep telefonları için geliştirilmiş Android işletim sistemiyle karşımızda.

Android 12 kasım tarihinde duyuruldu. √úrün satmak yerine popularitesini dahada artırma niyetinde olan google, android‚Äôi open source(açık kaynak) yaptı. Bu davranışı bilişim dünyasında ses getirdi ve daha duyurulmasının 2 gün sonrasında google da açılan android grubuna 6000 mesaj düştü. Birde google, en iyi android programı diye actığı yarışma bu kadar popular olmasını etkilemiş olsa gerek, zira bu yarışma 10milyon $ dağıtacağını duyurdu.


## Andorid Özellikleri:

Android Gelişmiş bir uygulama geliştirme catısını içinde barındırıyor. Bu çatı Dalvika dı verilen bir sanal makina üzerinde çalışarak daha üst katmanlarda daha kolay uygulam gelliştirmeye olanak sunuyor. İçerisinde entegre edilmiş bir browser da barındıran android, verilerin tutulmasına olanak sunacak SQLite içeriyor. MPEG4, H.264, MP3, AAC, AMR, JPG, PNG, GIF gibi medya formatlarını sorunsuz destekleyen android, üzerinde çalıştığı cihaza bağlı olarak 3G, WiFi, Bluetooth, EDGE gibi özellikleri de sorunsz şekilde destekliyor. En çok dikkat çeken özelliği ise belkide Eclipse için geliştirilmiş plugin. Bu sayede eclise üzerinde zengin içerikli uygulama geliştirme cok kolaylaşmış durumda.

### Android Mimarisi
Bu kadar tanıtımdan sonra android mimarisini inceleyelim.

h4.Kernel Seviyesi
Android, linux kernel 2.6 üzerine inşa edildi. Linux kernel 2.6 gerekli sürüclerle desteklenerek oluşturuldu. Bu sürücüler, ekran sürücülerinden wifi sürücüleirne, bluetooth sürücülerinden, tuş takımı sürüclerine kadar hemen hemen ihtiyac duyulan tüm sürücler yüklenmiş durumda. Bunun yanında genel işletim sistemi özellikleri yanında, güç yönetimi, bellek yönetimi de bu seviyede.

#### Kütüphaneler

Android içinde gerekli olan açık kaynak kütüphaneler eklnemyi unutulmamış. Bu kütüphanelerin başlıcaları SGL, SSL, WebKit, Sqlite şeklinde. Bu kütüphaneler daha üst seviyede uygulama catısının temellerini oluşturmak için kullanılıyor. Örneğin bunlardan Sqlite uygulamaların verileri tutabilmesi için minik bir veritabanı olarak görev yapıyor. Aynı şekilde Webkit ise entegre çalışan browser için motor görevini yapıyor.

#### Android Runtime

Bu katman üst katmanların çalışmasını olanak sunacak sanal makina vardır. Bu sanal makina Dalvik adı verilen bir makinedir. Özellikel düşük bellekli makinalar için tasarlanmış olan ve aynı anda birden fazla sanal makinanın çalışmasına olanak sunduğu için google tarafından tercih edilmiştir.android sistem yapısı

#### Uygulama Geliştirme Ortamı:

Bu kısım aslında SDK adını verdiğimiz, android için uygulama geliştirme ortamının adıdır. Yazılan tüm uygualamalar bu çatının üstünde yapılır. Bu sayede alt seviyeye uygulama geliştirme catının izin veridğinin dışında müdahele imkanı ortadan kalkmaktadır. Buda makinanın züerinde daha sağlam uygulamaların yazılması anlamına gelmektedir.
Bu katmanda çok önemli birkaç yapı bulunmaktadır. Bu yapıları incelemeye çalışalım.

* View System(Görüntü sistemi).: Bu özellik tüm kullanıcıya dönük arabirimlerin oluşturmaya olanak sunan yapıdır. Bu özellik sayesinde kulalnıcı dostu arabirimler hazırlanabilmektedir.

* Notification Manager: Bu özellik sayesinde çalışır durumdaki uygulamalar ( servis olarak yada arka planda çalışan uygulamalar) durum çubuğunda mesaj gönderme yapabilirler. Bu sayede kullanıcı bilgilendirme yapılmaya olanak sunulmuş olur.

* Resource Management: Performasn acısından grafiklerin, yazıların yönetimini yapan yapıdır.

* XMPP Service: Bazı uygulamaların arkaplanda çalışması istenebilir. Bu durumda bu yapıdan yaralanılır.

![android takvim](/images/views_datewidgets_example1_pickdate1.jpg)

Android bu pazarda iddialı olduğunu ilk gün göstermiştir. Gelişen Pazar içinde şirketlerin rekabetleri elbette son kullanıcıya yeni olanaklar sunacaktır. Bu yazımızda bu pazara yeni giren iddialı bir ortamı tanımaya çalıştık. Özellikle google desteğiyle büyük yollar almış görünen bu ortam daha henüz tam manasıyla hazır bile değil. Nitekim uygulama geliştirmek isteyenler ancak emülatörler üzerinde bunu yapabilecekeler, nitekim şu anda sadece gphone üzerine kuruldu, gphone ise tam olarak lansmanı bile yapılan telefon değil henüz en azından Türkiye de. Birgerçek varki google bu sektörde cok iddialı. Bakalım ne tür gelişmeler yaşanacak ileriki günlerde.