---
layout: post
title: "Groovy Programlamaya Giriş"
description: ""
category: Yazılım Geliştirme
tags: [groovy, java]
---

{% include JB/setup %}


[Daha önceki yazımda](/2010/08/groovy-ve-grails-kurulumu/) groovy ve grails’in nasıl kurulacağı bilgisini vermiştim. Bu yazımda ise groovy programlamaya başlayacağız.

Groovy java programlama diline alışkın kişilerin, Python, Ruby, Smalltalk yer alan özellikleri kullanabilmesine olanak sunan agile bir programlama dili olarak tanımlanıyor.

Groovy JVM üzerinde çalışır ve tüm groovy nesneleri java.lang.Object ten türemiştir. Groovy ile yazılan bir nesne derlendikten sonra bytecode a cevrilir. Oluşan `*.class` dosyasını classpath’inize eklenerek java tarafından kullamabilirsiniz. Yani java’dan groovy’ye, groovy den ise java’ya erişmek cok kolaydır.

	Groovy’ de “;” kullanma zorunluğu yoktur.

Groovy mevcut dilin kütüphanelerin dışında, diğer kütüphaneler ve JDK yer alan özelliklerin yer aldığı GDK’den oluşmaktadır 

Groovy javada yer alan List, Map ‘ e yeni özellikler katar. örneğin şu satır nesnelerin paketlerini ekrana basar.
{% highlight groovy %}
package com.rayyildiz
class ListMapTest {
   	static main(args) {
      	def classes = [String, Date, Long, Boolean]
      	println(classes.'package'.name);
   	}
}
{% endhighlight %}	

Bir siteye erişip içeriğini okumak için aşağıda bir code yer almakta, görebileceğiniz gibi groovy de bir rss’i almak cok kolay.Groovy de closure code yazmak çok kolaşmakta.
{% highlight groovy %}
package com.rayyildiz
import java.net.URL

class HelloWorld {
	static main(args) {
      	def url = new URL("http://rayyildiz.com/feed");
        url.eachLine { ln ->
        	println(ln);
      	}
	}
}
{% endhighlight %}

Özellikle java programcılarının çok kolay alışabileceği bir dil olan groovy yi incelemenizi tafsiye ederim. Size farklı bir bakış açışı kazandıracaktır.