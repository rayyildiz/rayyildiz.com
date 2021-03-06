+++
date= "2009-02-21"
title= "JavaFX"
slug="javafx"
tags= ["java"]
categories= ["Genel"]
+++



Ajax ile web bir adım atlayarak Web 2.0 oldu. Aslında teknik anlamda yeni olmayan teknolojiler, kullanım alışkanlığının değişmesiye bu adı aldı. Evet web 2.0 alışılagelmiş sunucu-istemci mimarisinin kullanıcıya bakan yönünde büyük değişmeler içeren bir teknoloji.

Uzun bir süredir web 2.0 adapte olabilecek yazılım geliştirme ortamları piyasa sunulmaktadır. Hatta öyle olmuştur ki, ajax desteği vermeyen ortamın kullanımı azalmaktadır. Ancak piyasaya cıkarıldığı ilk günden beri oldukça geniş kulalnım ağına sahip olan Flash, interaktif özellikleri sayesinde vazgecilmez olmuştur. Ancak Zengin İnternet Uygulamaları (Rich Internet Application ‚Äì RIA ) geliştikçe rekabet kızışmaktadır.
Bunun farkında olan Microsoft WPF ‚ÄòI duyurdu. Bunun üzerine Adobe Apollo ile cevap verdi. Microsoft bu ürünü daha sonra adını değiştirerek SilverLight yaptı. Benzer zamanlarda acık kod dünyasının yükselen değeri Mono ekibi, moonlight ile acık kod dünyasınında bu konuda duyarsız kalmayacağını göztermiş oldu. Bu gelişmeler olurken, bütün herkes Sun'ın buna nasıl bir çözüm sunacağını beklemekteydi. Özellikle Ocak 2007 de mobil dünyasının seçkin kuruluşlarından önemli geliştiricilerini topladığı haberi duyuruldu. Bu Sun'ın bazı planlar yaptığını gösteriyordu. Beklenen soruların cevapları Mayıs 2007 de Sun Fransisco'da düzenlenen SunOne seminerinde geldi. Sun burada mobil ortamdan masaüstü ortamına kadar çözüm sunan bir ürünü duyurdu: javaFX.

Bu bahsedilen tüm uygulamaların asıl amacı, HTML, JavaScript, Ajax, Flash gibi değişik ortamları tek catı altında birleştirmek. JavaFX farklı olarak bunlara ek olarak java paketlerini destekleyor. Yani herhangi bir java kütüphanesi javafx ile kullanılabilecek. √ústlik JavaFX çalışabilmesi için sistemde küçük bir java runtime versiyonu kurulu olması yeterli. JavaFX, JavaFX script ve javaMobil diye alt ürünlerden oluşuyor. Yani Sun, JavaFX ile daha once ‚Äúbir kere yaz heryerde çalışsın‚Äù sözünü tutarak, aynı kodun hem masaüstünde hemde cep telefonlarda çalışmasını sağlayacağını bildirmekte. Hatta Sun biraz daha ileri giderek, JavaFX'i digital TV ve analog TV ortamlarında da çalıştırmayı hedeflemektedir.

![javaFX mimarisi](/images/ig_javafx_architecture1.jpg)

javafx mimarisi Yalnız burada JavaFX , swing yerine gelen bir ürün değildir. Sun dediği gibi JavaFX Swing'in performansını artıran bir teknolojidir.JavaFX Script ile gelen event oluşturma ve yürütme konusundaki iyileştirmelerden Swing uygulamaları da faydalanacak ve umuyoruz ki daha performanslı Swing uygulamaları göreceğiz. Şu anda JRE (Java RunTime Enviroment) ile JavaFX Script uygulamalarını masaüstünde çalıştırma imkanına sahibiz.
Henüz üzerinde 2 ay geçmeden, örnek cok iyi örnekler hazırlanmaya başladı. İnanılması zor ama aşağıdaki örnekler ne flash need HTML yapılmıştır, tamamen JavaFX.

motorola javafx studioGüvenlik mekanızması olarak , J2SE bağlı kalacağını dile getirmişlerdir. Java ile çalışan herkesin bileceği gibi, J2SE güvenlik anlamda en etkin platformlardan birisidir. Dolayısıyla, JavaFX'in en az J2SE kadar güvenlidir.
Bunun yanında kısa süre geçmiş olmasına rağmen JafaFX tasarlama ortamları geliştirildi. Hatta Sun üretiiği ve üçretsiz sunduğu Java Geliştirme Ortamı olan NetBeans için beta versiyonunda olan bir FavaFX geliştirme ortamı ücretsiz şekilde sunulmaktadır.

Özellikle google'ın başı çektiği web 2.0 ortamı bu ortamların daha yaykın kullanılmaya başlanması ile daha değişik boyutlara ulaşacak. Bakalım görsel rekabetler bizi nasıl ufuklara götürecek.


> **_Bilgi:_**
> * Ajax, Asynchrony JavaScript Application with XML baş harflerinden oluşan asenkron javascirpt uygulamalarına dayanan bir teknolojidir. En çok google tarafındanyoğun bir şekilde kullanılan ve bu sayede beğeni toplayan Ajax, kullanım alışkanlığını da değiştirerek internetin, web 2.0 adıya anılmasına neden olmuştur.
> * RIA, Rich Internet Application baş harflerinde oluşan ve sengin internet içerikleri anlamına gelen bir terimdir. İlk kez Macromedi tarafından 2002 de duyuruldu. Masaüstü ortamları kadar zengin içeriğe sahip web uygulamarına verilen addır. Asıl veri yine sunucu tarafında olur. Bu bakımdan masaüstü yazılımlarından farklılık oluşturur.Sandbox adıylada anılır.
> * Adobe , Flash geliştiren Macromedia firmasını 2005 yılında satın alarak, kendi bünyesine katmış ve Macromedi'nın ürettiği ürünleri Adobe altında üretmeye devam etmiştir.
