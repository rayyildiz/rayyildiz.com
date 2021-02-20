+++
date= "2009-02-22"
title= "Java da PHP:Quercus"
slug= "java-php-kosturmak"
tags= ["java","php"]
categories= ["Arsiv","Yazilim Gelistirme"]
+++



J2EE 5 bir çok yeni özellikle gelmiş olmasına rağmen, özellikle hızlı uygulama gelişitirebilmek istenen uygulamalarda java nın fazla geldiği, basit uygulama geliştirmek için javanın tercih edinirliği azaldığını görmekteyiz. Bu kapsamda j2ee 6 da rapid geliştirme ortamlarının entegre olacağı ve bu sayede de daha küçük ölçekli yazılımlar için bu uygulamaların tercih edilebileceği planlanıyor. Bütün bunlar devam ederken, bazı yazılımlar yeniden yorumlanmaya başladı. Bunlardan birisi ise Quercus.

caucho-whiteQuercus aslında PHP 5 tamamen java ile GPL lisansıyla yeniden yazılmış halidir. PHP 5 içerdiği tüm özellikleri barındırır. Ayrıca PHP nin kullandığı temel modüller olan Mysql, json, pdf gibi modüller de yazılmıştır. PHP den farklı olarak ise java servisleri ile çok iyi entegre edilmiştir.
Sadece bu modüller değil, PHP de kullanılan önemli birçok modül Quercus içine dahil edilmiş. Hatta tanınmış bazı önemli php uygulamaları quercus üzerinde başarılı bir şekilde çalıştığı rapor ediliyor. Bu uygulamalrdan bazıları wordpress, joomla, drupal,phpBB ‚.. gibi devam ediyor.

Quercus için yapılması gereken ilk şey sitesinden elde edebileceğiniz .war dosyası. Bu dosyayı herhangi bir java application server üzerinde çalışıtırılabiliyor. Bu dosya ile beraber gerekli php kütüphaneleri de geliyor.

Var olan uygulamaları üzerinde çalıştırmak cok kolay. Coğunlukla yapmanız gereken config dosyasına müdaheel etmek ve cok kısa sürede uygualamanızı quercus ile çalışır hale getirebiliyorsunuz.

Detaylı bilgi için caucho sitesinden bilgi alabilirsiniz.