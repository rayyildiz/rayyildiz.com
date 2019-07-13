+++
date= "2019-07-13"
title= "Reactive Programlama"
slug="reactive-programlama-2"
tags= ["java","Software Development"]
categories= ["Genel"]
+++

# Decleretaive Programlama

Reaktif programlamaya aciklamaya calisacagim bu yazi dizisinde ile ilgili diger yazilar:

- [Impereative Programming](/tr/posts/reactive-programlama-1)
- Reactive Programming
- [Functional Programming](#soon)

> Butun terimlerin Turkce'sini cevirmek biraz zor oldugu ve internette arastirma yaptiginizda orijinal tabirleri bulacaginiz icin, bu yazi dizisinde terimlerin orijinallerini kullanmaya calisacagim.

# Giris

Imperative programlamanin tam tersi ise declerative programlamadir. Burada asil husus olay ustune kuruludur. Burada bilgisayara satir satir ne yapacagini vermek yerine, bir olay oldugunda uygulamanin nasil davranmasi gerektigini soylersiniz. Bu konu baya genis bir konu oldugu icin sadece bir bolumune odaklanacagiz: reactive programlama.

## Reactive Programlama

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

> Dogruyu soylemek gerekirse ustteki ornek aslinda fonksiyonel programalaya giriste anlatilan bir ornektir. Burada her ```onNext``` olayinda toplama islemi yapiliyor, vurgulamaya calistigim yer burasi. 

Burada ustteki ornekten cok compleks birsey yapmiyoruz. Sadece for-loop yerine recursive fonksiyon kullandik burada. Burada local ya da global degisken tutmak yerine recursive olarak fonsksiyonun kendisini cagirdik. Bu sekilde hesaplama bitince kadar devam edecek ve listenin sonuna geldiginde ```accumalor``` sakladigimiz degeri sonuc olarak donuyoruz. Bu sekilde yapmamizin nedeni olasi stack-overflow-error engellemek.  Bu konuya tail-recursive da denilir. 

Bunun IP den farki nedir:

- Oncelikli olarak hem ```sum``` hem de ```sumAcc``` sonuclari her zaman ayni input ile ayni sonucu verecektir. Cok detaya girmeyecegim ama bu matematikte **kume teorisi** olarak hatirliyor olmaniz gerekiyor. [Category Theory](https://en.wikipedia.org/wiki/Category_theory)
- State olmadigi icin dead-lock, race-condition gibi sorunlar olmuyor.
