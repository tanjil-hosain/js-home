 function info(){

let id = document.form.id.value;
let name = document.form.name.value;
let email = document.form.email.value;
let address = document.form.address.value;
let round = document.form.round.value;
let gender = "";
let subject = "";

let  store = window.open("","", "width =400px , height = 400px");

for(i=0; i<document.form.gender.length; i++){
    if(document.form.gender[i].checked){
        gender= document.form.gender[i].value + ""
    }
}

for(i=0; i< document.form.subject.length; i++){
    if(document.form.subject[i].checked){
        subject+= document.form.subject[i].value + ","
    }


}
   store.document.write("Stuent Id "+id + "<br>")
 store.document.write("Student Name :" + name + "<br>");
          store.document.write("Student Address :" + address + "<br>");
          store.document.write("Email " + email +  "<br>");
          store.document.write("Round: " + round +  "<br>");
          store.document.write("Gender "+gender  +  "<br>")
          store.document.write("Subject: "+subject)
       
          
}
