onlyOneListener = true;

function reactToSubmit() {
    if (onlyOneListener) {
        onlyOneListener = false;
        var form = document.getElementById("allFormulary");
        console.log(form);
        form.addEventListener("submit", function (e) {
            e.preventDefault();
          
            //Affichage des données du formulaire - WIP. Pas fait de js depuis longtemps :(
            
            //var formData = new FormData(form);
            //console.log(formData);
        });   
    }
}