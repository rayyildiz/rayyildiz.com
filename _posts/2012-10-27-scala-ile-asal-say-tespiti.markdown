---
layout: post
title: "Scala ile Asal Sayı Tespiti"
description: ""
category: Programlama
tags: [scala]
---

Scala 

{% highlight scala %}
	def isPrime(n:Int): Boolean = (2 until n) forall (d => n % d !=0)
{% endhighlight %}