var inbox = {
    // Application Constructor
    initialize: function() {
        
    },
	
	alertFun: function() {
       alert('welcome click'); 
    },
	
	initialize2: function() {
        
    },
	
	openLink : function(path)
	{
		window.location="blog-single.html";
	},
	openl : function ()
	{
		alert("hello");
	//window.location="http://www.must.edu.eg";
		//window.open('http://www.must.edu.eg', '_system');
		  window.open('http://www.kidzout.com', '_system');
		  var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
		//alert("welcome");
		 // window.open = cordova.InAppBrowser.open;
		 
		/*
		var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
		var myCallback = function(event) { alert(event.url); }
		ref.addEventListener('loadstart', myCallback);
		//ref.removeEventListener('loadstart', myCallback);
		 ref.show();
		 */
	}
	

	,
   ajexTest:  function ()
		{
			$.ajax({ 
			type: 'POST', 
			url: 'http://www.must.edu.eg/intranet/send_json_data.php', 
			data: { get_param: 'value' }, 
			dataType: 'json',
			success: function (data) { 
				alert(data);
				 
				 /*
				$.each(data, function(index, element) {
					$('body').append($('<div>', {
						text: element.name
						alert(element.name);
						 }));
				 });
				   */ 
	
				$.each(data.user, function(index, element) { 
						alert(element.name);
						alert(index);
						});
			   
				}
	
			 });
		} ,
		
   getInbox :  function ()
			
			{
			//	alert("welcome1");
			var std_id=window.localStorage.getItem("std_id");
        $.ajax({ 
        type: 'POST', 
        url: 'http://www.must.edu.eg/studentszone/ios/inbox.php', 
        data: { std_id: std_id }, 
        dataType: 'json',
        success: function (data) { 
	//	alert("welcome2");
        //    alert(data);
             
             /*
            $.each(data, function(index, element) {
                $('body').append($('<div>', {
                    text: element.name
                    alert(element.name);
                     }));
             });
               */ 

 			 var news_output=   "";
            $.each(data.inbox, function(index, element) {
                 
                   
                 //  alert(element.Message);
				  //  alert(element.body);
				   // alert(element.read);
                   
				  var title= element.title;
				  var id= element.id;
				   var read= element.read;
				  var subject="";
				  var imag_path ="";
				  if(read=='t')
				  {
					  alert('true');
					  //var subject= ""+element.subject+"";  
					  var subject= "<h4><span style='font-weight:normal;'>"+element.subject+"</span></h4> ";
					    imag_path = "images/org/read.png";
				  }
				  else
				  {
					  var subject= "<h4>"+element.subject+"</h4>";  
					    imag_path = "images/org/unread.png";
				  }
				  
				  var subject= "<h4>"+element.subject+"</h4>";  
				  var abody = element.body;
				  var path= 'http://www.must.edu.eg/'+element.path;
				 
				 // alert(path);
				  //path="https://www.google.com.eg";
				  
				  
				  
				  
				  
				  
				 news_output +="<li><div class=\"feat_small_icon\"><img src=\""+imag_path+"\" alt=\"\" title=\"\" /></div><div class=\"feat_small_details\">"+subject+"<a href=\"photos.html\">"+abody+"</a></div><div class=\"view_more\"><a href=\"photos.html\"><img src=\"images/load_posts_disabled.png\" alt=\"\" title=\"\" /></a></div></li>";
		
                    }  );
					  
                    document.getElementById("inbox_data").innerHTML =news_output;
            }

         });
		 
		 
}

	
};
