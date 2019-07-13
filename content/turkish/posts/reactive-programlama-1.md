+++
date= "2019-07-10"
title= "Impereative Programlama"
slug="reactive-programlama-1"
tags= ["java","Software Development"]
categories= ["Genel"]
+++

# Imperative Programllama

Reaktif programlamaya aciklamaya calisacagim bu yazi dizisinde ile ilgili diger yazilar:

- Impereative Programming
- [Reactive Programming](/tr/posts/reactive-programlama-2)
- [Functional Programming](#soon)

> Butun terimlerin Turkce'sini cevirmek biraz zor oldugu ve internette arastirma yaptiginizda orijinal tabirleri bulacaginiz icin, bu yazi dizisinde terimlerin orijinallerini kullanmaya calisacagim.

# Giris

Universitede bilgisayar bilimleri veya programala iceren benzer bolumlerden mezun olan bircok kisi muhtemelen [Oject Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) biliyordur. Ben de diger bircok kisi gibi programlaya [Pascal](https://www.freepascal.org/) ile basladim. Daha sonra ise [C](https://gcc.gnu.org/),[C++](http://www.cplusplus.com/), ve [Java](https://openjdk.java.net/) seklinde bir ogrenme sureci gordum. 



## Imperative Programlama (IP)

Butun bu programlama dilleri aslinda sizin bilgisayara ne yapmasi gerektigini tek tek emir vererek gelistirdiginiz bir ortam. Basit bir ornekten gitmek gerekirse asagidaki super compleks matematik islemi icin kullandigimiz yontem imperative programladir. 

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

Burada satir satir aciklamak gerekiyorsa:

- ```list.get(i)``` ile listenin ```i```. elemanini ver, 
- bu degeri ```x``` diye tanimlanmis degiskene ata,
- ```sum``` degiskenini bu sayi ile topla,
- ```i``` degiskeni ile ```list.size``` karsilastir, ```list``` bitmediyse ayni islemleri tekrarla,
- sonucu dondur.
 

seklinde bir yol izliyoruz. Flowchart hatirliyorsunuz degil mi? 

<img src="/images/flowchart.jpg">


### Object Oriented Programming

Object Oriented Programming (a.k.a. OOP) , bir imperative programlama stilidir. Cogu kisi tarafindan OOP ile IP aslinda karistirildigina sahit oldum. Herhalde OOP cok yaygin oldugu icin bu sekilde dusunuluyor. Diger bir ifade ile Pascal,Cobol,Fortran fazla yaygin kullanilmadigi icin, OOP ile imperative-style birbirlerinin yerine kullaniliyor. OOP kisaca herseyin birer object oldugu bir yapi ustune kurulu bir teknik. Gunumuzdeki en populer Java,C++,Python,C#... gibi bircok programlama dili bu teknigi benimsemistir. 


Buraya kadar olan konulari bildiginize eminim. Asil soru bundan sonra basliyor. Peki ne problem vardi da bu **structured** programlama ustune birseyler bulmaya calisiyoruz? Veya ihtiyacimiz var mi?

Adil olmak gerekirse **imperative style** bircok guzel tarafi var, negatif yonlerini vermeden once bu stilin hangi durumlarda basarili olduguna bakalim.

### IP Avantajlari 

Oncelikli olarak cok daha basit bir stil. Programci olarak okudugunuz her bir satirda ne olacagini ongormeniz mumkun. Satirlarin calismasinda bir sira var. Bir satir calismasi bitmeden diger satira uygulama atlayamaz. Bu ise size kod ustunde buyuk bir kontrol gucu veriyor (yada gibi gorunur). 

OOP, producedural yapinin sebep oldugu karmasayi engellemek icin  guzel cozumler sunuyor.  Herseyin birer object oldugu, inheritence ve abstraction ile karmasayi azaltiyor, interface ile metot imzalarinin ayni olmasini compile asamasinda garanti ediyor.  

### IP Sorunlu Taraflari

Imperetive-style, en buyuk problem teskil ettigi yer state saklamasidir. Ozellikle global state fonksiyonun sonucunu predict edilememesine neden olmaktadir. Ayni ornekten gidelim. 

```java
public class ComplexMath {
  private int initialValue = 0;

  public int sum(List<Integer> xs) {
    int sum = initialValue;
    
    ...
  }
```

Masumane bir sekilde ```sum``` degiskenin ilk degerini bir global bir ```initialValue``` degiskeninden aldik. Asagidaki sonucun ```result1 != result``` cikmasi cok normal. Cunku ```math.initialValue=3``` diyerek global bir state degistirmis olduk. Bu sayede ayni parametre ile fonksiyon farkli sonuclar dondu. **"Benim bilgisayarimda calisiyordu"** sozu tanidik geldi mi size? Aslinda bu konuda **side-effect** de denilir. 

```java
ComplexMath math = new ComplexMath();
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
int result1 = math.sum(list);

math.initialValue = 3;
int result2 = math.sum(list);
```

Diger bir sorun olan konu ise ozellikle OOP nin modular yapisi ile ilgili. Ozellikle [SOLID (pdf)](https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf) prensiplerinin uygulamazsaniz bu karisiniza cikacak bir sorundur. (Not : Ileriki bir zamanda SOLID prensipleri hakkinda bir yazi yayinlayacagim, burada sorunlari daha detayli yazarim)


Bir baska sorun ise concurrency. Bunun icin kucuk bir ornek paylasayim. Burada ```Counter.increment()``` fonksiyonu her islem _5ms_ aldigi simule ediliyor. 2 tane ```Thread``` calismaya basliyor ve her birinin  1 den 100 e kadar sayip ```result``` bir artirmasi gerekiyor. Bu durumda 2 thread _ayni nesnenin local degiskenini_ birer artiriyor, 2 therad oldugu icin de sonucun 200 olmasi gerektigini bekliyoruz. Ancak farkli bir deger yazacaktir. Bunun nedeni iki threadin yarismasi, bir diger ifade ile [race condition](http://www.javacreed.com/what-is-race-condition-and-how-to-prevent-it/) olustu.

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

Bunun haricinde ise sistemin donmasina neden olan [Dead Lock](https://www.geeksforgeeks.org/operating-system-process-management-deadlock-introduction/) ayrica baska bir sorun. Bu konuda daha once yaptigim bir sunum vardi, Concurrency ve paralel programlama ile ilgili sunumu [Slideshare](https://www.slideshare.net/rayyildiz/concurrency-parallel-programming) bulabilirsiniz.
