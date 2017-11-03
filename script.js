$(document).ready(function(){
   
  $("#searchEnter").click(function(){
    
  var term = $("#term").val() ; 
  var api = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + term +"&callback=?"; 
   $.ajax({
     type: "GET",
     url: api, 
     async:false,
     dataType: "json",
     success : function(data){

       $("#result").html('');
for(var i = 0;i< data[1].length; i++){
    $("#result").prepend("<li><a href="+data[3][i]+">" + data[1][i] +"</a><p>"+data[2][i]+"</p></li>");          
       }  
     },
     error: function(error){
       alert("Error!"); 
     }
   })            

  }); 
}); 