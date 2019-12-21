window.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#idbutton").addEventListener('click', function () {
        doForm();
    });
});

function doForm() {
    var utskrift = document.querySelector("#idutskrift");
    var navn = document.getElementById("idnavn").value;
    var postnr = document.getElementById("idpostnr").value;
    var land = document.getElementById("idland").value;
    var data = "";

    utskrift.innerHTML = "";
    data += "Navn: " + navn + "<br>";
    data += "Postnummer: " + postnr + "<br>";
    data += "Land: " + land + "<br>";
    utskrift.innerHTML = data;
}