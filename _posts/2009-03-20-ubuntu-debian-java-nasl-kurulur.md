---
layout: post
title: "Ubuntu/Debian Java Nasıl Kurulur"
description: ""
category: Genel
tags: [java, ubuntu, debian]
---

Debian türevli bir sistemde sisteme java nasıl kurabiliriz?

Grafiksel arayüze sahip bir sistemde java kurmak artık cok kolay oldu. Java sitesine girerek edineceğiniz java dosyasını önergeleri takip ederek kurabilirsiniz. Yada Syneptic Paket Yöneticisi yardımıyla cok kolay kurulum gerçekleşgtirebilirsiniz.
Terminal den Kurulumu gerçekleştirme

Grafiksel arayüz ortamı olmayan bir sistemde yada grafik ortamına gerek olmadan kurulum yapmak istiyorsanız aşağıdaki adımlari takip ederek kurulumu gerçekleştirebiliriz.

Öncelikle source.list içinde gerekli repo olup olmadığına emin olalım. Bunun için terminal ekranından aşağıdaki komutu kullanarak ilgili repoları ekleyelim.

	sudo nano /etc/apt/sources.list

Daha sonra eğer yoksa aşağıdaki repo ları ekleyelim.

	deb http://us.archive.ubuntu.com/ubuntu feisty main restricted
	deb http://us.archive.ubuntu.com/ubuntu feisty universe multiverse

Daha sonra Ctrl +X- ile nano editörünü kapatalım. Tabiki kayıt edip etmeyeceğimizi soracaktır. ‚ÄòY‚Äô yaparak bu dosyayı yazalım. Bu aşamadan sonra paketleri güncellememiz gerekiyor. Bunun için yapmamız gereken şu:
	
	sudo apt-get update

Bu işlem repoları bakarak paketleri güncelleyecektir. Daha sonra sun java- 6 sürümünü indirip kurulumunu yapalım. Bunun yapmanız gereken aşağıdaki komutu çalıştırmak.

	sudo apt-get install  sun-java6-jdk  sun-java6-jre sun-java6-jdk

Bu sayede gerekli süürmler indirilerek kurulum yapılacaktır. Bu kurulum sırasında size encoding ile ilgili ayar cıkacaktır. Dileğiniz doğrultusunda kurulacak encoding paketlerini seçebilirsiniz.

Bu işlemler sonunda

	java -version

yaparak kurulumu test edebilirsiniz. Eğer Sun Java Version 6 ya dair bir mesaj gelmezse yapmanız gereken
	
	update-java-alternatives -l

Bu komutsistemde birden fazla jvm varsa listeleyecektir. Bunlardan birisini aktif edebilmek için aşağıdaki komutu çalıştırmanız yeterli.

	sudo update-java-alternatives -s java-1.6.0-sun

Eğer herhangi bir hata gelmediyse java -version diyerek kurulumu test edebilirsiniz. Bu sayede sun java sistemimize kurmuş olduk.

Kolay gelsin