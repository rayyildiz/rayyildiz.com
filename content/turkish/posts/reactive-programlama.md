+++
date= "2019-07-10"
title= "Reactive Programlama"
slug="reactive-programlama"
tags= ["java"]
categories= ["Genel"]
+++

# Reactive Programlama

## Giris

Universitede bilgisayar bilimleri veya programala iceren benzer bolumlerden mezun olan bircok kisi muhtemelen [Oject Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) biliyordur. Ben de diger bircok kisi gibi programlaya [Pascal](https://www.freepascal.org/) ile basladim. Daha sonra ise [C](https://gcc.gnu.org/),[C++](http://www.cplusplus.com/), ve [Java](https://openjdk.java.net/) seklinde bir ogrenme sureci gordum. 

## Imperative Style

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

### Imperative-style: Avantajlari 

Oncelikli olarak cok daha basit bir stil. Programci olarak okudugunuz her bir satirda ne olacagini ongormeniz mumkun. Satirlarin calismasinda bir sira var. Bir satir calismasi bitmeden diger satira uygulama atlayamaz. Bu ise size kod ustunde buyuk bir kontrol gucu veriyor (yada gibi gorunur). 

OOP, producedural yapinin sebep oldugu karmasayi engellemek icin  guzel cozumler sunuyor.  Herseyin birer object oldugu, inheritence ve abstraction ile karmasayi azaltiyor, interface ile metot imzalarinin ayni olmasini compile asamasinda garanti ediyor.  

### Imperative-style: Sorunlu yonleri

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


## Declerative Programlama 

Imperative programlamanin tam tersi ise declerative programlamadir. Burada asil husus olay ustune kuruludur. Burada bilgisayara satir satir ne yapacagini vermek yerine, bir olay oldugunda uygulamanin nasil davranmasi gerektigini soylersiniz. Bu konu baya genis bir konu oldugu icin sadece bir bolumune odaklanacagiz: reactive programlama.

### Reactive Programlama

Ilk ornekte yer alan [compleks matematik problemini](#imperative-style)  reactive seklinde yazmak istiyorsak su sekilde bir kod yazmamiz gerekirdi. Kisaca aciklamak gerekirse burada bir [accumalator](https://towardsdatascience.com/what-is-tail-recursion-elimination-or-why-functional-programming-can-be-awesome-43091d76915e) kullaniyoruz. Bu sayede stack-overflow error almayi engellemis oluyoruz.

```java

public class ComplexMath {

  private int sumAcc(final Iterator<Integer> xs,final Integer accumulator) {
    if (xs.hasNext()) {
      return sumAcc(xs, xs.next() + accumulator);
    } else {
      return accumulator;
    }
  }

  public int sum(List<Integer> xs) {
    return sumAcc(xs.iterator(), 0);
  }
}
```

Burada ustteki ornekten cok compleks birsey yapmiyoruz. Sadece for-loop yerine recursive fonksiyon kullandik burada. Burada local ya da global degisken tutmak yerine recursive olarak fonsksiyonun kendisini cagirdik. Bu sekilde hesaplama bitince kadar devam edecek ve listenin sonuna geldiginde ```accumalor``` sakladigimiz degeri sonuc olarak donuyoruz. Bu sekilde yapmamizin nedeni olasi stack-overflow-error engellemek.  Bu konuya tail-recursive da denilir. 

Bunun IP den farki nedir:

- Oncelikli olarak hem ```sum``` hem de ```sumAcc``` sonuclari her zaman ayni input ile ayni sonucu verecektir. Cok detaya girmeyecegim ama bu matematikte **kume teorisi** olarak hatirliyor olmaniz gerekiyor. [Category Theory](https://en.wikipedia.org/wiki/Category_theory)
- State olmadigi icin dead-lock, race-condition gibi sorunlar olmuyor.

