+++
date= "2010-08-10"
title= "Soyut Fabrika Tasarım Deseni (Abstract Factory)"
slug="java-ile-tasarim-desenleri-soyut-tasarim-deseni"
tags= ["java","Design Pattern","Software Development"]
categories= ["Genel"]
series = ["Design Pattern"]
+++


Tasarım desenleri hakkında giriş mahiyetindeki yazıma buradan ulaşabilirsiniz. Bu tasarım desenlerinden ilki olan soyut fabrika tasarım deseni (Abstract Factory) bu yazımızda genel olarak göreceğiz.

Soyut fabrika tasarım deseninin amacı, farklı ürün ailelerin için uygulanması söz konusu olduğu durumlarda tercih edilir. Mesela yazdığınız uygulamanın hem macos hem de windows platformunda çalışması sözkonusu olduğu durumlarda UI nasıl oluşması gerektiğini soyutlandırarak daha hızlı adapte edebileceğiniz bir yapı geliştirebilirsiniz.

Şekilde de görebileceğiniz gibi Application, hangi platformda çalıştığını bilmez, Application sadece GUIFactory arayüzünden uygulanmış bir nesne geelcektir. Burada hem macos için hem de windows için birer tane factory ve birer tane de Button nesneleri geliştirmeniz gerekir ancak asıl Application nesneniz işletim sistemine göre dallanmayacak ve daha sade bir yapıda olacaktır.

Bunu başka bir örnekle pekiştirelim. Diyelim ki kullanıcıların adres bilgilerini tutmakta için bir sınıfınız var. Farkettiniz ki Türkiye için ülke kodu “tr_TR” kullanmanız gerekirken, ABD için “us_US” kullanmanız gerekiyor. Bunu nasıl tutardınız? Hangi koşulda Türkiye için, hangi koşulda ABD için sonuc dönmeniz gerekiyor? Bunu çözmeniz için nesneye yapıcı metoduna parametre göndrerek yapabilirsiniz.

Bu örnekte country yapıcı metottan bir sayı olarak gönderiliyor ve- getCode metodunda bu sayıya göre sonuc dönüyor. 3. bir ülke gelmesi durumunda ise bu gibi yerleri düzeltmeniz gerekiyor.

```java
public String getCode(){
    if ( country == 1) return "tr_TR";
    else return "us_US";
}
```

![Abstract Design Pattern](/images/abstract_design_pattern1.jpg)

Üstteki şekilde örnek uygulamamızın UML diagramı bulunmakta. Bu diagramda görebileceğiniz gibi soyut bir fabrika sınıfı ve soyut bir Address nesnesi yer almakta. Şimdi soyut sınıfımızın ve bu sınıftan türeyen fabrika nesnelerinin kodlarına bakalım.

```java
package com.rayyildiz.patterns;

public interface AbstractFactory {
    Address createAddress();
}

public class TurkeyFactory implements AbstractFactory {
    @Override
    public Address createAddress() {
        return new TurkeyAddress();
    }
}

public class USAFactory implements AbstractFactory {
    @Override
    public Address createAddress() {
        return new USAAddress();
    }
}
```

Gördünüz gibi her ülke kendisi için uygulanmış neseneyi döndürüyor. Peki bu nesnelerin içlerine bakalım şimdi de:

```java
package com.rayyildiz.patterns;

public abstract class Address {
    ..
    abstract String getCountryCode();
    ..
}

public class TurkeyAddress extends Address {
    @Override
    String getCountryCode() {
        return "tr_TR";
    }
}

public class USAAddress extends Address {
    @Override
    String getCountryCode() {
        return "us_US";
    }
}
```

Peki üçüncü bir ülke geldiğinde yapmamız gereken ne oalcak? Bir tane fabrika sınıfı ve kendisi için bir nesne yazmamız yeterli. Asıl uygulamamızda hiçbirşey yazmamıza gerek kalmayacak.

Şimdi ise Application nesnesine göz atalım.

```java
package com.rayyildiz.patterns;

public class Application {
    AbstractFactory _factory;
    public Application(AbstractFactory factory) {
        super();
        _factory = factory;
    }

    public void show(){
        Address address = _factory.createAddress();
        address.setAddress("address");
        address.setCity("city");

        System.out.println("address :" + address);
    }
}
```

Main.class ise

```java
package com.rayyildiz.patterns;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rnd = new Random();
        int number = rnd.nextInt(10);
        boolean odd = ((number % 2) == 0);

        AbstractFactory factory = odd ? new TurkeyFactory(): new- USAFactory();
        Application app = new Application(factory);
        app.show();

        if (System.console()!=null) System.console().readLine();
    }
}
```

Burada sadece örnek olması için rastgele bir sayı üretilmekte, bu üretilen sayıya göre USAFactory veya TurkeyFactory nesnesi oluşturulmaktadır. Göreceğiniz gibi uygulamanın ne kırıldığı yer burası. 3. bir ülke gelmesi durumunda burası değiştirmekle (hatta gerekirse XML den okuyarak da) uygulamamızı bu yeni platforma adapte edebiliriz.

Bu ve zamanla uygulanan diğer tasarım desenleri hakkındaki örnek uygulamaları <http://github.com/rayyildiz/DesignPatterns> adresinden ulaşabilirsiniz.