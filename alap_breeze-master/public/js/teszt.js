class TesztKerdes{
    constructor(szuloelem, adat){
        this.szuloelem=szuloelem;

        this.tesztId=this.szuloelem.children(".col").children(".id");
        this.tesztKerdes=this.szuloelem.children(".kerdes").children(".kerdesLeiras");
        this.tesztValasz1=this.szuloelem.children(".valasz").children(".v1");
        this.tesztValasz2=this.szuloelem.children(".valasz").children(".v2");
        this.tesztValasz3=this.szuloelem.children(".valasz").children(".v3");
        this.tesztValasz4=this.szuloelem.children(".valasz").children(".v4");
    
       
        
        this.adat=adat;
        this.tesztKerdesGeneralas();

        $(this.szuloelem.find('button')).on("click", ()=>{
            this.gomb();
        });
        
    }

    tesztKerdesGeneralas(){
        this.tesztId.html(this.adat.kategoria.id);
        console.log(this.adat); 
        this.tesztKerdes.html("<h2>"+this.adat.kerdes+"</h2>");
        this.tesztValasz1.html("<button id='"+this.adat.v1+"'>"+this.adat.v1+"</button>");
        this.tesztValasz2.html("<button id='"+this.adat.v2+"'>"+this.adat.v2+"</button>");
        this.tesztValasz3.html("<button id='"+this.adat.v3+"'>"+this.adat.v3+"</button>");
        this.tesztValasz4.html("<button id='"+this.adat.v4+"'>"+this.adat.v4+"</button>");
    }

    gomb(){
        let event = new CustomEvent("button", {detail:this});
        window.dispatchEvent(event);
    }


  
}