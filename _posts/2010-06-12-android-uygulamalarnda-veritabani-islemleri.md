---
layout: post
title: "Android Uygulamalarında Veritabanı İşlemleri"
description: ""
category: Mobil Uygulama
tags: [android, java, db]
---

Bir uygulama geliştirirken verilerin saklanması ihtiyacı doğmakta ve verilerin uygulamadan ayrı bir yapı olarak durması maksadıyla veritabını kullanılmaktadır. Android bir uygulama geliştirirken, aynı nedenden dolayı verilerin saklanması ihtiyacınız olacaktır. Micro device için uygulama geliştirmek, desktop bir bilgisayar için uygulama geliştirmekten daha zordur. Memory ve harddisk’inizin kısıtlı olması, işlemcinin gücü, multitask uygulama geliştirme sıkıntısı başlıcalarındandır. Android de ise yerleşik sqlite veritabanının yer alması ise Android’e önemli bir artı sunmaktadır.

![Sqlite](/images/sqlite1.gif)

[Sqlite](http://www.sqlite.org/), oldukça önemli projelerde kullanılmış (Firefox,Skype, Mcfee, iPhone,…) ve de oldukçe iyi [test edilmiş](http://www.sqlite.org/th3.html) bir veritabanıdır. 4K stack ve 100K ise heap için yeterlidir. Android içinde ise gelen sqlite, bir android uygulamasının ihtiyac duyduğu veritabanı işlemlerini karşılayacak düzeydedir.

Bu giriş bilgilerinden sonra örnek bir uygulama geliştirelim. Uygulamamız, ad, soyad ve telefon numarası kayıt edeceğimiz bir “customer” tablosu olsun. Linux ‘ta sqliteman gibi bir uygulama ile veritabanınızı oluştururun. Örneğimizde kullanacağımız tablonun scripti şu şekildedir:
	
	CREATE TABLE "Customer" (
		"Id" INTEGER PRIMARY KEY,
		"Firstname" TEXT,
		"Lastname" TEXT,
		"PhoneNumber" TEXT
		);

Daha sonra ise IDE nizde bir android uygulaması açınız([Android ile Uygulama Geliştirme](/2010/06/android-icin-uygulama-gelitirme/) yazısından faydalanabilirsiniz). Ben daha eski telefonlarda kullanılabilmesi için 1.6 uygulması actım. Daha sonra ise droiddraw ana ekran tasarlıyoruz.

Veritabanı ilk acıldığında tablonun create edilmesi için create script i kod içine almamız gerekir. Aynı şekilde örneğimizde compiled statement kullanıyoruz. Şu anda sadece insert ve getAll metodunu implemente ettik.

	public class DbHelper {
  		private static final String DATABASE_NAME = "rayyildiz_sample.db";
  		private static final int DATABASE_VERSION = 1;
  		private static final String TABLE_NAME = "Customer";
  		private static final String TABLE_CREATE = "CREATE TABLE " + TABLE_NAME + " ( "
      		+ "  \"Id\" INTEGER PRIMARY KEY,"
      		+ "  \"Firstname\" TEXT,"
      		+ "  \"Lastname\" TEXT,"
      		+ "  \"PhoneNumber\" TEXT" + ")";
  
		private static final String TABLE_INSERT = "INSERT INTO " + TABLE_NAME + "(Firstname,Lastname,PhoneNumber) VALUES (?,?,?)";
  		private Context context;
  		private SQLiteDatabase database;
  		private SQLiteStatement insertSQLiteStatement;
 
  		public DbHelper(Context context) {
    		this.context = context;
    		DbOpenHelper dbOpenHelper = new DbOpenHelper(context);
    		database = dbOpenHelper.getWritableDatabase();
    		insertSQLiteStatement = database.compileStatement(TABLE_INSERT);
  		}
 
  		public long insertCustomer(Customer customer) {
    		if (customer == null) {
      			return -1;
    		}
    		insertSQLiteStatement.bindString(1, customer.getFirstname());
    		insertSQLiteStatement.bindString(2, customer.getLastname());
    		insertSQLiteStatement.bindString(3, customer.getPhoneNumber());
 
    		return insertSQLiteStatement.executeInsert();
  		}
 
  		public List getAllCustomer() {
    		List customers = new ArrayList();
    		Cursor cursor = database.query(TABLE_NAME, new String[]{"id,Firstname,Lastname,PhoneNumber"}, null, null, null, null, "id desc");
    		if (cursor.moveToFirst()) {
      			do {
        			Customer c = new Customer();
        			c.setId(cursor.getInt(0));
        			c.setFirstname(cursor.getString(1));
        			c.setLastname(cursor.getString(2));
        			c.setPhoneNumber(cursor.getString(3));
 
        			customers.add(c);
      			} while (cursor.moveToNext());
    		}
    		if (cursor != null &amp;&amp; !cursor.isClosed()) {
      			cursor.close();
    		}
    		return customers;
  		}
 
  		private static class DbOpenHelper extends SQLiteOpenHelper {
    		public DbOpenHelper(Context context) {
      			super(context, DATABASE_NAME, null, DATABASE_VERSION);
    		}
 
    		@Override
    		public void onCreate(SQLiteDatabase db) {
      			db.execSQL(TABLE_CREATE);
    		}
 
    		@Override
    		public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
      			db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
      			onCreate(db);
    		}
  		}
	}

