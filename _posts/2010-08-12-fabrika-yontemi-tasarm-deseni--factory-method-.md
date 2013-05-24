---
layout: post
title: "Fabrika Yöntemi Tasarım Deseni ( Factory Method )"
description: ""
category: Genel
tags: [factroy method, design pattern, tarsarım desenleri]
---

Tasarım desenleri hakkında giriş mahiyetindeki yazıma [buradan](/2010/07/tasarm-desenleri-design-pattern/) ulaşabilirsiniz. Bu tasarım desenlerinden yaratım desenleri grubundaki ücüncü desen fabrika tasarım desenidir ( Factory Method)

Fabrika yöntemi tasarım deseni,birçok framework yaygın bir şekilde kullanılan bir tasarım desenidir. Bu tasarım deseninde, parelel seviyedeki nesnelerin hangisinin oluşmasını gerektiğini karar veren bir fabrika metodunu ifade eder. Yani aynı arayüz ( interface) gerçekleştiren paralel sınıfların hangisinin gerçekleşmesini sağlayan bir nesne sayesinde bu ilşemi gerçekleştirebiliriz.

Örneğimiz üzerinden düşünelim. örnekte IDbConnection adında bir arayüzümüz mevcut olup, bu arayüzü OracleDbConnection, MySqlDbConnection ve MssqlDbConnection adında 3 tane nesne vardır. Bu üç nesneden hangisinin oluşması gerektiğini karar veren DbConnectionFactory adında bir nesnemiz var. Bu DbConnectionFactory nesnesi içinde yer alan static bir metod ve (metodun adı : createDbConnection)¬† metoda geçirilen parametreden hangi nesneyi gerçekleştireceğine karar verir.

Arayüz ve bu 3 nesnenin kaynak koduna bakalım.
	
	package com.rayyildiz.patterns;
 
	public interface IDbConnection {
  		String getConnection();
	}
 
	public class OracleDbConnection implements IDbConnection {
  		@Override
  		public String getConnection() {
    		return "Oracle Data Connection";
  		}
	}
 
	public class MySqlDbConnection implements IDbConnection {
  		@Override
  		public String getConnection() {
    		return "MySql Data Connection";
  		}
	}
 
	public class MssqlDbConnection implements IDbConnection {
  		@Override
  		public String getConnection() {
    		return "Mssql Data Connection";
  		}
	}
 
Şimdi ise fabrika yöntemini yapan metodu görelim:

	package com.rayyildiz.patterns;
 
	public enum DbConnectionType {
  		Oracle,
  		Mysql,
  		Mssql
	}

	package com.rayyildiz.patterns;
 
	public class DbConnectionFactory {
  		public static IDbConnection createDbConnection(DbConnectionType dbConnType){
    		switch(dbConnType){
      			case Oracle:
        			return new OracleDbConnection();
      			case Mysql:
        			return new MySqlDbConnection();
      			case Mssql:
        			return new MssqlDbConnection();
    			
			}
    		return null;
  		}
	}

Bu ve zamanla uygulanan diğer tasarım desenleri hakkındaki örnek uygulamaları <http://github.com/rayyildiz/DesignPatterns> adresinden ulaşabilirsiniz.