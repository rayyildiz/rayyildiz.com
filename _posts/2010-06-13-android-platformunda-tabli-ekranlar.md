---
published: true
title: Android Platformunda Tablı Ekranlar
layout: post
tags: [android, java]
categories: [Mobil]
---
{% include JB/setup %}


Android ekranları tasarlarken Tab kullanmak güzel bir artı katmakta, Activity ler arasında dolaşmaktan daha avantajlı bir yapı sunmaktadır. Android de tab kullanmak için “TabActivity” yararlanacağız. Bunun için ihtiyacımız olan layout xml şu şekilde bir yapıda olmalı.


Göreceğiniz gibi ana layout TabHost’dur. Gördüğünüz bir tane FrameLayout yer almaktadır. Biz code içinde Tab ları ekleyeceğimiz için layout base bir yapıdadır. Tüm Activity leri “[AndroidManifest.xml](http://developer.android.com/guide/topics/manifest/manifest-intro.html)” içinde tanımlamalısınız.

Tabları host edecek olan nesnemiz ise şu şekildedir:

	public class ApplicationActivity extends TabActivity {
  		@Override
  		public void onCreate(Bundle icicle) {
    		super.onCreate(icicle);
    		setContentView(R.layout.main);
    		Resources res = getResources();
    		TabHost tabHost = getTabHost();
    		TabHost.TabSpec spec;
    		Intent intent;
    		intent = new Intent().setClass(this, DashboardActivity.class);
    		spec = tabHost.newTabSpec("home").setIndicator("Home",
         	res.getDrawable (R.drawable.ic_tab_dashboard)).setContent(intent);
    		tabHost.addTab(spec);
    		intent = new Intent().setClass(this, CreditCardActivity.class);
    		spec = tabHost.newTabSpec("sample1").setIndicator("Sample Tab",
         	res.getDrawable (R.drawable.ic_tab_sample1)).setContent(intent);
    		tabHost.addTab(spec);
    		intent = new Intent().setClass(this, SettingActivity.class);
    		spec = tabHost.newTabSpec("sample2").setIndicator("Sample Tab 2",
        	res.getDrawable (R.drawable.ic_tab_sample2)).setContent(intent);
    		tabHost.addTab(spec);
 
    		intent = new Intent().setClass(this, AboutActivity.class);
    		spec = tabHost.newTabSpec("about").setIndicator("Sample Tab 3",
        	res.getDrawable (R.drawable.ic_tab_about)).setContent(intent);
    		tabHost.addTab(spec);
    		tabHost.setCurrentTab(0);
  		}
	}

Ben burada daha şık olması amacıyla Tab seçili iken farklı bir ikon görünmesi amacıyla “ic_tab_xxx” dosyalarını kullandım. Bunlar şuna benzer bir yapıdadır: 

Uygulamamızı çalıştırdığımızda ekran görünütüsü buna benzer olmaktadır.

![Android Sample Tab](/images/android_sample_tab21.png)

Daha sonra daha detaylı bilgi paylaşıyor olacağım, şimdilik hoşcakalın.