let getal = 0;
let output = document.getElementById("getal");

function plusGetal() {   

  output.innerText = getal;
    
  if (getal === 10) {
          getal = 0;
        }

    else{
      getal++;
    }
      }