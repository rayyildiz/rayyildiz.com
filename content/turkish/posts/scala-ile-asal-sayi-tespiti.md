+++
date= "2012-10-27"
title= "Scala ile Asal Sayı Tespiti"
slug="scala-ile-asal-sayiti-tespiti"
tags= ["java","scala"]
categories= ["Genel","Yazilim gelistirme","Scala"]
draft= true
+++


Scala ile bir asal sayının tespiti aşağıdaki gibi bir kod ile bulmak mümkün. Bu kod parçası scala'nın ne denli güçlü olduğunu göstermeye yeterli bence. Daha sonraki yazılarımızda scala ile daha detaylı bir yazı yazacağım.

```scala
def isPrime(n:Int): Boolean = (2 until n) forall (d => n % d !=0)
```