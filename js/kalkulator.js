window.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#idpluss").addEventListener('click', function () {
        var svar = parseInt(document.querySelector("#idtalla").value) +
                   parseInt(document.querySelector("#idtallb").value);
        document.querySelector("#idsvar").innerHTML = svar;
    });
    document.querySelector("#idminus").addEventListener('click', function () {
        var svar = parseInt(document.querySelector("#idtalla").value) -
                   parseInt(document.querySelector("#idtallb").value);
        document.querySelector("#idsvar").innerHTML = svar;
    });
    document.querySelector("#idmult").addEventListener('click', function () {
        var svar = parseInt(document.querySelector("#idtalla").value) *
                   parseInt(document.querySelector("#idtallb").value);
        document.querySelector("#idsvar").innerHTML = svar;
    });
    document.querySelector("#iddivi").addEventListener('click', function () {
        var svar = parseInt(document.querySelector("#idtalla").value) /
                   parseInt(document.querySelector("#idtallb").value);
        svar = svar.toFixed(2);
        document.querySelector("#idsvar").innerHTML = svar;
    });            
});