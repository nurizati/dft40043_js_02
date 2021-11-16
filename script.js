function BMI() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var bmi = w / (h * h);
    document.getElementById("result").innerHTML = "Your BMI is" + bmi.toFixed(2);
}

function kira(){
    a=7; c="";
    for(b=1;b<13;b++){
        c += b+"x"+a+"="+(a*b)+"<br>";

    }
    hasil.innerHTML=c;
}