+++
date= "2010-08-05"
title= "Groovy ve Grails Kurulumu"
slug="groovy-ve-grails-kurulumu"
tags= ["java","groovy"]
categories= ["Arsiv"]
+++


## Groovy Nedir?

![Groovy](/images/groovy_medium.jpg#floatleft)

Groovy JVM çalışan bir dinamik bir scripting dildir. Groovy bünyesinde, python, ruby, perl ve smaltalk programlama dillerinden özellikler içerdiği gibi, java kütüphanelerini kullanması, Groovy’ye oldukça önemli artı katmaktadır. Groovy, yazılan bir kodu direkt JVM bytecode çevirir.

Eclipse, NetBeans ve Intellij Idea da geliştirilmiş eklentiler sayesinde groovy geliştirebilirsiniz.

Groovy hakkında daha detaylı bilgi için [bakabilirsiniz](http://groovy.codehaus.org/).

## Grails Nedir?

![Grails Logo](/images/grails_logo.jpg#floatleft)

Grails, groovy programlama dilinde yazılmış, bir web catısıdr ( web framework). Grails ilk başlarda bilindiği gibi “Groovy on Rails” dir. Yani bir nevi “Ruby On Rails” in, Groovy ile gerçekleştirilmiş halidir.

Java yazılımcıların sürekli kullanmak durumunda kaldığı xml ayar dosyaları grails de yoktur. Grails, ayar işlemlerini, groovy dosyalar üzerinde yazmanızı ister.

Ruby On Rails‘de olduğu gibi, geliştirme, test ve ürün ortamlarını için farklı ayar imkanları sunması oldukça güzel bir özelliktir. Grails için yazılan bir çok eklentin bulunmaktadır ( bu sayı gün geçtikçe artıyor).

Grails hakkında daha detaylı bilgi için <http://www.grails.org/> bakabilirsiniz.

Groovy ve grails hakkında yüzeysel bilgi verdikten sonra, kurulumlarını ve kullanıma hazır hale gelmeleri için yapılması gerekenlere bir göz atalım.
Groovy Kurulum

Groovy kurulum için groovy indirme sayfasına giderek, işletim sisteminize göre en son kararlı sürümümü indiriniz. Windows işletim sistemi için, Windows Installer versiyonunu indiriniz.

Daha sonra GROOVY_HOME cevre değişkeni tanımlamanız gerekmektedir. Windows kurulum sırasında bunu size tanımlamak istediğini soracaktır. Linux da ise bunu .bashrc dosyasına aşağıdaki şekilde bir satır ekleyerek yapabilirsiniz.

```shell
export JDK_HOME=/usr/lib/jvm/java-6-sun
export GROOVY_HOME=/developer/groovy-1.7.4
export PATH=$PATH:$JDK_HOME/bin:$GROOVY_HOME/bin
```

> Not: Eğer tanımlı değilse, GROOVY_HOME tanımlamak için, JDK_HOME cevresel değişkeni de tanımlamanız gerekiyor. 

Bu işlemden sonra komut penceresinden aşağıdaki kodu çalıştırarak, groovy kurulumunu test edebilirsiniz.

```shell
groovysh
```

## Grails Kurulum

Grails indirme sayfasına giderek, en son kararlı sürümünü indiriniz. Daha sonra bu klasörü açınız.

Grails kurulumu bu adım yeterlidir. Kullandığınız IDE, size grails kurulum dizinini soracaktır. Ancak yineden GRAILS_HOME cevre değişkeni tanımlarsanız çok sağlıklı olacaktır. Aşağıdakı satırı .bashrc dosyasına ekleyiniz.

```shell
export GRAILS_HOME=/developer/grails-1.3.3
export PATH=$PATH:$GRAILS_HOME/bin
```

Bu şekilde groovy ve grails kurulumu tamamladık.