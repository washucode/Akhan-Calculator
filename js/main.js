function calulateAkhan() {
  //takes input from the datepicker
  var userYearInput = document.getElementById("inputYear").value;
  var userDayInput = document.getElementById("inputDay").value;
  var userMonthInput = document.getElementById("inputMonth").value;

  var gender ;
  //the if statement is to check what radio button is checked.
  if (document.getElementById('femaleChecked').checked) {
    //to check if female is checked
   gender = document.getElementById('femaleChecked').value;
   }
   else if(document.getElementById('maleChecked').checked){
     //to check if male is checked
     gender = document.getElementById('maleChecked').value;

   }

  var century = parseInt(userYearInput.slice(0,2)); //slice date  to get century
  var year = parseInt(userYearInput.slice(2,4)); //slice date to get year
  var month = parseInt(userMonthInput); // to get month
  var day = parseInt(userDayInput); //slice date to get day
  var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];//put in an array for ease of access
  var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];//put in an array for ease of access

  //to calculate exact day of birth
  var dayofBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10))+day) % 7;
  if (dayofBirth < 0){

    dayofBirth = dayofBirth*-1;
    alert(dayofBirth);
  }
  else if(dayofBirth == 0){

    dayofBirth = 1;
    alert(dayofBirth);
  }
  else {
    dayofBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10))+day) % 7;
    alert(dayofBirth);
  }


  if (gender ==="M"){
    //checks if gender is male
    var mName =  maleName[dayofBirth-1];//find out value of gender in index [dayofBirth-1]

    alert("Your Akhan Name is "+ mName);

    document.getElementById("displayName").innerHTML =  "Your Akhan Name is "+ mName;//write value in html element p

  }
   else {
     //checks if gender is female

    var fName = femaleName[dayofBirth-1];//find out value of gender in index [dayofBirth-1]

    alert("Your Akhan Name is "+ fName);
    document.getElementById("displayName").innerHTML = "Your Akhan Name is "+ fName;//write value in html element p
  }

}
