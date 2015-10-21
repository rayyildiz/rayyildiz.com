---
published: true
title: Scala ile Asal Sayı Tespiti
layout: post
tags: [scala]
categories: [Scala]
---
{% include JB/setup %}


Scala ile bir asal sayının tespiti aşağıdaki gibi bir kod ile bulmak mümkün. Bu kod parçası scala'nın ne denli güçlü olduğunu göstermeye yeterli bence. Daha sonraki yazılarımızda scala ile daha detaylı bir yazı yazacağım.

{% highlight scala %}
def isPrime(n:Int): Boolean = (2 until n) forall (d => n % d !=0)
{% endhighlight %}