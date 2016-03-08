Ext.define('SemperSitAmet.view.main.V_main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    config: {
        scrollable: true,

        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Gestione',
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
                        xhttp.open("GET", "http://192.168.1.220/?action=set&led=7&value="+value, true); //false = sync || true = async
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
                        xhttp.open("GET", "http://192.168.1.220/?action=set&led=8&value="+value, true); //false = sync || true = async
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
                        xhttp.open("GET", "http://192.168.1.220/?action=save_current_states", true); //false = sync || true = async
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
                        xhttp.open("GET", "http://192.168.1.220/?action=read_saved_states", true); //false = sync || true = async
                        xhttp.send();
                    }
                }
            }
        ]
    }
});


/*
Ext.define('SemperSitAmet.view.main.V_main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Img',
        'Ext.field.Toggle',
        'Ext.Ajax'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },

                padding: '10',
                scrollable: true,
                //styleHtmlContent: true,


                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Webduino'
                    },

                    {
                        xtype: 'image',
                        src: "resources/images/logo.png",
                        width: 200,
                        height: 200,
                        margin: '10 0 0 0'
                    },
                    {
                        html: "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the "+
                            "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file "+
                            "and refresh to change what's rendered here.",
                        margin: '20 0 0 0'
                    },
                    {
                        xtype: 'button',
                        text: 'Avanti',
                        ui: 'forward',
                        margin: '20 0 0 0',
                        listeners: {
                            tap: function(btn){
                                btn.up('tabpanel').setActiveItem(1);
                            }
                        }
                    }
                ]
            },

            ////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////

            {
                title: 'Get Started',
                iconCls: 'action',

                scrollable: true,

                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },



                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Sicurezza',
                        items:[
                            {
                                xtype:'button',
                                ui: 'back',
                                text:'Home',
                                listeners: {
                                    tap: function(btn){
                                        btn.up('tabpanel').setActiveItem(0);
                                    }
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        label: 'Password',
                        name: 'password',
                        inputType: 'password',
                        width: '100%',
                        placeHolder: 'Password'
                    },

                    {
                        xtype: 'textfield',
                        label: 'Ripeti',
                        name: 'ripeti_password',
                        inputType: 'password',
                        width: '100%',
                        placeHolder: 'Ripeti Password'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Ricordami',
                        width: '100%'
                    },
                    {
                        xtype: 'button',
                        text: 'Avanti',
                        ui: 'forward',
                        margin: '20 0 0 0',
                        listeners: {
                            tap: function(btn){
                                btn.up('tabpanel').setActiveItem(2);
                            }
                        }
                    }
                ]
            },

            ////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////

            {
                title: 'Get Started',
                iconCls: 'settings',

                scrollable: true,

                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },



                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'LEDs',
                        items:[
                            {
                                xtype:'button',
                                ui: 'back',
                                text:'Sicurezza',
                                listeners: {
                                    tap: function(btn){
                                        btn.up('tabpanel').setActiveItem(1);
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
                                xhttp.open("GET", "http://192.168.1.220/?action=set&led=7&value="+value, true); //false = sync || true = async
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
                                xhttp.open("GET", "http://192.168.1.220/?action=set&led=8&value="+value, true); //false = sync || true = async
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
                                xhttp.open("GET", "http://192.168.1.220/?action=save_current_states", true); //false = sync || true = async
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
                                xhttp.open("GET", "http://192.168.1.220/?action=read_saved_states", true); //false = sync || true = async
                                xhttp.send();
                            }
                        }
                    }
                ]
            }
        ]
    }
});
*/
