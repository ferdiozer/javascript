	//Date Picker Tükçe Gün Karşılığı
	
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
		$.datepicker.regional['tr'] = {clearText: 'Sil', clearStatus: '',
    closeText: 'Kapat', closeStatus: 'Pencereyi Kapat',
    prevText: '<Geri', prevStatus: 'Önceki Ayı Görüntüle',
    nextText: 'İleri>', nextStatus: 'Sonraki Ayı Görüntüle',
    currentText: 'Şuan', currentStatus: 'Şuanki Ayı Görüntüle',
    monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
    'Tem','Ağu','Eyl','Eki','Kas','Ara'],
    monthStatus: 'Başka Bir Ay Görüntüle', yearStatus: 'Başka Bir Yıl Görüntüle',
    weekHeader: 'Sm', weekStatus: '',
      monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
	  dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],
	  dayNamesMin:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],
    dayStatus: 'Haftanın İlk Gününü Kullanın', dateStatus: 'Gün, Ay Yıl',
    dateFormat: 'dd/mm/yy', firstDay: 1, 
    initStatus: 'Tarih Seç', isRTL: false};
 $.datepicker.setDefaults($.datepicker.regional['tr']);
	}
	$( "#date_text4" ).datepicker( "option", "showAnim", "drop" );
	
	

	
