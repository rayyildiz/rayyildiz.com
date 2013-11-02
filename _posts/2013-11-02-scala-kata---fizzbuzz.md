---
layout: post
title: "Scala Kata - FizzBuzz"
description: ""
category: Genel
tags: [scala,coding-kata]
---
{% include JB/setup %}

#Scala Coding Kata - FizzBuzz Problemi

##CodingKata Nedir?
İlk kez [Dave Thomas](http://en.wikipedia.org/wiki/Dave_Thomas_programmer) tarafından ortaya atılan [Coding-Kata](http://en.wikipedia.org/wiki/Kata_programming)) ifadesi bir programlama dilindeki yeteneklerinizi geliştirmek amacıyla yapılan örneklere denilir. 

Burada ben de Scala ile aşağıdaki listede yer alan problemleri çözerek burada sizinle paylaşıyor olacağım.

* Fizz Buzz
* Prime Factors
* String Calculator
* Gilded Rose
* Word Wrap
* Tennis Game
* Bowling Game
* Mars Rover
* Roman Numerals
* Coin Change
* Game of Life
* Potter

>Bugün yapacağımız ve bundan sonra yapacağımız çözümlerin kaynak kodlarını [Github.com/rayyildiz/codekata-scala](https://github.com/rayyildiz/codekata-scala) adresinden erişebilirsiniz.


##FizzBuzz Problemi Nedir?

Scala ile yazmaya başladığım ilk CodingKata problemimiz FizzBuzz. FizzBuzz en az 2 kişi ile oynanan matematik geliştirmeye yönelik bir oyundur. 1'den başlayarak sırasıyla 1,2,3 diye saymaya başlanır. Eğer söylenen sayı 3'e tam bölünüyorsa *Fizz*, 5'e tam bölünüyorsa *Buzz*, hem 3 hem de 5 'e tam bölünüyorsa *FizzBuzz* denilir. Yanlış yapan elenir.

Buna göre sırasıyla aşağıdaki gibi söylenmesi gerekiyor.

>1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, ...


Aynı oyunu sadece 10'luk düzenle değil, 8'lik , 16'lık düzende de oynanan halleri de vardır. FizzBuzz ile ilgili daha detaylı bilgiye [Wikipedia](http://en.wikipedia.org/wiki/Fizz_buzz) adresinden erişebilirsiniz. 

##FizzBuzz Problemin Çözümü

FizzBuzz probleminin çözümü için scala da patternt-matching ile çok kolay çözebiliriz. Verilen sayının FizzBuzz problemini çözen kod şu şekildedir.

{% highlight scala %}
def matchTest(i:Int): String = (i % 3, i % 5) match {
    case (0 , 0) => "FizzBuzz"
    case (0 , _) => "Fizz"
    case (_ , 0) => "Buzz"
    case  _      => i.toString()
  }
{% endhighlight %}

Bu örneği verilen sayıya kadar hesap ederek bir List[String] dönen çözüm ise şu şekilde olacaktır. 

{% highlight scala %}
def findFizzBuzz(max:Int):List[String] = (for ( i <- 1 to max) yield (matchTest(i))).toList
{% endhighlight %}


Problemin çözümünü içerek uygulamayı  https://github.com/rayyildiz/codekata-scala/tree/master/FizzBuzz adresinden indirebilirsiniz. Ayrıca [github.com/rayyildiz/codekata-scala](https://github.com/rayyildiz/codekata-scala) github hesabımda diğer coding-kota problemlerini çözümlerini de paylaşacağım.