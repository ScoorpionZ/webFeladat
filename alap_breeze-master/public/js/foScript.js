$(function(){
    const myAjax=new MyAjax;
    let feladatok =[];
    let kategoria=[];
    const szuloelem = $("#tarolo");
    const sablonElem = $(".feladat");
    let apivegpont="/api/teszt";
    let apivegpontKategoriak="/api/kategoria";

    myAjax.getAdat(apivegpont,feladatok,feladatokMegjelenitese);

    function feladatokMegjelenitese(){
        szuloelem.empty();
        sablonElem.show();
        feladatok.forEach(function(adat) {
                let ujElem = sablonElem.clone().appendTo(szuloelem);
                let ujFeladat = new TesztKerdes(ujElem,adat);
            });
    }

    myAjax.getAdat(apivegpontKategoriak ,kategoria, KategoriaBetolt);

    function KategoriaBetolt(){
        const szuloelem = $("#kategoria");
        kategoria.forEach(function(adat) {
            let ujKategoria = new Kategoriak(szuloelem,adat);
        });
    }

    $(window).on("button",(event)=>{
        console.log(document.getElementById(event.detail));
        console.log(event.detail.adat.id)
    });

});