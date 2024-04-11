const info = document.querySelector('#info'); 
const allbtns = document.querySelectorAll('input[type="button"]'); 
function val(resulta) {
  form.fenetre.value = form.fenetre.value + resulta;
}

function calcule() {
  if (form.fenetre.value === "") { 
    info.textContent = "Veuillez écrire un chiffre"; 
    allbtns.forEach(btn => {
      btn.addEventListener('click', function () { 
        info.textContent = "";

      });
    });
  } else {
    form.fenetre.value = eval(form.fenetre.value);
  }
}
function suppr(){
    form.fenetre.value="";
}