+++
date= "2010-07-31"
title= "Tasarım Desenleri (Design Pattern)"
slug="java-ile-tasarim-desenleri"
tags= ["java","Design Pattern","Software Development"]
categories= ["Genel"]
+++



Yazılım geliştirmse süreciyle uğraşıyorsanız, özellikle nesneye dayalı programlama ([Object Oriented Programming](http://en.wikipedia.org/wiki/Object-oriented))- ile uğraşıyorsanız mutlaka görmüşsünüzdür. Peki tam olarak nedir tasarım desenleri?

[Tasarım desenleri](http://tr.wikipedia.org/wiki/Tasar%C4%B1m_%C3%B6r%C3%BCnt%C3%BCleri) ([Design Patterns](http://en.wikipedia.org/wiki/Design_pattern_%28computer_science%29)), bir yazılımın değişik durumlarda nasıl davranabileceğine ışık tutan şablondur. Herhangi bir programa dili bağımlı değildir. Projenizde oluşabilecek durumlar karşısında nasıl bir çözüm bulmanız gerektiği konusunda size ışık tutar. Özellikle daha önce sizin karşılaştığınız sorunların benzerleri için geliştirildiğinden size yardımcı olacaktır. Geliştirdiğiniz uygulama nasıl bir yapıda olduğu, ileride yeni özelliklerin eklenebileceği, farklı platformlarda çalışabilmesi… gibi yeni gelecek özelliklere çok hızlı adapte olabilmek için size bazı şablonlar sunar. Bu sayede, tüm uygulamayı yeniden yazmanız gerek kalmaz.

Örneğin, Scala programlama dili için kullanılacak bir IDE yazıyorsunuz, yazdığınız IDE nin şu an sadece linux ortamı için düşündünüz; ama çok fazla istek oldu ve bu uygulamanızı hem MACOS hem de windows platformunda implemente etmek durumunda kalırsanız, ne kadar kod yazmanız gerekiyor? Yoksa tüm uygulamayı sıfırdan yazmanız ( hatta 3 farklı proje olarak) mı gerekecek?

İşte bu ve buna benzer sorunları çözebilmeniz için, tasarım desenleri size bazı şablonlar sunar. Bu şablonlardan hangisinin sizin ihtiyacınıza göre olduğuna sizin karar vermeniz gerekecek.

Genel olarak tasarım modelleri 3 kategoride değerlendirilir:

### Yaratım Desenleri:

* Soyut Fabrika ( Abstract Factory)
* Yapıcı (Builder)
* Fabrika Yöntemi (Factory Method)
* Örnek (Prototype)
* Yegane(Singleton)

### Yapısal Desenler:

* Uyumlayıcı(Adapter)
* Köprü (Bridge)
* Bileşik(Composite)
* Dekoratör (Decorator)
* Vitrin(Facade)
* Sineksiklet(Flyweight)
* Vekil(Proxy)

### Davranış Desenleri:

* Sorumluluk Zinciri (Chain of Responsibility)
* Komut(Command)
* Yorumlayıcı(Interpreter)
* Yineleyeyici(Iterator)
* Arabulucu(Mediator)
* Yadigar(Memenoto)
* Gözlemci(Observe)
* Durum(State)
* Strateji (Strategy)
* Kalıp Yordamı (Template method)
* Ziyaretçi(Visitor)

Bu desenleri sırasıyla yazılarımda anlatacağım.

Tasarım desenleri hakkındaki örnek uygulamaları <http://github.com/rayyildiz/DesignPatterns> adresinden ulaşabilirsiniz.