+++
date= "2009-03-22"
title= "Java Migration Tool Migrate4j"
slug="java-migration-tool-migrate4j"
tags= ["java", "database"]
categories= ["Arsiv"]
+++


Migrate4j , java ortamı için geliştirilmiş bir 'migration' aracıdır. 'Migration' bu konuda yakın olan kişilerin cok da kullandığı bir kelime olduğu için aynen bu kelimeyi kullanmak daha doğru geldi bana. Bu araç aslında veritabanını biryerden başka yere taşırken yada yeni özellikler eklerken kullanılan bir araçtır. √áoğunlukla birden fazla kişinin aynı anda üzerinde çalıştığı veritabanlarında buna benzer sorunlar yaşanabilir. Geliştiricelerden birisi yeni tablo eklerken, diğeri ise başka tablolarda sütun ekelem yada cıkarma işlemi yapmış olabilir. İşte bu gibi nedenlerden dolayı veritabanlarının senkronize olması istenir, eksik tabloların ve yeni sütunarın otomatik olarak kurulması, eğer tablo yoksa yeni tablo oluşturulması, varsa üzerinde oynanan sütunların değiştirilmesi istenir. İşte bu tarz sorunları çözmek için çeşitli 'migration' araçları vardır. Bunlardan birisi Migrate4j uygulaması.

Migrate4j diğer araçlardan biraz daha fazla özellik içerir. Örneğin sorgular native SQL değil java ile yazılmaktadır. Ayrıca farklı veritabanları motorlarında sorunsuzca çalışabilmektedir.
Nasıl Kullanırım?

Migrate4j uygulamasını <http://migrate4j.sourceforge.net/> adresinden hem daha fazla detaylı bilgi alarak bakabilir hemd e bu adresten indirebilirsiniz. İndirdiğiniz paket içinden cıkan Migrate4j.jar dosyasını kullandığınız editörten tanımlayarak yada console ile derleyecekseniz ilgili classpath içine almanız yeterli. Daha sonra uygulamanızın an dizininde migrate4j.properties ayar dosyası oluşturmanı gerekiyor. Bu dosya içinde genel ayarlar ile bağlantı çümlesi ve driver seçenekleri olmalıdır. Örnek bir migrate4j.properties şu şekilde olabilir.

```java
connection.url=jdbc:mysql://localhost:3306/testdb
connection.driver=com.mysql.jdbc.Driver
connection.password=passw@rd
migration.package.name=test.migratebase
```

Bu dosya içinde bağlantı için mysql deki testdb veritabanını kullandığımızı ve migration paketlerinin test.migratebase içinde yer aldığını belirttik. Daha sonra yazacağımız migrate sınıflarını bu paket içinde oluşturmamız gerekli.

Örneğin Student diye bir tablomuz var. Eğer sistemiizmde bu tablo yoksa oluşmasını, sistemden silmek istediğimizde ise bu tablonun silinmesini sağlayan nesnemiz şu şekildedir:

```java
package test.migratebase;

import static com.eroi.migrate.Define.*;
import static com.eroi.migrate.Define.DataTypes.*;
import static com.eroi.migrate.Execute.*;
import com.eroi.migrate.Migration;

public class Student implements Migration {
	public void up() {
    	createTable(table("student_table",
       	column("id", INTEGER, primarykey(), notnull()),
       	column("firstname", VARCHAR, length(50), defaultValue("NA")),
       	column("lastname", VARCHAR, length(50), defaultValue("NA")),
       	column("number", VARCHAR, length(15), defaultValue("NA"))));
  	}

  	public void down() {
     	dropTable("student_table");
  	}
}
```

Evet aslında bu nesne bizim için student_table tablosu yoksa oluşturmayı varsa silmek istediğimizde ise silmeyi sağlıyor. genel olarak eğer bir tablo oluşturulucaksa **up** silmek istenilirse **down** metodu çağrılacaktır.

Kabaca bir tablonun bir migration araçla nasıl silinip kurulacağını gördük. Elbette bu yeterli değildir. Sitesine girerek detaylı bilgi alabilirsiniz. Eğer bir sorunla karşılaşırsanız yardımcı olmaya çalışırız.
