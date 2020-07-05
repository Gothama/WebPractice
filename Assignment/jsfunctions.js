function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("pls input a number");
        return false;
    }
    return true;
}

function addition(){
    var n1 = document.getElementById("num1").value;
    var n2= document.getElementById("num2").value;
    var total = parseInt(n1) +parseInt(n2);
    document.getElementById("ans").value= total.toString();
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function BMIcal(){
    var h = document.getElementById("h").value;
    var w= document.getElementById("w").value;
    var bmi = (w/Math.pow(h*0.01,2)).toFixed(2);
    document.getElementById("a").value= bmi.toString();
    document.getElementById("a").style.width="fit-content";
    document.getElementById("h").value = "";
    document.getElementById("w").value = "";
    document.getElementById("formula").innerHTML = "BMI = (Weight(kg)/Height(cm)x 0.01)<sup>2<sup>";

} 

function conversion(){
    
    var tempreature= document.getElementById("temp").value;
    document.getElementById("temp").value = "";
    if((/C/.test(tempreature))){
        
        var ce = tempreature.replace(/C/, "");
        document.getElementById("tempbanner").innerHTML = "Tempreature in Farenheit";
        document.getElementById("converted").value =((parseFloat(ce)*1.8) + 32).toFixed(2).toString() + "F";
        
    }
    else if((/F/.test(tempreature))){
        var ce = tempreature.replace(/F/, "");
        document.getElementById("tempbanner").innerHTML = "Tempreature in Celcuis";
        document.getElementById("converted").value = ((parseFloat(ce)-32)/1.8).toFixed(2).toString() + "C";
    }
    else{
        alert("pls follow the instructions. Add the tempreature with its relevant unit - F/C");
    }
}

function check() {
    var myInput = document.getElementById("pwd").value;
    var lowerCaseLetters = new RegExp(/(?=[a-z]).{4,}/);
    if(lowerCaseLetters.test(myInput)) {  
      document.getElementById("c4").style.display="none";
      } 
    else {
      document.getElementById("c4").style.display="block";
    }
      var upperCaseLetters = new RegExp(/(?=[A-Z]).{4,}/);
      if(upperCaseLetters.test(myInput)) {  
        document.getElementById("c3").style.display="none";
      } 
      else {
        document.getElementById("c3").style.display="block";
      }
      var numbers = new RegExp(/(?=[0-9]).{2,}/);
      if(numbers.test(myInput)) {  
        document.getElementById("c5").style.display="none";
      } 
      else {
        document.getElementById("c5").style.display="block";
      }
      var specialchar = new RegExp(/(?=[!@#$%&*()_+=|<>?{}\\\\~-]).{3,}/);
      if(specialchar.test(myInput)) {  
        document.getElementById("c2").style.display="none";
      } 
      else {
        document.getElementById("c2").style.display="block";
      }
      if(myInput.length >= 15) {
        document.getElementById("c1").style.display="none";
      } 
      else {
        document.getElementById("c1").style.display="block";
      }
     if( (myInput.length >= 15) && (specialchar.test(myInput)) && (numbers.test(myInput)) && (upperCaseLetters.test(myInput)) && (lowerCaseLetters.test(myInput))){
       document.getElementById("c6").style.display = "block";
     }
     if( !((myInput.length >= 15) && (specialchar.test(myInput)) && (numbers.test(myInput)) && (upperCaseLetters.test(myInput)) && (lowerCaseLetters.test(myInput)))){
       document.getElementById("c6").style.display = "none";
     }
  }


  function create(){
    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);
}
function nameatload(){
    var name = localStorage.getItem("name");
     document.getElementById("name").value = name;
}

function change(){
    var bgcolor = localStorage.getItem("bgcolor") ;
    if(bgcolor=="blue"){
        var newcolor = "yellow";
    }
    else if(bgcolor=="yellow"){
        var newcolor = "red";
    }
    else if(bgcolor=="red"){
        var newcolor = "green";
    }
    else if(bgcolor=="green"){
        var newcolor = "blue";
    }
    else if(bgcolor==null){
        var newcolor = "blue";
    }
    document.body.style.backgroundColor  = newcolor;
    localStorage.setItem("bgcolor", newcolor);
}
document.addEventListener("click", function(){
    change();
});

function loadcolor(){
    var bgcolor = localStorage.getItem("bgcolor");
    if(bgcolor==null){
        bgcolor="blue";
    }
    document.body.style.backgroundColor  = bgcolor;
   }

   
function getWeather(){
    var input = "colombo";
    var main = document.querySelector('#name');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var clouds = document.querySelector('.clouds');
    var button= document.querySelector('.submit');

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=0525566d24e2c5067b285f275fe2d95b')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+(tempValue - 273.15) + " <sup>0</sup>C" ;
  input.value ="";
})
}    

function download() {
        var filename = "webtext.txt";
        var text = document.getElementById("myTextArea").value;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }







  