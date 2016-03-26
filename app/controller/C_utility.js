Ext.define('SemperSitAmet.controller.C_utility', {
    extend: 'Ext.app.Controller',

    config: {
        control:{

        }
    },

    /////////////////////////////////////////

    updateUiStates: function(){
        Ext.Ajax.request({
            url: 'http://'+window.localStorage.getItem("arduino_ip")+'/?action=read_actual_states',
            timeout: 5000,
            success: function(response){
                var risposta = Ext.JSON.decode(response.responseText),
                    led7 = risposta["result"]["7"],
                    led8 = risposta["result"]["8"];

                Ext.ComponentQuery.query("main togglefield[name=led_verde]")[0].setValue(led7);
                Ext.ComponentQuery.query("main togglefield[name=led_rosso]")[0].setValue(led8);
            },
            failure: function(){
                Ext.Msg.alert("ERROR CONNECTION","Non connesso ad Arduino");
            }
        });
    },

    setLed: function(pin,value){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState == 4 && xhttp.status == 200){
                //
            }
        }
        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&led="+pin+"&value="+value, true); //false = sync || true = async
        xhttp.send();
    }

});
