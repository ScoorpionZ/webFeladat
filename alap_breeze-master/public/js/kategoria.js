class Kategoriak{
    constructor(szuloelem, adat){
        this.szuloelem=szuloelem;
        this.adat=adat;
        this.kategoriBetolt();
    }
       
    kategoriBetolt(){
        for (const key in this.adat) {
            if(key=="kategorianeve"){
                this.szuloelem.append("<option value="+this.adat.id+" id=m"+this.adat.id+">"+this.adat[key]+"</option>");
            }
        }
    }
}