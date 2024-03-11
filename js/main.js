/*nav-gation-start*/
$(document).ready(function(){
    $('#clickmenu').click(function(){
        $('#navLinks').toggleClass('.collapse');
    });
    $('#clickmenu').click(function(){
        $('#navLinks').toggleClass('.navbar-collapse');
    });
});
/*nav-gation-end*/

/*cart-btn start*/
   var hello = document.getElementById("num-box");
   function decnumber(){
    if(hello.value <= 0){
        hello.value = 0;
       }else{
        hello.value = parseInt(hello.value) - 1;
       }
   }
   function incnum(){
    if(hello.value >= 0){
        hello.value = parseInt(hello.value) + 1;
    }
   }
   
/*cart-btn end*/

/*formvalidation start*/
function sub(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var msg = document.getElementById("msg").value;
    if(name == "" || mail == "" || msg == ""){
        alert("All Fields are required");
        return false;
    }
    else{
        true;
    }
};
/*formvalidation end*/