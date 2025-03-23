let count=0;

function Guess(){
    count++;
    if(count==3){
        document.getElementById("value").disabled = true;
        alert("Rounds are Over!");
    }
    else if(document.getElementById("value").value == " "){
        alert("Error!You mus enter the number");
    }
    else{
    let systemValue=Math.floor(Math.random() * 101);
    let Value=parseInt(document.getElementById("value").value);
    let greater="Your number is greater than number";
    let lower="Your number is lower than number";
    let won="Congratulations!Your won";
    

    
    if(Value<systemValue){
        document.getElementById("h1").innerText = lower;
    }else if(Value>systemValue){
        document.getElementById("h1").innerText = greater ;      
    }else if(Value==systemValue){
        document.getElementById("h1").innerText = won;
    }
    else {
      alert("Number Must greater than 0")
    }
}
}


