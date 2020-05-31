+++
date= "2010-05-25"
title= "Android Uygulama Geliştirme"
slug="android-uygulama-gelistirme"
tags= ["android","java"]
categories= ["Genel","Mobil"]
+++


Android ile uygulama geliştirmeye başlamak için [Android SDK](http://developer.android.com/sdk/index.html) indirmeniz gerekiyor. İşletim sisteminize göre bir sürümü indirip açtıktan sonra , windows için Setup.exe kullanadarak linux için ise tools klasörü altında yer alan ./android komutuyla android platform indirmeniz gerekiyor.

Şu anda en son sürüm [2.2](http://developer.android.com/sdk/android-2.2.html) (Android 8) dilerseniz tüm platformları dilerseniz sadece ihtiyacınız olan platformu indirebilirsiniz. Platformu indirmek biraz zaman alabilir.

Bu sırada size tafsiyem UI tasarlayabileniz için [droiddraw](http://www.droiddraw.org/) adındaki bir uygulamayı indirmenizdir. Her ne kadar da eclipse için [ADT](http://developer.android.com/sdk/eclipse-adt.html) paketi yer alsa da ben droiddraw ı daha çok beğendim. Ayrıca biz örneği netbeans ile geliştireceğiz. Bu yüzden droiddraw ı indirmenizde yarar var. Ayrıca netbeans için geliştirilmiş NBAndroid eklentisini- [bu adresten](http://wiki.netbeans.org/IntroAndroidDevNetBeans) yardım alarak veya <http://kenai.com/downloads/nbandroid/updates.xml> update adresiyle kurabilirsiniz. Yapmanız gereken netbeans de Tools->Plugins oradan da Settings de “Add” butonuna tıklayarak bu plugini eklemek ve Available Plugins tabında Android diye aratıp bu plugin i kurmaktır.

![Nbandroid Plugin Install](/images/nbandroid_plugin_install-e1275732394906.jpg)

Daha sonra linux için terminalden aşağıdaki komutu- çalıştırıp DroidDraw ı açın. Windows da eğer Java6 kuruluysa, droiddraw ın içindeki droiddraw.jar ı tıklamanız yeterlidir.

	rayyildiz@iceface:~/Downloads/developer/droiddraw-r1b14$ sh droiddraw.sh &
	
![Droiddraw](/images/droiddraw1.jpg)
Droiddraw ile widgets tab ındaki Button u sürükleyip yandaki alana bırakınız. Daha sonra Button’a tıklayıp Properties tabı na tıklayınız.Burada şu bilgileri değiştirin:

>id——– : @+id/btnSample
>
>Width : 100px
>
>Text—- : Hi

Bunları değiştirip Apply düğmensine basın. Sizde diğer özellikleri bakabilirsiniz. Burada sadece şu aklınızda olsun; Width, height, left margin değerleri gibi yerlerde mutlaka px ekleyin. Yani 100 değil 100px olmalı. Bu işlemleri tamamlayıp Generete tıklanız. Output ekranında aşağıdakine benzer bir xml üretecek. Bu xml sizin UI nı oluşturacaktır.

```xml
<?xml version="1.0" encoding="utf-8"?>
<AbsoluteLayout
	android:id="@+id/widget0"
	android:layout_width="fill_parent"
	android:layout_height="fill_parent"
	xmlns:android="http://schemas.android.com/apk/res/android"
	>
	<Button
		android:id="@+id/btnSample"
		android:layout_width="100px"
		android:layout_height="wrap_content"
		android:text="Hi"
		android:layout_x="90px"
		android:layout_y="32px"
	>
</Button>
</AbsoluteLayout>
```
	
![Android New Project](/images/android_new_project1.jpg)

Netbeans de yeni bir proje açalım. NBAdroid eklentisini kurduysanız, yeni bir proje eklerken Android diye bir kısım yer alacaktır. Daha sorna yandaki gibi proje adı, paket adı, activity adı gibi alanları doldurmanız gerekiyor. İlk kez acıyosanız, Manageplatformu tıklayarak kurulum yaptığınız android klasörünü göstermeniz gerekiyor.

İlk kez projeyi actığınızda, Shift + F10 ile projeyi çalıştırabilirsiniz. Burada android emulator acılıp projenizi yükleyecektir ve ekrana klasik “Hello World” yazacaktır.

Şimdi uygulamaya geri dönüp Resources/layouts altında yer alan main.xml- i droiddraw ile üretttiğimiz xml i kopyalayıp yağıştıralım. Bunu yaptıktan sonra uygulamayı bir kere build etmenizde yarar var. Bu işlem sonuda otomatik üretilen R.java dosyasında aşağıaki gibi değişiklikler olacaktır.

```java
public final class R {
	public static final class attr { }

	public static final class id {
		public static final int btnSample=0x7f040001;
		public static final int widget0=0x7f040000;
	}

	public static final class layout {
		public static final int main=0x7f020000;
	}

	public static final class string {
		public static final int app_name=0x7f030000;
	}
}
```

Daha sonra aşağıdaki kodu ```MainActivity.java``` içine yazınız.

```java
@Override
public void onCreate(Bundle icicle) {
	super.onCreate(icicle);
	setContentView(R.layout.main);
	final Button button = (Button) findViewById(R.id.btnSample);
	button.setOnClickListener(new View.OnClickListener() {
		public void onClick(View v) {
			alert("Hello world");
		}
	});
}

private void alert(String message){
	new AlertDialog.Builder(this).setTitle("rayyildiz.com").setMessage(message).setNeutralButton("Ok",
	new DialogInterface.OnClickListener() {
		public void onClick(DialogInterface dialog,int which) { }
	}).show();
}
```

Uygulamayı çalıştırdığınızda şöyle çalışacaktır:

![Application Run](/images/application_run1.jpg)

Uygulamanın kaynak kodunu şu adresten indirebilirsiniz.<http://github.com/downloads/rayyildiz/TestProject/AndroidSample1-v1_0.tar.gz>