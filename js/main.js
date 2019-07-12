function calulateAkhan() {
  var userDateInput = document.getElementById("inputDate").value;

  var gender ;
  if (document.getElementById('femaleChecked').checked) {
   gender = document.getElementById('femaleChecked').value;
   }
   else if(document.getElementById('maleChecked').checked){
     gender = document.getElementById('maleChecked').value;

   }
