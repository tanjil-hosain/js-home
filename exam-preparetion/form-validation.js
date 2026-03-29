function form_validation(){
    let name = document.form.name.value;
    let email= document.form.email.value;
   let  password= document.form.password.value;
   let round = document.form.round.value;
   let curse= "";
   let gender = "";

   if (name==""){
    alert ("Plase Enter your name!");
    return false;
   }

   //email validation
   if (email==""){
    alert ("Please Enter your email!");
    return false ;
   }

   if (email.indexOf("@")==-1 || email.indexOf(".")== -1 ){
    alert("Your Email is Invalid!!");
    return false ;
   }

   // Password Validation 
   if(password==""){
    alert("Please Enter your Password");
    return false;
   }

   if(password.length <= 5 || password.length >=8){
    alert("Password must be minimum 5 character or maximum 8 charecter");
    return false;
   }

   for(let i=0; i <document.form.curse.length; i++){
    if(document.form.curse[i].checked){
        curse+= document.form.curse[i].value + ",";
    }
   }

   for(let i=0; i < document.form.gender.length; i++){
    if(document.form.gender[i].checked){
        gender= document.form.gender[i].value + "";
    }
   }

   store = window.open("","", "width=500px, height=300px");

   store.document.write("Student Name:"+ name +"<br>");
   store.document.write("Email:" + email+ "<br>");
   store.document.write("Password:" + password+ "<br>");
   store.document.write("Round:"+ round+ "<br>");
   store.document.write("Curse: " + curse + "<br>")
   store.document.write("Gender: "+ gender);


   store.document.write("<hr>")
   store.document.write("<button onclick= 'window.print()'> Print</button>");
   store.document.write("<button onclick= 'window.close()'> Close</button>");
   store.document.close();
   


}