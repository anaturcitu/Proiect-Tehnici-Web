var vector_culori = ["red", "orange", "brown", "green", "purple"];
vector_culori.push("aqua");
function randInt() {
    return Math.floor(Math.random() * 6);
}

window.onload = function()
{
    document.querySelector(".input_machu_picchu").value = localStorage.inputul;
// pentru textul de la istorie zid chinezesc:    
    var istorie = document.getElementsByClassName("istorie")[0];
        istorie.onclick=function(){
            if(istorie.style.color != "#7fffd4")
                {
                    istorie.style.color = "#7fffd4";
                    istorie.style.fontSize = "150%";
                    var istorie_zid_chinezesc = document.getElementsByClassName("istorie_zid_chinezesc")[0];
                    istorie_zid_chinezesc.style.display = "block";
                }
        }

// pentru textul care apare sub butonul "vezi oferte cazare" si culoarea butonului:
    var buton = document.getElementById("buton_cazare_roma");
    buton.onmouseover = function(event) {
        if(!buton.classList.contains("buton_oferte_cazare"))
        { 
            const element = document.createElement("p");
            element.innerHTML = "10 oferte valabile";
            document.getElementById("creare_element").appendChild(element);
            buton.classList.add("buton_oferte_cazare");
            
            let timeout;
            myFunction();
            function myFunction() {
                timeout = setTimeout(functie_stergere, 2000);
            }

            function functie_stergere() {
            element.remove();
            }
        }
        buton.style.borderColor = buton.style.color = vector_culori[randInt()]; //schimb culoarea butonului pt 2 sec

        event.stopPropagation();
    };
    buton.onclick = function() {
        window.open("https://www.booking.com/city/it/rome.ro.html");
    }
  
// pentru inputul de la machu picchu:
    var input = document.querySelector(".input_machu_picchu");

    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert(input.innerHTML);
        if(input.value == "imagini")
                window.open("https://pixabay.com/ro/images/search/machu%20picchu/");

        else if(input.value == "istorie")
            window.open("https://ro.wikipedia.org/wiki/Machu_Picchu");

        localStorage.inputul = event.target.value;
    }
    });

// schimb fontul descrierii
    var container1 = document.getElementById("container");
    var paragraf = container1.getElementsByTagName("p");
    paragraf[0].style.fontFamily = "Arial";


// schimb fontul pentru "buton cazare roma" in fontul descrierii
    const cssObj = window.getComputedStyle(paragraf[0], null);

    let font = cssObj.getPropertyValue("font-family");
    document.getElementById("buton_cazare_roma").style.fontFamily = font;

// data curenta
    setInterval(function () {
        const d = new Date();
        d.getDate();
        data = document.getElementById("data");
        data_curenta = String(d);
        data.getElementsByTagName("p")[0].innerHTML = data_curenta.slice(-60, -40);
    }, 1000);
}