Bu ise Customer nesnesi
	
	public class Customer {
  		private int id;
  		private String firstname;
  		private String lastname;
  		private String phoneNumber;
 
  		public String getFirstname() {
    		return firstname;
  		}
 
  		public void setFirstname(String firstname) {
    		this.firstname = firstname;
  		}
 
  		public int getId() {
    		return id;
  		}
 
  		public void setId(int id) {
    		this.id = id;
  		}
 
  		public String getLastname() {
    		return lastname;
  		}
 
  		public void setLastname(String lastname) {
    		this.lastname = lastname;
  		}
 
  		public String getPhoneNumber() {
    		return phoneNumber;
  		}
 
  		public void setPhoneNumber(String phoneNumber) {
    		this.phoneNumber = phoneNumber;
  		}
	}

İki tane Aktivity ekleyelim birisi MainActivity, diğeri ise Customer bilgilerini giriş yapabileceğimiz Activity olsun.

Bunlardan AddCustomerActivity şu şekilde:
	
	public class AddCustomerActivity extends Activity {
    	public final static int SUCCESS_RETURN_CODE = 1;
  		private DbHelper m_db;
 
  		@Override
  		protected void onCreate(Bundle savedInstanceState) {
			super.onCreate(savedInstanceState);
			setContentView(R.layout.insert);
 
			m_db = new DbHelper(this);
			Button saveButton = (Button) findViewById(R.id.btnSave);
			final  EditText textFirstname = (EditText) findViewById(R.id.textFirstname);
			final EditText textLastname = (EditText) findViewById(R.id.textLastname);
			final EditText textPhoneNumber = (EditText) findViewById(R.id.textPhoneNumber);
 
			saveButton.setOnClickListener(new View.OnClickListener() {
	 			@Override
	 			public void onClick(View v) {
	   				Intent intent = new Intent();
	   				Customer c = new Customer();
	   				c.setFirstname(textFirstname.getText().toString());
	   				c.setLastname(textLastname.getText().toString());
	   				c.setPhoneNumber(textPhoneNumber.getText().toString());
	   				m_db.insertCustomer(c);
	   				setResult(SUCCESS_RETURN_CODE, intent);
	   				finish();
	 			}
			});
  		}
	}

