document.addEventListener("DOMContentLoaded", ()=>{
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let Desplazamiento_Actual = window.pageYOffset;
        if (ubicacionPrincipal >= Desplazamiento_Actual){
            document.getElementById('header-primary').style.top = '0px';
        }
        else {
            document.getElementById('header-primary').style.top ='-100px';
        }
        ubicacionPrincipal=Desplazamiento_Actual;
    }
})