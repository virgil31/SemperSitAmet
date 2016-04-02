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
            }/*,
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
                margin: '10 0 10 0',
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
            },*/
        ]
    },

    initialize : function() {
        this_view = this;
        this_view.callParent();

        if(Ext.JSON.decode(window.localStorage.getItem("config_pins"))==null) SemperSitAmet.app.inizializzoBottoni();
        var config_pins = Ext.JSON.decode(window.localStorage.getItem("config_pins"));
        var items = [];

        config_pins.forEach(function(config_pin){
            if(config_pin !== null){
                config_pin.width = '100%';
                config_pin.labelWidth = '70%';
                items.push(config_pin);
            }
        });

        items.push({
            xtype: 'button',
            text:   'Elimina cookie "arduino_ip"',
            margin: '10 0 0 0',
            handler: function(){
                window.localStorage.removeItem("arduino_ip");
            }
        });

        items.push({
            xtype: 'button',
            text:   'Elimina cookie "config_pins"',
            margin: '10 0 0 0',
            handler: function(){
                window.localStorage.removeItem("config_pins");
            }
        });

        this_view.setItems(items);
    }
});
