+++
date= "2010-03-18"
title= "Git scm ve GitHub"
slug="git-kod-kontrol-sistemi-ve-github"
tags= ["git"]
categories= ["Genel"]
+++


Github, git-scm ile opensource veya kendi projelerinizin kaynak kodlarını yönetmek için bir uygulama. SVN üzerinde yer alan kaynak kodları çok kolay bir şekilde, import edebiliyorsunuz. Ücretsiz sürümü private proje açmanıza izin vermezken, sayısız public proje açabilirsiniz.

Twitter, facebook başta olmak üzere birçok önemli proje şu anda github üzerinde durmakta. Twitter’ın scala ile geliştirdiği gizzard projesi github üzerinden erişmeniz mümkün.

## Git-Scm

Linux Torwalds tarafından geliştirilen kaynak kod paylaşım aracıdır. Özellikle dağıtım kod yönetim sistemi olmasından ve hızlı çalışmasından dolayı gün geçtikçe populer bir hale gelmeye başladı. SVN den farklı olarak merkezi değil, dağıtık bir kod yönetimine sahiptir. Bu ise linux kernel’ın geliştirilmesi sürecinde ihtiyac haline gelen ve gene Linux Torwalds tarafından yazılan bir araç.

### GitHub İle Çalışma

Github sitesinde ihtiyacınıza göre üye olmanız gerekmekte. Yeni bir proje açmak ise çok kolay.

Yeni proje açtktan sonra yapmanız gereken git ile ilk halini almak. Git, bilgisayarınıza indirdikten sonra promt dan aşağıdaki adımları yapmanız gerekiyor. (Windows için tafsiyem msysgit i denemeniz)
Genel ayarlar

    git config –global user.name “ADINIZ SOYADINIZ”
    git config –global user.email [eposta adresiniz]

Projeyi Almak için

    mkdir [projenizi_adi]
    cd [projenizi_adi]
    git init
    touch README
    git add README
    git commit -m ‘mesajınız”
    git remote add origin [projenizin adresi] – — örnek: git@github.com:rayyildiz/test_project.git
    git push origin master

Github, ana klaösrde README klasörü kullanmanızı tafsiye etmektedir. Bu şekilde, projenizin sayfanızda bu sayfanın içeriğini göstermektedir.

### .gitignore

Bazı derleme sonucunda ğretilen dosyaları git içinde yer almasını istemezsiniz. Bu durumda yapmanız gereken projenizin ana sayfasında .gitignore diye bir dosya açıp içine istemediğinizi klasör, uzantıları veya dosyaları çıkarmaktır. Bir ASP.NET 3.5 projesinde bin/debug klasörü, .uso gibi dosyalar sürekli değişmekte ve sıkıntı yaşatmaktadır. Bir asp.net projesi için aşağıdaki dosyayı kullanabilirsiniz.

	.svn*
	obj/
	bin/
	*.suo
    *.user
    Log/
    log/
    *.db

Çoğunlukla kullandığınız IDE ler için git plugin geliştirlmiştir. Ancak konsoldan git projesi ile çalışmak çok zevkli :)
Github duyurduğu haberde, github da yer alan projelerinizi artık svn ile de erişebilecek, code gönderip alabileceksiniz. √áok güzel bir gelişme. Özellikle şu günlerde, git plugin sayısı SVN plugin sayısından az olduğunu düşündüğümüzde, svn kullanan bir kişinin alışkanlığını şimdilik değiştirmesine gerek yok demektir.