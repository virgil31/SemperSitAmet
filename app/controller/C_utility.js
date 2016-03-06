Ext.define('SemperSitAmet.controller.C_utility', {
    extend: 'Ext.app.Controller',

    config: {
        control:{
            
        }
    },

    /////////////////////////////////////////

    updateUiStates: function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            Ext.Msg.alert("Status","Status: "+xhttp.status);
            if (xhttp.readyState == 4 && xhttp.status == 200){
                var risposta = JSON.parse(xhttp.responseText); 
                    led7 = risposta["result"]["7"],
                    led8 = risposta["result"]["8"];

                Ext.ComponentQuery.query("main togglefield[name=led_verde]")[0].setValue(led7);
                Ext.ComponentQuery.query("main togglefield[name=led_rosso]")[0].setValue(led8);
            }
        }
        xhttp.open("GET", "http://192.168.1.220/?action=read_actual_states", true); //false = sync || true = async
        xhttp.send();
    },

    setLed: function(pin,value){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState == 4 && xhttp.status == 200){
                //
            }
        }
        xhttp.open("GET", "http://192.168.1.220/?action=set&led="+pin+"&value="+value, true); //false = sync || true = async
        xhttp.send();
    }

});