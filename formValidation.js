//function for user validation

function ValidateValue(){
  var Name=document.getElementById('name').value;
  console.log(Name);
  var Country=document.getElementById('country').value;
  var phoneNumber=document.getElementById('pnumber').value;
  var courseInterest=document.getElementById('courseInterest').value;

  var error=false;

  if(Name==''){
    error=true;
    alert("Name cannot be empty");
  }
  else if(Country==''){
    error=true;
    alert("Country cannot be empty");
  }
  else if(phoneNumber=='' || phoneNumber.length<10){ // logic to check that the phone number entered is not empty and invalid by checking the length
    error=true;
    alert("Phone number cannot be blank or less than ten digits");
  }

  if(error==false){ 
    KeepInStorage(Name,Country); //to store the values temporarily, calling the last function down KeepInStorage to keep as a cookie
    if(typeof(Storage)!="undefined"){
    localStorage.setItem("name",Name);       //set the items to localStorage
    localStorage.setItem("country",Country);
        var retrieveName=localStorage.getItem("name");             //get the items from localstorage
        var retrieveCountry=localStorage.getItem("country");
        alert(retrieveName + " " + "from"+" " + retrieveCountry + " " + "you will be contacted soon by a RIT representative"); //localstorage implementation
    }
    else if(typeof(Storage)=="undefined"){
      alert("Incompatible browser");
      window.location="https://www.mozilla.org/en-US/firefox/new/";
    }

  }

}

function KeepInStorage(xname,xcountry){
  document.cookie= xname + "=" + xcountry + ";";   //usage of cookie to store the elements
}