const savoirPlus = document.querySelectorAll(".plus");
const modale = document.querySelector(".modale");

for(let i = 0;i < savoirPlus.length;i++){
    savoirPlus[i].addEventListener("click", ouvreModale);
}

function ouvreModale(e){
    e.preventDefault();
    console.log("allo");
    const div = document.createElement("div");
    div.classList.add("mod");
    div.textContent = "Modale";
    modale.appendChild(div);
    modale.classList.add("visible");

    div.addEventListener("click", fermeModale);
}

function fermeModale(e){
    modale.removeChild(e.target);
    modale.classList.remove("visible");
}