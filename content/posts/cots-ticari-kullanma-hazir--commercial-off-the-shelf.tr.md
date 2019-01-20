+++
date= "2010-08-03"
title= " COTS (Ticari Kullanıma Hazır – Commercial Off The Shelf)"
slug="cots-ticari-kullanma-hazir--commercial-off-the-shelf"
tags= []
categories= ["Genel"]
+++



Abstract. Son günlerde farkına varılan ve kritik öneme sahip yazılım sorunu hata ve hata yakalamadır. Hata yakalama bir diğer adla ayrıksı durum yakalama, program çalışma esnasında ortaya çıkan yada çıkma ihitmaline karşı önceden öngörülen durumları içerir. Bu sadece programlar için değil işletim sistemleri içinde önemli bir durum olarak karşımıza çımaktadır.

Ayrıca son günlerde yazılım sektörünün gelişmisindn dolayı yaılımları bağımlılığı artmıştır. Yazılımın sistemden bağımsızlığını sağlamak amacıyla ve hata ayıklama da kullanılmak için COTS diye bir mekanizma geliştirilmiştir.

## Giriş

Günümüzde bir çok bilgisayar programı sistem bağımsızlığını kırmış, bağımsız bir biçimde değişik sistemler tarafından kullanılıyor hale gelmiştir. Bu tarz yazılımlar, bağımsılığını sağlayamamış programlara göre daha çok beğenilmekte ve piyasada tutulmaktadır. Bunlara örnek olarak Microsoft firması tarafından sunulan ve Eklentili Nesne modeli anlamına gelen COM ( daha sonra ismi COM+ olsu) ve CORBA teknolojisi anlatılabilir. Bu arada Sun firması tarafından piyasa sunulan ve tüketimde önemli bir yere sahip Sun Bean göz ardı edilmememlidir.

COTS son zamanlarda critik sistemlerde kullanılmaya başlandı. Hiçbir çalıştırılabilir program analiz edilemez. √áok önemli bir yerlerde kullanılacak olan bir programın analizi söz konusu olamaz. Bu tarz yerlerde kullanılacak olan programların hata kabut etmesi gibi bir durum söz konusu değildir. Bu tarz yerlerde işletim sistemleri de kritik program hükmüne geçer. Nükleer santrallerdeki bir win32 uygulaması gibi, windows 95/NT/2000/CE de kritik bir uygulama olacaktır.

Ayrıca COTS, hata ayıklama amaçlı kullanılabilir. √úretici firma tarafından COTS standartlarında hazırlanan eklentiler, test aşaması bittiği için güveilir sayılabilir. Herhangi bir programda meydana gelecek olan hatalarda öncelikle olarak COTS elementlerinin güvenilir olduğu düşünüldüğünde , yaılmış olan programlaradaki hatalara göz cevrilmelidir. COTS bu tarz yaklaşımla hata ayklamada yardım edecektir. Yoksa kapalı bir kara-kutu hükmünde olan dll dosyaları incelenmesi yapılamaz.

## ARKA PLAN

### Hata Ayıklamaya Yardım Etme

Normal bir durumda bir dll, içi görünmeyen bir kara kutudur. Peki kara-kutu, içi görünmeyen bir kutuysa bize nasıl hata ayıklamada yardım eder? Piyasaya sürülmeden önce bir COTS eklentileri, defalarca testten geçirilir. Test aşaması tamamlanan eklentiler, piyasaya sürülmek üzere hazırdır. COTS eklentileri kullanılarak hazırlanan bir programda çıkan hatadan dolayı, öncelikle sorumlu tutulması gereken kendi yazdığımız programdır. Var olabilecek hata öncelikle kendi pogram kodumuzda aranması gerekir.

### Bağımsızlığı Destekleme

Son günlerde piyasada bir çok yazılım ortaya çıktı. Bu tarz uygulamaların sahip olduğu ve/veya istediği konfigürasyonlara sahip bir sistem bulmak zorlaşır. Unun yerine sistemler arası bağımsızlığı sağlayan programlar daha çok tercih edilmektedir. COTS eklentileri gerçekleştirmiş olduğu işlemleri yapaçağını garanti eder. Bu sayede program geliştiricileri, birtakım işlemler için işi COTS elemenltleri bırakarak standartların gelişmesini sağlarlar.

### Kör Düğümler

Bir sistemin entegrasyonunda bazı sorunlar çıkabilir. Sonuç itibarıyla eklentiler birer kara kutudur.

## COTS'un ALT SINIFLARI

COTS bazı alt sınıflara ayırmak mümkündür. Herbir alt sınııfn hitap ettiği ayrı bir çözüm bulunmaktadır.

>**GOTS:** Govermental COTS.
>
>**MOTS:** Modivable COTS.
>
>**NDI:** NonDevelopmental Item.
>
>**OSS:** Open Source Software.

## FAYDALARI ve ZARARLARI

COTS getirdiği faydalar gibi sahip olduğu bir takım hatalarda da vardır.

### Faydaları

* Uygundur, kısa zamanda geri ödemeyi sağlar.
* Pahalı üretim ve bakımı azlatır.
* Fiyat/Performans oranı tahmin edilebilir.
* Zengin özelliklere sahiptir.
* Çabuk bir şekilde organizasyonun istekleri gerçekleştirilebilir.
* Organizasyonu destekler
* Yazılım donanım bağımsızlığı.

### Zararları

* Lisans alma süresi uzundur.

## SONUÇ OLARAK

Son günlerde farkına varılan ve kritik öneme sahip yazılım sorunu hata ve hata yakalamadır. Hata yakalama bir diğer adla ayrıksı durum yakalama, program çalışma esnasında ortaya çıkan yada çıkma ihitmaline karşı önceden öngörülen durumları içerir. Bu sadece programlar için değil işletim sistemleri içinde önemli bir durum olarak karşımıza çımaktadır.

# Referanslar

1. COTS Classificiton: A proposal by- Marco Torchiano ( Marco.Torchiano@idi.ntnu.no ) <http://www.idi.ntnu.no/~marco/>

2. Software- Implemented Hardware Fault Tolerance Experiments COTS in Space by P.P. Shirvani, N. Oh, E.J. McCluskey

3. Negotiating Requirements for COTS based- System by Carina Alves, Anthony Finkelstein(a.finkelstein@cs.ucl.ac.uk)

4. Correct and automatic assembly of COTS components: an architectural approach by Paola Inverardi -(inverard@univaq.it)- and Massimo Tivoli -(tivoli@univaq.it )

5. Qualıty Assurance For Space Instruments Buılt Wıth Cots by -Peter Buch Guldager, Gsta G. Thuesen, John Leif J√∏rgensen

6. COTS Base System (CBS) Top-10 Lists, Lessons, Learned and Challenge by Berry Bohem at( <http://www.cebase.org> )