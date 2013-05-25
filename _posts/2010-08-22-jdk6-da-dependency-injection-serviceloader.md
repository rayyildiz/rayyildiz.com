---
layout: post
title: "JDK6 da Dependency Injection (ServiceLoader)"
description: ""
category: Yazılım Geliştirme
tags: [java, dependency injection]
---

{% include JB/setup %}


JDK6 da Dependency Injection (ServiceLoader)

DI ne olduğuna dair bir yazıyı [buradan](http://rayyildiz.net/2010/05/what-is-dependency-injection/) ulaşabilirsiniz. JDK6 da ise ServiceLoader gelmektedir. [ServiceLoader](http://download.oracle.com/docs/cd/E17409_01/javase/6/docs/api/java/util/ServiceLoader.html) sayesinde bir nevi DI sağlamış olmaktayız. Bunun nasıl yapacağımızı bir örnekle gösterelim.

Uygulamanın örnek test kodlarını [github](http://github.com/rayyildiz/UserAuthSample) üzerinden bulabilmeniz mümkündür.

Bu örneği yapabilmek için 3 tane proje oluşturalım. Bu 3 proje ve açıklaması şu şekildedir:

UserAuth : Arayüzün yer aldığı proje.IUserAuthService diye bir arayüz yer almakta ve bu arayüz login diye bir metot tanımı içermektedir.

UserAuthImpl: Uygulamanın gerçekleştirildiği sınıf yer alır.

UserAuthTest: Main sınıfının yer aldığı örnek uygulamadır.

![Project Tree](/images/project_tree1.png)

Arayüzün yer aldığı UserAuth projesinde farklı olarak META-INF/services klasörü- ve bu klasör içinde com.rayyildiz.userauth.IUserAuthService dosyası yer almaktadır. Bu dosya içine bakarsanız sadece bir satır yer almaktadır.
	
	com.rayyildiz.userauth.impl.UserAuthService

ServiceLoader bu dosyalara bakarak hangi implemantosyunu yüklemesi gerektiğini anlar. UserAuth.jar implementasyonun yer aldığı UserAuthImpl.jar referans olarak bilmez. SericeLoader load sırasında bu implementasyonu arayacaktır.

Burada asıl önemli test projemize bakalım:

	
	package com.rayyildiz.userauth;
 
	import java.util.Iterator;
	import java.util.ServiceLoader;
 
	public class Main {
  		public static void main(String[] args) {
    		ServiceLoader<IUserAuthService> serviceLoader = ServiceLoader.load(IUserAuthService.class);
    		Iterator<IUserAuthService> iterator = serviceLoader.iterator();-
    		while(iterator!= null && iterator.hasNext()){
      			IUserAuthService userAuthService = iterator.next();
      			boolean login = userAuthService.login("demo", "password");
      			System.out.println("Login for username: demo and password:password is " + login);
   			}
		}
	}

Gördüğünüz gibi test uygulaması implementasyon nesnesini görmez. ServiceLoader META-INF/services içinde yer alan dosyalara bakarak implementasyon nesnelerini örnek projenin olduğu klasörde ve CLASSPATH de arar.
