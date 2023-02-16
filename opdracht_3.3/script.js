let getal = 0;

function plusGetal() {
    
    getal++;
       
    document.getElementById("getal").innerHTML = getal;
        
    if (getal === 10) {
          getal = 0;
        }
      }