Ve Main Activity şu şekildedir
	
	public class MainActivity extends Activity {
	
		private ProgressDialog m_ProgressDialog = null;
		protected static final int SUB_ACTIVITY_REQUEST_CODE = 100;private ArrayList m_customers = null;
  		private DataAdapter m_adapter;
  		private Runnable viewData;
  		DbHelper m_db;
 
  		@Override
  		public void onCreate(Bundle icicle) {
			super.onCreate(icicle);
			setContentView(R.layout.main);
			m_db = new DbHelper(this);
			m_customers = new ArrayList();
			this.m_adapter = new DataAdapter(this, R.layout.row, m_customers);
			setListAdapter(this.m_adapter);
 			
			Button refreshButton = (Button)findViewById(R.id.btnRefresh);
			refreshButton.setOnClickListener(new View.OnClickListener() {
	  			public void onClick(View arg0) {
					refresh();
	  			}
			});
 
			Button addButton = (Button) findViewById(R.id.btnAdd);
			addButton.setOnClickListener(new View.OnClickListener() {
 
	  			public void onClick(View v) {
					Intent i = new Intent(MainActivity.this,AddCustomerActivity.class);
					startActivityForResult(i, SUB_ACTIVITY_REQUEST_CODE);
	  			}
			});
  		}
 
  		@Override
  		protected void onActivityResult(int requestCode, int resultCode, Intent data) {
			super.onActivityResult(requestCode, resultCode, data);
			if (requestCode == SUB_ACTIVITY_REQUEST_CODE) {
	  			refresh();
			}
  		}
 
  		private void setListAdapter(DataAdapter m_adapter) {
			ListView lw = (ListView) findViewById(R.id.listCustomer);
			if (lw != null) {
	  			lw.setAdapter(m_adapter);
			}
  		}
 
  		private void insert(Customer c){
			m_db.insertCustomer(c);
  		}
 
  		private void refresh(){
			WorkerThread thread = new WorkerThread();
			thread.start();
			m_ProgressDialog = ProgressDialog.show(MainActivity.this,
				"Please wait...", "Resfreshing data ...", true);
  		}
 
  		private class WorkerThread extends Thread {
			@Override
			public void run() {
	  			getCustomers();
			}
  		}
 
  		private Runnable returnRes = new Runnable() {
			@Override
			public void run() {
	  			if (m_customers != null &amp;&amp; m_customers.size() &gt; 0) {
					m_adapter.clear();
					m_adapter.notifyDataSetChanged();
					for (int i = 0; i &lt; m_customers.size(); i++) {
		  				m_adapter.add(m_customers.get(i));
					}
	  			}
	  			m_ProgressDialog.dismiss();
	  			m_adapter.notifyDataSetChanged();
			}
  		};
 
  		private void getCustomers() {
			try {
	  			m_customers = new ArrayList();
 
	  			m_customers = (ArrayList) m_db.getAllCustomer(); 	
			} catch (Exception e) {
	  			Log.e("BACKGROUND_PROC", e.getMessage());
			}
			runOnUiThread(returnRes);
  		}
 
  		public class DataAdapter extends ArrayAdapter{
  			private ArrayList items;
 
  			public DataAdapter(Context context, int textViewResourceId, ArrayList items) {
				super(context, textViewResourceId, items);
				this.items = items;
  			}
 
  			@Override
  			public View getView(int position, View convertView, ViewGroup parent) {
				View v = convertView;
				if (v == null) {
	  				LayoutInflater vi = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);
	  				v = vi.inflate(R.layout.row, null);
				}
				Customer o = items.get(position);
				if (o != null) {
	  				TextView tt = (TextView) v.findViewById(R.id.listLabeltext);
	  				if (tt != null) {
						tt.setText(o.getId() +" : " + o.getFirstname() + " " + o.getLastname() + "("+ o.getPhoneNumber() + ")");
	  				}
				}
	 			return v;
  			}
  		}
	}

Örnek uygulamamızın ekran görüntüleri

![Add Customer](/images/add_customer1.png)

![List Customers](/images/list_customers1.png)

Uygulamanın kaynak kodunu ise [google code](http://code.google.com/p/nbase/) üzerinden indirebilirsiniz.