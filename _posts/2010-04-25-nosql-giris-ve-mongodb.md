---
layout: post
title: "NoSQL Giriş ve MongoDB"
description: ""
category: Genel
tags: [mongodb, nosql]
---

{% include JB/setup %}


NoSQL, isminden de anlaşılabileceği gibi SQL kullanılmadığı veritabanlarına verilen genel bir isimdir. Genelde ORM ile karıştırılmaktadır. NoSQL, işişkisel veritabanlarına ([RDMS](http://en.wikipedia.org/wiki/Relational_database_management_system)) alternatif bir tekniktir.

ilişkisel bir veritabanında (RDMS), tablolar oluşturur, tabloları birbirleriyle ilişki kurarak, join, kartezyen gibi SQL cümlecikleriyle kullanırız. Bunun birçok faydası vardır. Hatta yazılım geliştirirken, SQL den kaçınmak maksadıyla, ORM aracları geliştirilmiştir. Bu sayede, veritabanında yer alan tablolara, nesne gözüyle bakılabilmiş, OOP mantığıyla üzerinde işlem yapılabilmiştir.

NoSQL ise böyle birşey değildir. [ORM](http://en.wikipedia.org/wiki/Object-relational_mapping) araçları, sizin bir nesneye set ettiğiniz değerleri, SQL cevirerek, sizin SQL ile uğraşmanızı engellemiş olurlar. NoSQL veritabanları dağıtık bir mimari ile oluşturulmuş olup, yarının teknolojisi olarak görülmektedirler. Google’ın BigTable, Amazon’un Dynamo, Facebook’un [Cassandra](http://cassandra.apache.org/) bu tür birer veritabanlarıdır.Bu üç veritabanı da [PB](http://en.wikipedia.org/wiki/Petabyte) boyutunda veri tutmak için geliştirilmiştir. Ben bunlardan konfigurasyon acısından daha kolay yapılan döküman tabanlı bir veritabanı hakkında bilgi vereceğim: [MongoDB](http://www.mongodb.org/).

MongoDB, 10gen tarafından geliştirilmiş, döküman tabanlı bir NoSQL veritabanıdır. Bu bağlantıdan işletim sisteminize göre indirebilrisiniz. Eğer Ubuntu/Debian kullanıyorsanız, bu adresten nasıl kurabileceğinizi bakabilirsiniz.

###Örnek Java Projesi

MongoDB denemek amacıyla örnek bir java projesi yazacağız. MongoDB ye odaklanmak amacıyla yazdığımız uygulama, konsol uygulaması olacak ve IDE olarak [netbeans](http://www.netbeans.org/) kullanacağız.

İlk önce yapmanız gereken [mongo-java-driver](http://github.com/mongodb/mongo-java-driver/downloads) indirmek. Ben şu an stable versiyonu mongo-1-4.jar ı tercih ettim.

![Nb Create Project](/images/nb_create_project1.png)

Daha sonra netbeans ile örnek bir java uygulaması açıyorum. Bundan sonra yapmanız gereken, mongo java driver library olarak eklemek. Bunun için şu şelilde yapabilrisiniz.

![Get MongoDB Driver](/images/get_mongo_driver1.png)

Bşir tane Book adında kitap sınıfı yazalım. Bu yazdığımız nesne, “BasicDBObject” nesnesinden türetiyoruz ve getXxx- setXxx, BasicDBObject dan gelen put ve get metotlarını kullanacağız.

MongoDB ye erişmek için şu adımları takip ederiz.

* Bir Mongo nesnesi alırız. Bu nesne mongodb ye bağlanmak içindir.
* Mongo dan bir DB alırız. Bu db eğer varsa o gelir, yoksa yenisi oluşturulur.
* DB nesnesinden DBCollection alırız. DBCollection- tablodur.
* Insert için bir DBObject ( veya BasicDbObject) bu DBCollection’a insert ederiz.
* Bu DBCollection içinde gezmek için ise DBCollectiondan bir DBCursor oluşturup, DBCursor içinde dolaşırız.

Şunu bilmeniz gerekiyor. NoSQL, anlayabilmek için sürekli kullandığımız ilişkisel veritabanı mantığını bir kenera bırakmamız gerekiyor. Özellikle çok büyük veriler için kullanılan bu veritabanları, elbette güzel özelliklerinin yanında (hız) eksik yanları da vardır (Her ne kadarda bu eksik yanları kapatılması için teknikler olsa bile). Size tafsiyem bir banka uygulaması geliştiriyorsanız, NoSQL kullanmak isterseniz bir kere daha düşünmeniz. Bunun yanında, sosyal bir ağ geliştiriyorsanız, bildiğiniz RDMS in dışına çıkmak çok güzel sonuçlar da doğurabilir.

Burada gerçekleştirdiğimiz örnek uygulamayı [buradan](http://github.com/downloads/rayyildiz/TestProject/MongoDBTest.tar.gz) indirebilirsiniz. Şimdilik sadece giriş amacındaki bu yazıyı burada bırakayım.