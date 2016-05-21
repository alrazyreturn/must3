var course = {
    // Application Constructor
    initialize: function() {
        
    },
	
	courseData: function() { 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/reg_report.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },


secdualData: function() { 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/Time_Table.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	
	SemesterGradeData: function() { 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/results.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	progressData: function() { 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/progress_report.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	initialize2: function() {
        
    },
	
	
};
