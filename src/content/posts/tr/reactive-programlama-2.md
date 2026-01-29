+++
date= "2015-06-01"
title= "Reactive Programlama"
slug="reactive-programlama-2"
tags= ["java","Software Development"]
categories= ["Genel"]
series = ["Reaktif Programlama"]
+++

Reaktif programlamaya açıklamaya calışacağım bu yazı dizisinde ile ilgili diğer yazılar:

- [Impereative Programming](/tr/posts/reactive-programlama-1)
- Reactive Programming
- [Functional Programming](#soon)

> Butun terimlerin Turkçe'sini çevirmek biraz zor olduğu ve internette arastırma yaptığınızda orijinal tabirleri bulacağınız için, bu yazı dizisinde terimlerin orijinallerini kullanmaya çalısacağım.

## Giris

Imperative programlamanın tam tersi ise declerative programlamadır. Burada asıl husus olay ustune kuruludur. Burada bilgisayara satır satır ne yapacağını vermek yerine, bir olay olduğunda uygulamanın nasıl davranması gerektiğini soylersiniz. Bu konu baya genis bir konu olduğu için sadece bir bolumune odaklanacağız: reactive programlama.

## Reactive Programlama

Ilk ornekte yer alan [compleks matematik problemini](#imperative-style)  reactive seklinde yazmak istiyorsak su sekilde bir kod yazmamız gerekirdi. Kısaca açıklamak gerekirse burada bir [accumalator](https://towardsdatascience.com/what-is-tail-recursion-elimination-or-why-functional-programming-can-be-awesome-43091d76915e) kullanıyoruz. Bu sayede stack-overflow error almayı engellemis oluyoruz.

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

> Dogruyu soylemek gerekirse ustteki ornek aslında fonksiyonel programalaya giriste anlatılan bir ornektir. Burada her ```onNext``` olayında toplama islemi yapılıyor, vurgulamaya calıstığım yer burası. 

Burada ustteki ornekten çok compleks birsey yapmıyoruz. Sadece for-loop yerine recursive fonksiyon kullandık burada. Burada local ya da global değisken tutmak yerine recursive olarak fonsksiyonun kendisini çağırdık. Bu sekilde hesaplama bitince kadar devam edecek ve listenin sonuna geldiğinde ```accumalor``` sakladığımız değeri sonuç olarak donuyoruz. Bu sekilde yapmamızın nedeni olası stack-overflow-error engellemek.  Bu konuya tail-recursive da denilir.

Bunun IP den farkı nedir:

- Oncelikli olarak hem ```sum``` hem de ```sumAcc``` sonucları her zaman aynı input ile aynı sonucu verecektir. Cok detaya girmeyeceğim ama bu matematikte **kume teorisi** olarak hatırlıyor olmanız gerekiyor. [Category Theory](https://en.wikipedia.org/wiki/Category_theory)
- State olmadığı icin dead-lock, race-condition gibi sorunlar olmuyor.
