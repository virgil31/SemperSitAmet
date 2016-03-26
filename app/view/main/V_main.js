Ext.define('SemperSitAmet.view.main.V_main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    config: {
        scrollable: true,

        layout: {
            type: 'vbox',
            align: 'center'
            //pack: 'center'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Gestione Arduino',
                items:[
                    {
                        iconCls: 'settings',
                        align: 'right',
                        listeners: {
                            tap: function(btn){
                                Ext.ComponentQuery.query("viewport panel[name=main_card]")[0].setActiveItem(1);
                            }
                        }
                    }
                ]
            },

            {
                xtype: 'togglefield',
                label: 'Led Verde',
                name: 'led_verde',
                width: '100%',
                labelWidth: '70%',
                listeners: {
                    change: function(btn,checked){
                        var value = checked ? 1 : 0;

                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function(){
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                                //Ext.Msg.alert("switched","switched");
                            }
                        }
                        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&led=7&value="+value, true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            },
            {
                xtype: 'togglefield',
                label: 'Led Rosso',
                name: 'led_rosso',
                width: '100%',
                labelWidth: '70%',
                listeners: {
                    change: function(btn,checked){
                        var value = checked ? 1 : 0;

                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function(){
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                                //Ext.Msg.alert("switched","switched");
                            }
                        }
                        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&led=8&value="+value, true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            },
            {
                xtype: 'togglefield',
                label: 'Walter 5',
                name: 'led_rosso',
                width: '100%',
                labelWidth: '70%',
                listeners: {
                    change: function(btn,checked){
                        var value = checked ? 1 : 0;

                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function(){
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                                //Ext.Msg.alert("switched","switched");
                            }
                        }
                        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&led=5&value="+value, true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Salva configurazione',
                margin: '20 0 10 0',
                listeners: {
                    tap: function(btn){
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function(){
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                                //
                            }
                        }
                        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=save_current_states", true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Carica configurazione',
                margin: '10 0 0 0',
                listeners: {
                    tap: function(btn){
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function(){
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                                var risposta = JSON.parse(xhttp.responseText);
                                    states = risposta["result"].toString(),
                                    states = states.split("").reverse().join("");
                                    led7 = (states[7] != undefined) ? states[7] : 0;
                                    led8 = (states[8] != undefined) ? states[8] : 0;

                                SemperSitAmet.app.getController("C_utility").setLed(7,led7);
                                SemperSitAmet.app.getController("C_utility").setLed(8,led8);

                                SemperSitAmet.app.getController("C_utility").updateUiStates();
                            }
                        }
                        xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=read_saved_states", true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            }
        ]
    }
});
