+++
date= "2009-04-22"
title= "Cloud Computing Yapmak İstiyorum:Stax.net"
slug="cloud-computing-cozumu-stax-net"
tags= ["java", "Cloud","BigData"]
categories= ["Genel"]
+++


Cloud Computing yabancı olanlar için ne olduğu hakkında bilgi vermekle başlayayım. Cloud computing ( kümesel işlemler diye Türkçe’de kullanılıyor)- hesap duyulan birçok işlemin uzaktaki bir veya birden fazla bilgisayar üzerinde yapılabilmesine olanak sunan bir mimari.- Bu konuda başta google ile duymaya başladığımız bu mimari, amazon ws ile cok daha gün yüzüen cıktı. Özellikle Amazon Web Servisleri bu konuda cok yol katetti. Gectiğimiz günlerde, twitter‘ın Amazon WS gecmesi ve hemen arkasından google app engine‘in java desteği sunması, cloud computing kavramını bir anda öne cıkardı.

Özellikle google app engine java desteği, cok önemli bir gelişme oldu. Daha öncesinde sadece python desteği sunan google engine, daha geniş kitleye hitap eden java desteği ile ciddi bir talep almış görünüyor.

Benimde bu konuda araştırma yaparken karşılaştığım bir servis var: stax.net. Şu anda beta döneminde ücretsiz sunulan servis sayesinde cloud computing yapabilmeniz mümkün. Amazon WS üzerine kurulmuş bu servis ile struts, wicket, jython, jruby, cold fusion başta olmak üzere kabaca java uygulamanızı yayınlayabiliyorsunuz. Hatta ben bu uygulama üzerinde seam çalıştırdım. Yani kabaca Apache Tomcat üzerinde çalıştırabildiğiniz tüm java uygulamalarını yayınlayabiliyorsunuz.

Sitesine girerek üye olduğunuzda size onay maili gelecektir(üyelik onayı birkaç gün sürebiliyor) . Daha sonra siteye giriş yaparak, yeni bir uygulama acabilirsiniz.

![Stax Net](/images/stax-net.jpg)

Yeni bir uygulama actıktan sonra, bunu uygulamanızı kendi bilgisayarınıza indirmeniz ve geliştirmenizi devam etmelisiniz. Size uygun bir template seçerek ilk uygulamanızı acabilirsiniz.

Daha sonrasında stax sdk indirmeniz gerekiyor. Bu adresten stax sdk indirebilirsiniz.

Stax sdk indirdikten sonra windows ortamında iseniz kurulum dizin altındaki stax console kullanarak, linux ortamında iseniz- gerekli path ayarladıktan sonra konsole üzerinden komutları kullanabilirsiniz.

Benim size tavsiyem command promt üzerinden stax help komutu ile başlamanız.

Uygulamanız seçili iken, configuration tab kullanarak uygulamanızın nasıl çalışacağını ayarlayabilirsiniz. 

Yanda da görebileceğiniz gibi şu anda stax 5′e kadar shared cluster imkanı veriyor. Beta sürecinden sonra ise ücretleri değişir bir şekilde dedicated server imkanı vereceklerini söylüyorlar.- Aynı zamanda herhangi bir bug bulmanız durumunda sizinle oldukça ilgileniyor ve bug ı kapatmaya çalışıyorlar.

Güzel özelliklerden bir diğeri ise, uygulamanızı app.username.staxapps.net gibi erişebilecekken, gerekli ayarlamaları yaparak bir domain olarak da erişebilmenize olanak sunması. Gerekli ayarları configuration tab altında bulabilmeniz mümkün.

>Stax.net in güzel bir özelliği ise mysql veritabanı sunması.

Beta sürecinde bile olsa, verdikleri hizmetler acısından ve de ücretsiz olarak java uygulamanızı yayınlayabileceğiniz yer sunmaları acısından başarılı buldum. Bu konuda bir pazarın eksik olduğu kesin.