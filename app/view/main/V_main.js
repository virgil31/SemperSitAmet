Ext.define('SemperSitAmet.view.main.V_main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    config: {
        scrollable: true,

        style: 'background: black',

        layout: {
            type: 'vbox',
            align: 'center'
            //pack: 'center'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Gestione Arduino'/*,
                items:[
                    {
                        iconCls: 'settings',
                        align: 'right',
                        listeners: {
                            tap: function(btn){
                                Ext.ComponentQuery.query("settings")[0].reset();
                                Ext.ComponentQuery.query("viewport panel[name=main_card]")[0].setActiveItem(1);
                            }
                        }
                    }
                ]*/
            }
            /*,
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
        this.callParent();
        this_view = this;

        //per evitare di cliccare sui bottoni durante lo scrolling mi devo mettere da parte
        //una variabile che mi dice se sto scrollando nella view
        this_view.scrolling = false;
        this_view.getScrollable()._scroller.on('scrollstart', function() {
            this_view.scrolling = true;
        });
        this_view.getScrollable()._scroller.on('scrollend', function() {
            this_view.scrolling = false;
        });


        if(window.localStorage.getItem("config_pins")===null) SemperSitAmet.app.inizializzoBottoni();
        var config_pins = Ext.JSON.decode(window.localStorage.getItem("config_pins"));
        var items = [];

        /*
        config_pins.forEach(function(config_pin){
            if(config_pin !== null){
                config_pin.width = '100%';
                config_pin.labelWidth = '70%';
                items.push(config_pin);
            }
        });
        */
        items.push({
            xtype: 'panel',
            width: "100%",
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            defaults:{
                flex:1,
                height: "8em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[0],
                config_pins[1]
            ]
        });
        items.push({
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            width: "100%",
            defaults:{
                flex:1,
                height: "8em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[2],
                config_pins[3]
            ]
        });
        items.push({
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            width: "100%",
            defaults:{
                flex:1,
                height: "8em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[4],
                config_pins[5]
            ]
        });
        items.push({
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            width: "100%",
            defaults:{
                flex:1,
                height: "8em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[6],
                config_pins[7]
            ]
        });

        items.push({
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            width: "100%",
            defaults:{
                flex:1,
                height: "8em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[8],
                {
                    xtype: 'button',
                    //iconCls: 'settings',
                    //style: 'background: #EDAA02; color: white; border-radius: 0px;border: 1px solid transparent; border-top-color: transparent;'+
                    //        'background-position: center center; background-image: url(\'https://cdn2.iconfinder.com/data/icons/outline-signs/350/gear-512.png\');',
                    style: {
                        background: "#EDAA02",
                        color: "white",
                        borderRadius: 0,
                        border: "1px solid transparent",
                        borderTopColor: "transparent",
                        backgroundImage: "url(resources/images/icon_settings.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "80px 80px"
                    },
                    handler: function(){
                        Ext.ComponentQuery.query("settings")[0].reset();
                        Ext.ComponentQuery.query("viewport panel[name=main_card]")[0].setActiveItem(1);
                    }
                }
            ]
        });

        //config_pins[8].width = "100%";
        //items.push(config_pins[8]);

        /*

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

        items.push({
            xtype: 'button',
            text: 'check scroll',
            handler: function(){
                if(!Ext.ComponentQuery.query("main")[0].scrolling)
                    console.log("lo premo!");
            },
            margin: '10 0 0 0'
        });*/

        this_view.setItems(items);
    }
});
