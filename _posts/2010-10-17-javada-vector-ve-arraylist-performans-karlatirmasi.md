---
layout: post
title: "Java’da Vector ve ArrayList Performans Karşılaştırması"
description: ""
category: Yaızlım Geliştirme, Genel
tags: [java]
---

{% include JB/setup %}


javada, Vector ve ArrayList arasındaki farkın ne olduğunu sorulduğunda, genel olarak şunları söyleriz

* Vector’un thread-safe‘dir.
* Vector kapasitesi 2 kat artacak şekildedir (eğer capacityIncrement değeri verilmediyse).
* ArrayList her seferinde kapasitesinin yarısı kadar ( %50) kapasitesini artırır.
* Herikisi de öntanımlı olarak 10 element saklayabilecek şekilde ilklenir.

Burada en çok Vector’un thread-safe özelliği öne çıkar. Yani Vector; ArrayList e göre, içindeki verinin doğruluğunu garanti eder. Hız olarak nasıl bir etkisi olduğuna ise inceleyelim.

Peki vector ve ArrayList performans olarak nasıl bir farkı vardır. Bunun için örnek yazdığım uygulamayı <http://github.com/rayyildiz/PerformanceTest> inceleyebilirsiniz.

Performans karşılaştırılmasında 100.000 tane rastgele oluşturulmuş sayılar eklenip, işlem yapılmaktadır.

### Ekleme İşlemi

Vector ve ArrayList e rastgele oluşturulmuş 100.000 element ekleniyor	
{% highlight java %}
IList<Integer> vectorList = new IntegerVectorListImpl();
IList<Integer> arrayList = new IntegerArrayListImpl();
List<Integer> randomIntegers = getRandomIntegers(100000);
long start,end;
 
write("Start for inserting ARRAYLIST");
start = System.currentTimeMillis();
for(Integer i : randomIntegers) arrayList.insert(i);
end = System.currentTimeMillis();

long differenceOfArrayList = end - start;
write("ArrayList time difference :" + differenceOfArrayList + " ms");
write("End for inserting ARRAYLIST");
 
write("Start for inserting VECTOR");
start = System.currentTimeMillis();
for(Integer i : randomIntegers) vectorList.insert(i);
end = System.currentTimeMillis();

long differenceOfVector = end - start;
write("Vector time difference :" + differenceOfVector + " ms");
write("End for inserting VECTOR");
{% endhighlight %}

Bu test işlemi sonucunda alınan değerler şu şekilde.
<table>
	<tr>
		<th> </th>
		<th>En iyi değer</th>
		<th>En Kötü değer</th>
		<th>Ortalama</th>
	</tr>
	<tr>
		<td>Vector</td>
		<td>29</td>
		<td>58</td>
		<td>36.45</td>
	</tr>
	<tr>
		<td>ArrayList</td>
		<td>17</td>
		<td>30</td>
		<td>24.9</td>
	</tr>
</table>

Görüldüğü gibi ArrayList ekleme işlemlerinde daha hızlı çalışıyor.

### Arama İşlemi

Bir üstteki örnekte olduğu gibi, 100.000 kayıt eklenerek, bu kayıtlar içinden bir değer aranıyor.
{% highlight java %}
IList<Integer> vectorList = new IntegerVectorListImpl();
IList<Integer> arrayList = new IntegerArrayListImpl();
List<Integer> randomIntegers = getRandomIntegers(100000);
long start,end;
 
for(Integer i : randomIntegers) arrayList.insert(i);
for(Integer i : randomIntegers) vectorList.insert(i);
 
Integer findObj = 777;
 
write("Start for search ARRAYLIST");
start = System.currentTimeMillis();
arrayList.search(findObj);
end = System.currentTimeMillis();

long differenceOfArrayList = end -¬† start;
write("ArrayList time difference :" + differenceOfArrayList + " ms");
write("End for search ARRAYLIST");
 
write("Start for search VECTOR");
start = System.currentTimeMillis();
vectorList.search(findObj);
end = System.currentTimeMillis();

long differenceOfVector = end -¬† start;
write("Vector time difference :" + differenceOfVector + " ms");
write("End for search VECTOR");
{% endhighlight %}

Bununla ilgili sonuc şu şekilde:
<table>
	<tr>
		<th> </th>
		<th>En iyi değer</th>
		<th>En Kötü değer</th>
		<th>Ortalama</th>
	</tr>
	<tr>
		<td>Vector</td>
		<td>6</td>
		<td>9</td>
		<td>7.6</td>
	</tr>
	<tr>
		<td>ArrayList</td>
		<td>6</td>
		<td>13</td>
		<td>7.4</td>
	</tr>
</table>

Görüldüğü gibi ArrayList vector den cok az daha hızlı arama işlemi yapabiliyor sunuz.

### Sonuç Olarak

Sonuç olarak ise Vector thread-safe özelliğinden dolayı daha güvenli olduğu halde biraz yavaş çalışmaktadır. ArrayList ise daha hızlı olup, multi-thread uygulamalarda verinin doğruluğunu garanti edememektedir