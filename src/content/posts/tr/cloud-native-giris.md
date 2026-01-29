+++
date= "2020-07-05"
title= "Cloud Native Giriş"
slug="cloud-native-giris"
tags= ["go","cloud","cloud native"]
categories= ["cloud"]
draft=true
series = ["Cloud Computing"]
+++

## Giris

Yaziya bir hikaye ile baslamak istiyorum. Universite part-time olarak calisirken bir musteri demo yapacaktik. 
Gelistirdiigmiz uyguluma bir [BPM](https://en.wikipedia.org/wiki/Business_process_management) uygulamasi idi ve [IBM Domino, Notes](https://www.zdnet.com/article/alas-poor-lotusibm-notes-we-knew-ye-well/) gibi teknolojiler ustune kurulu idi. 
Demo icin bir laptop son dakika da bir sorun cikti (tesekkurler [Morphy](https://en.wikipedia.org/wiki/Murphy%27s_law) 😀 ); bir oncesine kadar sorunsuz calisan sistem bir calismaz oldu. 
Biz de son dakika suprizi asmak icin uygulamanin gelistirililmesi sutunde yapilan ana sunucuyu paketledik ve musteriye bu sunucuyu ustunden sutunde sunum yaptik. 
Neyseki demo basarili gecti ama sunucunun musteriye tasinmasi oldukca komik anilar birakti. 

2004 yilindan bahsediyoruz. O zaman sunu dusunmustum: `acaba bir uygulamayi CD ye yukleyip direkt musteride cift tiklayarak calistirsak super olmaziydi?` . Bu sorun o kadar kafama takilmis olmali ki, universitede ustunde calisan tasinabilir isletim sistemi ustunde bile calsitim. 

## Bulutun Yukselisi

![Rack servers](/images/rack-servers.jpg#floatright)

2008 yillara geldigimizde ise [Google App Engine](https://cloud.google.com/appengine/) ve [AWS](https://aws.amazon.com/) karsimiza cikti. Ozellikle fiyat politikasi ve sagladigi hizmet sayisi AWS hizli sayida musteri kazandirmaya basladi. Ulkemizde ise maalesef bu gecis +5 sene sonra basladi maalesef. 

Ozellikle olceklendirilebilir ozelligi, tahmin edilemez trafik beklentisi icinde olan uygulamalarin hizli sekilde buluta tasinmasina neden oldu. Tabi bir diger onemli etken ise fiyatlandirilma. Kullandigin kaynaga gore fiyatlandirmasi bircok start-up in icin birinci secenek oldu. Simdi o start-up'larin bircogu artik birer [unicorn](https://en.wikipedia.org/wiki/List_of_unicorn_startup_companies).