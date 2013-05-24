---
layout: post
title: "Yapıcı Tasarım Deseni (Builder Design Pattern)"
description: ""
category: Genel
tags: [Tasarım Deseni, Design Pattern, Builder design pattern]
---

{% include JB/setup %}


Tasarım desenleri hakkında giriş mahiyetindeki yazıma buradan ulaşabilirsiniz. Bu tasarım desenlerinden yaratım desenleri grubundaki ikinci desen yapıcı tasarım desenidir (Builder Design Pattern).

Yapıcı tasarım deseni, nesnelerin yapıcı metotlarını soyutlamak suretiyle gerçekleştirilmilerin farklı şekilde vekalet edilmesine sağlar. Peki bu nasıl olmaktadır, bunu bir örnekle pekiştirelim. Örneğin kahve yapıyorsunuz, kahve bildiğiniz gibi her ülkede farklı yapılır. Türkiye’de kahve küçük fincanda, genellikle şekerli olurken,- Brezilyadaki kahve aynı şekilde servis edilmez. Daha sonra yazılarımda göreceğiniz gibi Yapıcı tasarım modeli fabrika tasarım modeline benzer. Hatta soyut fabrika tasarım modeli ile de aynı şekilde yapabilirsiniz. Ancak bazı farklar vardır. Mesela yapıcı tasarım modelinde product dediğimiz nesnelerimiz soyut olmaz, bu nesnelerin farklı olmasını soyutlanmış yapıcı nesneler sağlar.

Şekilde kahve yapan bir aşçı örneğinin UML diagramı bulunmaktadır. Coffee nesnesi, bazı alanları vardır. Bu alanlar TurkishCoffeeBuilder tarafından çağrıldığında farklı değer, BrazilianCoffeeBuilder tarafından farklı değer yazılmaktadır. Bu sayede hangi yapıcı metot çağrılırsa ona ait değerler nesnenin içinde yer alacaktır.

Bu iki yapıcı nesneyi ( TurkishCoffeeBuilder ile BrazilianCoffeeBuilder) soyutlamak için CoffeeBuilder soyut sınıfından yararlanılır.

Şimdi CoffeeBuilder nesnesinin ve bu soyut sınıftan türetilmiş yapıcı nesnelerin kaynak koduna göz atalım.
	
	package com.rayyildiz.patterns;
 
	public abstract class CoffeeBuilder {
  		private Coffee coffee;
 
  		public Coffee getCoffee() {
    		return coffee;
  		}
 
  		public void createCoffee(){
    		coffee = new Coffee();
  		}
 
  		public abstract void buildTastyCoffee();
	}
 
	public class BrazilianCoffeeBuilder extends CoffeeBuilder {
  		@Override
  		public void buildTastyCoffee() {
    		Coffee coffee = getCoffee();
    		coffee.setColour(ColourType.DarkBrown);
    		coffee.setPrice(10);
    		coffee.setSugar(SugarType.Much);
    		coffee.setName("Brazilian Coffee");
  		}	
	}
 
	public class TurkishCoffeeBuilder extends CoffeeBuilder {
  	  @Override
  	  public void buildTastyCoffee() {
      	Coffee coffee = getCoffee();
    	coffee.setColour(ColourType.LightBrown);
    	coffee.setPrice(6);
    	coffee.setSugar(SugarType.Much);
    	coffee.setName("Turkish Coffee");
  	  }
	}

Gördüğünüz gibi CoffeeBuilder buildTastyCoffee adında soyut bir sınıf içermekte, bu nesneden türeyen nesnelerin bu metodu gerçekleştirmesini zorlamaktadır. CoffeeBuilder soyut nesnesinden türeyen bu iki nesne kendisine göre bu metotları değer atamaktadır.

Coffee nesnesi sadece getter-setter içeren bir nesnedir.

Şimdi ise Cook nesnesşne gözatalım.

	public class Cook {
  	    private CoffeeBuilder coffeeBuilder;
 
  		public void setCoffeeBuilder(CoffeeBuilder coffeeBuilder) {
    		this.coffeeBuilder = coffeeBuilder;
  		}
 
  		public Coffee getCoffee(){
    		return coffeeBuilder.getCoffee();
  		}
 
  		public void constructCoffee(){
    		coffeeBuilder.createCoffee();
    		coffeeBuilder.buildTastyCoffee();
  	 	}
    }

Cook nesnesi hiçbir şekilde hangi yapıcı nesneyi kullandığınız bilmez, sadece CoffeeBuilder bir nesne üzerinden işlem yapar. Peki hangi ülkeye göre çalışacağını nereden bilecek? Bu işlem sadece biryerde yapılır. Bu şekilde, gerek Cook nesnesi, gerekse Coffee nasıl bir yapıcı nesneden kullanıldığını bilmeyecektir. O halde ana sınıfımıza bakalım.

	
	package com.rayyildiz.patterns;
 
	public class Main {
  		public static void main(String[] args) {
    		Cook cook = new Cook();
    		CoffeeBuilder turkishCoffeeBuilder = new TurkishCoffeeBuilder();
    		cook.setCoffeeBuilder(turkishCoffeeBuilder);
    		cook.constructCoffee();
 
    		Coffee coffee = cook.getCoffee();
    		System.out.println("coffee:" + coffee);
    		if ( System.console()!=null) System.console().readLine();
  	  	}
	}

Bu örnekte aşcımız bir Türk kahvesi yapmaktadır. Kaynak kodu indirip çalıştırdığınızda aşağıdaki gibi bir sonuc cıkacaktır.

Bu ve zamanla uygulanan diğer tasarım desenleri hakkındaki örnek uygulamaları [DesignPatterns](http://github.com/rayyildiz/DesignPatterns "Design Patterns") adresinden ulaşabilirsiniz.


