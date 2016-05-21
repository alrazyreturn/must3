var loginJs = {
    // Application Constructor
    initialize: function() {
        
    },
	
	alertFun: function() {
       alert('welcome click'); 
    },
	
	initialize2: function() {
        
    },
	
	
	 


  getInfo :  function ()
			{
			//	alert("welcome1");
			
		var std_id= window.localStorage.getItem("std_id");
	//	alert("welcome");
        $.ajax({ 
        type: 'POST', 
        url: 'http://www.must.edu.eg/studentszone/ios/info.php', 
        data: { std_id: std_id }, 
        dataType: 'json',
        success: function (data) { 
 

 			 var news_output=   "";
            $.each(data.info, function(index, element) {
                 
                   
                  // alert(element.title);
                   
				  var success= element.success;
				 
				  
				  
                   if(success!=0)
				   {
					//   alert(success);
					   
					    var college= element.college;
				  var cgpa= element.cgpa;
				  var earn_hrs= element.earn_hrs;
				  var level= element.level;
				  var major= element.major;
				  var advisor= element.advisor; 
				  
				  
					   var name= window.localStorage.getItem("name");
					  // alert(name);
					   document.getElementById("std_college").innerHTML ="<h4><font color='blue' >"+college+"</font></h4>";
					   document.getElementById("std_id").innerHTML ="<h4><font color='blue' >"+std_id+"</font></h4>";
					   document.getElementById("std_cgpa").innerHTML ="<h4><font color='blue' >"+cgpa+"</font></h4>";
					   document.getElementById("std_earnedHours").innerHTML ="<h4><font color='blue' >"+earn_hrs+"</font></h4>";
					   document.getElementById("std_level").innerHTML ="<h4><font color='blue' >"+level+"</font></h4>";
					   document.getElementById("std_major").innerHTML ="<h4><font color='blue' >"+major+"</font></h4>";
					   document.getElementById("std_name").innerHTML ="<h4><font color='blue' >"+name+"</font></h4>";
					   document.getElementById("studentImage").innerHTML ="<img src=\"http://must.edu.eg/intranet/pics/"+std_id+".jpg\" width=\"35%\" height=\"35%\" frameborder=\"10\" style=\"border:10\"></img>";
					   
					   
					   document.getElementById("std_advisor").innerHTML ="<h4><font color='blue' >"+advisor+"</font></h4>";
					   
				   }
            
			
		
                    }  );
					  
                    document.getElementById("news_data").innerHTML =news_output;
            }

         });
		 
		 
}
	,
	
	login:  function ()
		{
			
			var user_name=41703;// document.getElementById("Lusername").value;
			var password='0129997254';// document.getElementById("Lpassword").value;
			
			$.ajax({ 
			type: 'POST', 
			   url: 'http://www.must.edu.eg/studentszone/ios/check_login.php', 
			data: { user_name: user_name,password:password  }, 
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

						alert(element.success);
						alert(element.Message);
						var name=element.name;
						alert(name);
						 if( element.success== 1)
						 {
							  window.localStorage.setItem("loggedIn", 1);
							  window.localStorage.setItem("std_id", user_name);
							  window.localStorage.setItem("name", name);
						 }
						 else
						 {
							 window.localStorage.removeItem("loggedIn");
							 window.localStorage.removeItem("std_id");
							 window.localStorage.removeItem("name", name);
						 }
						 
						 
						 /* important
						 
						 if(window.localStorage.getItem("loggedIn") == 1) {
							// Logged In
							// Redirect to first page after logged in.
							}
							else
							{
							// Redirect to login page.
							} 
							
							*/
						});
			   
				}
	
			 });
		} ,
};
