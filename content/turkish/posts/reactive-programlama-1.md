+++
date= "2019-07-10"
title= "Impereative Programlama"
slug="reactive-programlama-1"
tags= ["java","Software Development"]
categories= ["Genel"]
series = ["Reaktif Programlama"]
+++

Reaktif programlamaya acıklamaya calışacağım bu yazı dizisinde ile ilgili diğer yazılar:

- Impereative Programming
- [Reactive Programming](/tr/posts/reactive-programlama-2)
- [Functional Programming](#soon)

> Bütün terimlerin Türkçe'sini çevirmek biraz zor olduğu ve internette araştırma yaptığınızda orijinal tabirleri bulacağınız için, bu yazi dizisinde terimlerin orijinallerini kullanmaya calısacağım.

## Giriş

Üniversitede bilgisayar bilimleri veya programala iceren benzer bölümlerden mezun olan birçok kişi muhtemelen [Oject Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) biliyordur. Ben de diğer birçok kişi gibi programlaya [Pascal](https://www.freepascal.org/) ile başladım. Daha sonra ise [C](https://gcc.gnu.org/),[C++](http://www.cplusplus.com/), ve [Java](https://openjdk.java.net/) şeklinde bir öğrenme süreci gördüm.

## Imperative Programlama (IP)

Bütün bu programlama dilleri aslında sizin bilgisayara ne yapmasi gerektiğini tek tek emir vererek geliştirdiğiniz bir ortam. Basit bir örnekten gitmek gerekirse, aşagıdaki süper compleks matematik işlemi için kullandığımız yöntem imperative programladir.

```java
public class ComplexMath {

  public int sum(List<Integer> list) {
    int sum = 0;
    if (list.isEmpty()) {
      return 0;
    }

    for (int i=0; i < list.size(); i++) {
      int x = list.get(i);
      sum = sum + x;
    }

    return sum;
  }
}
```

Burada satır satır aciklamak gerekiyorsa:

- ```list.get(i)``` ile listenin ```i```. elemanini ver,
- bu değeri ```x``` diye tanımlanmis degişkene ata,
- ```sum``` degişkenini bu sayı ile topla,
- ```i``` değiskeni ile ```list.size``` karşılastır, ```list``` bitmediyse aynı işlemleri tekrarla,
- sonucu dondur.

şeklinde bir yol izliyoruz. Flowchart hatırlıyorsunuz değil mi?

![Flow chart](/images/flowchart.jpg)

### Object Oriented Programming

Object Oriented Programming (a.k.a. OOP) , bir imperative programlama stilidir. Coğu kişi tarafindan OOP ile IP aslında karıştırıldığına şahit oldum. Herhalde OOP çok yaygın olduğu için bu şekilde düşünülüyor. Diğer bir ifade ile Pascal,Cobol,Fortran fazla yaygın kullanılmadiği için, OOP ile imperative-style birbirlerin yerlerine kullanılıyor. OOP kısaca herşeyin birer object olduğu bir yapı üstüne kurulu bir teknik. Günümüzdeki en populer Java,C++,Python,C#... gibi bircok programlama dili bu tekniği benimsemiştir.

Buraya kadar olan konulari bildiğinize eminim. Asıl soru bundan sonra başlıyor. Peki ne problem vardı da bu **structured** programlama üstüne birşeyler bulmaya calışıyoruz? Veya ihtiyacımız var mı?

Adil olmak gerekirse **imperative style** birçok güzel tarafı var, negatif yönlerini yer vermeden önce bu stilin hangi durumlarda başarılı olduğuna bakalım.

### IP Avantajları

Öncelikli olarak çok daha basit bir stil. Programcı olarak okuduğunuz her bir satırda ne olacağını öngörmeniz mümkün. Satırların çalismasında bir sıra var. Bir satır calışması bitmeden diğer satıra uygulama atlayamaz. Bu ise size kod üstünde büyük bir kontrol gücü veriyor (yada gibi gorunur).

OOP, producedural yapının sebep olduğu karmaşayı engellemek için  güzel cözümler sunuyor.  Herşeyin birer object oldugu, inheritence ve abstraction ile karmaşayı azaltıyor, interface ile metot imzalarının aynı olmasını compile aşamasında garanti ediyor.  

### IP Sorunlu Tarafları

Imperetive-style, en büyük problem teşkil ettiği yer state saklamasıdır. Özellikle global state fonksiyonun sonucunu predict edilememesine neden olmaktadır. Aynı örnekten gidelim.

```java
public class ComplexMath {
  private int initialValue = 0;

  public int sum(List<Integer> xs) {
    int sum = initialValue;

    ...
  }
```

Masumane bir şekilde ```sum``` değiskenin ilk değerini bir global bir ```initialValue``` değişkeninden aldık. Aşağıdaki sonucun ```result1 != result``` cıkması cok normal. Cünkü ```math.initialValue=3``` diyerek global bir state değiştirmiş olduk. Bu sayede aynı parametre ile fonksiyon farklı sonuclar döndü. **"Benim bilgisayarimda calisiyordu"** sozu tanıdık geldi mi size? Aslinda bu konuda **side-effect** de denilir.

```java
ComplexMath math = new ComplexMath();
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
int result1 = math.sum(list);

math.initialValue = 3;
int result2 = math.sum(list);
```

> Burada bu hatayı görmek belkı mümkün ama inanın bana proje büyüdüğünde bu şekilde bir hata yapma olasılığı çok fazla.

Diğer bir sorun olan konu ise özellikle OOP nin modular yapısı ile ilgili. Özellikle [SOLID (pdf)](https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf) prensiplerine sadık kalmazsanız, bu karşınıza çıkacak bir soruna neden olur.

Bir başka sorun ise [race condition](https://stackoverflow.com/questions/34510/what-is-a-race-condition). Bunun için küçük bir örnek paylaşayım. Burada ```Counter.increment()``` fonksiyonu her işlem _5 ms_ aldığı simule ediliyoruz. 2 tane ```Thread``` calışmaya başlıyor ve her birinin  1 den 100 e kadar sayıp ```result``` bir artırması gerekiyor. Bu durumda 2 thread _ayni nesnenin local değişkenini_ birer artırıyor, 2 therad oldugu icin de sonucun 200 olmasi gerektigini bekliyoruz. Ancak farkli bir deger yazacaktir. Bunun nedeni iki threadin yarismasi, bir diger ifade ile *race condition* oluştu.

```java
class Counter {
  int result;

  void increment() {
    Thread.sleep(5);

    result++;
  }
}

public static void main(String[] args) throws InterruptedException {
    Counter counter = new Counter();

    Runnable r = () -> {
      for (int i = 0; i < 100; i++) {
        counter.increment();
      }
    };

    Thread thread1 = new Thread(r);
    Thread thread2 = new Thread(r);

    thread1.start();
    thread2.start();
    thread1.join();
    thread2.join();

    System.out.println(counter.result);
}
```

Bunun haricinde ise sistemin donmasına neden olan [Dead Lock](https://www.geeksforgeeks.org/operating-system-process-management-deadlock-introduction/) bir başka sorun. Bu konuda daha once yaptığım bir sunum vardı, Concurrency ve paralel programlama ile ilgili sunumu [Slideshare](https://www.slideshare.net/rayyildiz/concurrency-parallel-programming) bulabilirsiniz.
