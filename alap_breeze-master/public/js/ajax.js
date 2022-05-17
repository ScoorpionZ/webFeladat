class MyAjax{
    constructor(){
    }
    
    getAdat(apivegpont,tomb,myCallback){
        tomb.splice(0,tomb.length);
        $.ajax({
            url:apivegpont,
            type:"GET",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success:function(result){
                result.forEach(element => {
                    tomb.push(element)
                });
                myCallback();
            },
            error: function(result) {

                alert("Adatbetöltés sikertelen!");
            }
        });
    }
};