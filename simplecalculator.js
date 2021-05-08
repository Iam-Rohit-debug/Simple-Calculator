
var y = document.querySelectorAll("button");
document.getElementById("first1").style.fontSize = "28px";
var screen = document.querySelector("input");
let screenValue = '';
for (var i = 0; i < y.length; i++) {
    y[i].addEventListener("click", function () {
        var buttontext = this.innerText;

        

        if (buttontext != "=") {
            screen.value += buttontext;
            screenValue = screen.value;
            console.log(screen.value);
        }
        else if (buttontext == "=") {
            screen.value = eval(screenValue);
        }
        if (buttontext == "C") {
            screen.value = '';
        }


    });
}
for(var i=0;i<y.length;i++){
    y[i].addEventListener("click", function() {
       
                     
        
        // var a = new Audio("tom-4.mp3");
        // a.play();

        var buttontext = this.innerText;
        // alert(buttontext);
        switch(buttontext){
            case "=" : 
                     var a = new Audio ("kick-bass.mp3");
                     a.play();
                     break;
            case "C" : 
                     var a = new Audio ("kick-bass.mp3");
                     a.play();
                     break;
          
            default : 
                     var a = new Audio ("button.mp3");
                     a.play();
        }
        
        
    });
   
       
       
    }



