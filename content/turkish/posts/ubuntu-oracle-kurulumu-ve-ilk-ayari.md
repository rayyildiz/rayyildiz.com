+++
date= "2010-08-01"
title= "Ubuntu Oracle Kurulumu ve İlk Ayarı"
slug="ubuntu-console-ile-oracle-jdk-kurulumu"
tags= ["java","ubuntu"]
categories= ["Genel"]
+++



Oracle veritabanı Ubuntu kurulumu iki adımda yapabilrisiniz.

## Oracle İndirme Sayfasından İndirmek

Oracle indirme sayfasınandan(<http://www.oracle.com/technetwork/database/express-edition/downloads/102xelinsoft-102048.html>) Oracle Database 10g Express Edition (Universal) veritabanının .deb uzantı versiyonunu indirin. (Eğer .rpm versiyonunu indirirseniz, alien komutu kullanarak .rpm versiyonunu .deb uzantılı dosyaya cevirebilirsiniz. Detaylı bilgi buraya tıklayınız). Daha sonra ise kurulum işlemini grafiksel arayüz ortamında çift tıklayarak yapabilirsiniz.

## Oracle Repository Kullanmak

Konsole penceresinden veya Software Source arayüzünu kullanarak aşağıdaki repository paketini /etc/apt/source.list dosyasına ekleyiniz.

```bash
deb http://oss.oracle.com/debian unstable main non-free
```

daha sonra aşağıdaki komutları çalıştırın.

```bash
wget http://oss.oracle.com/el4/RPM-GPG-KEY-oracle  -O- | sudo apt-key add -
apt-get update
apt-get install oracle-xe
```

#### Oracle İlk Ayarı

Eğer daha önce windows ortamında oracle kurulum yaptıysanız, size sorulan sorular kurulum sırasında sorulmadığında şaşırmış olabilirsiniz. çünkü henüz kurulum daha bitmedi.

Yukarı adımlardan sonra, oracle yüklendi ama konfigürasyon yapmadınız. Oracle ilk ayarları işlemi için aşağıdaki komutu çalıştırınız.

	sudo /etc/init.d/oracle-xe -configure

Bu ayaralar sırasında aşağıdakine benzer sorular sorulacaktır. Burada yazacağınız şifre, “system” kullanıcısın şifresi olup hatırlayacağınız bir şifre olmasını tafsiye ederim.

	Specify the HTTP port that will be used for Oracle Application Express (8080):
	
	Specify a port that will be used for the database listener (1521) :
	
	Specify a password to be used for database accounts. Note that the same
	password will be used for SYS and SYSTEM. Oracle recommends the use of
	different passwords for each database account. This can be done after
	initial configuration:
	  
	Confirm the password: ( make sure you remember this password )
	
	Do you want Oracle Database 10g Express Edition to be started on boot (y/n) (y): y
	
	Starting Oracle Net Listener…Done
	Configuring Database…Done
	Starting Oracle Database 10g Express Edition Instance…Done
	Installation Completed Successfully.
	To access the Database Home Page go to “http://127.0.0.1:8080/apex”

Normal ayarlara göre kururulum yaparsanız, tarayınızdan http://127.0.0.1:8080/apex açınız. Burada kullanıcı adı olarak “system”, şifre- olarak ise az önce kurulumda yazdığınız şifreyi yazınız. Bu arayüzü size birtakım güzel olanaklar sunacaktır(detaylı bilgi için buraya tıklayınız). Ben ise daha sonraki yazılarımda Sql Developer ile nasıl bağlanabileceğinizi ve basit veritabanı işlemleri yapabilmenizi anlatacağım.

![Oracle](/images/oracle1.webp)

Toad ise Wine ile kurabilseniz dahi malesef ubuntu ortamında sorun cıkartıyor, o yüzden linux ortamında oracle veri tabanı işlemleri için size tafsiye edeceğim araç sql developer olacaktır.

Not: Eğer kullanıcınız dba grubunda değilse, oracle durdurma ve yeniden başlatma işlemleri sırasında sorun yaşayabilirsiniz. Benim tafsiyem kullanıcınızı dba grubuna eklemeniz.