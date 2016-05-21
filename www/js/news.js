var news = {
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
   getNews :  function ()
			{
			//	alert("welcome1");
        $.ajax({ 
        type: 'POST', 
        url: 'http://www.must.edu.eg/studentszone/ios/news.php', 
        data: { get_param: 'value' }, 
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
            $.each(data.news, function(index, element) {
                 
                   
                  // alert(element.title);
                   
				  var title= element.title;
				  var id= element.id;
				  var path= 'http://www.must.edu.eg/'+element.path;
				  var day= element.day;
				  var month = element.month;
				//  alert("day= "+day);
				 // alert("month= "+month);
				 // alert(path);
				  //path="https://www.google.com.eg";
				  
                 news_output +=" <li>";
                 news_output +="   <div class='post_entry'>";
                 news_output +="       <div class='post_date'>";
                 news_output +="           <span class='day'>"+day+" "+"</span>";
                 news_output +="           <span class='month'>"+  month+"</span>";
                 news_output +="       </div>";
                 news_output +="       <div class='post_title'>";
                news_output +="       <h2><a href='' onclick=\"window.open('"+path+"', '_system');\" > "+title+"</a></h2>";
				 // news_output +=" <h2><a href='std/course.html' onclick=\"$('#Load_news').load('"+path+"')\" > "+title+"</a></h2>";
				 // news_output +=" <h2><a href='std/course.html' onclick=\"news.getdetail('"+path+"');\" > "+title+"</a></h2>";
				// news_output +="       <h2><a href='std/news.html' onclick=\"news.open_news("+path+")\" > "+title+"</a></h2>";
                 news_output +=" </div></div></li>";
            
			
		
                    }  );
					  
                    document.getElementById("news_data").innerHTML =news_output;
            }

         });
		 
		 
},

getdetail :function (path_data)
{
	$('#ajax').load(path_data);
},

	progressData: function(path_Data) { 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:path_Data,
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	initialize2: function() {
        
    },

	 open_news: function(path) { 
	   
	   /*Using ajax*/
	   alert(path);
		// var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		 // type:'POST',
		  url:path,
		 // data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax_news').html($(data).children());   
		  }
		});
    },
	
	initialize2: function() {
        
    }

};
