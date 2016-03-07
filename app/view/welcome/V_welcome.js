Ext.define('SemperSitAmet.view.welcome.V_welcome', {
    extend: 'Ext.navigation.View',
    xtype: 'welcome',

    config: {


        items: [
            /////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////
            {
                title: 'Benvenuto!',
                scrollable: true,
                padding: 20,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'image',
                        src: "resources/images/logo.png",
                        width: 150,
                        height: 150,
                        margin: '10 0 0 0',
                        style: {
                            backgroundColor: "white"
                        }
                    },
                    {
                        html: "<div style='text-align: center;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>",
                        margin: '20 0 0 0'
                    },
                    {
                        xtype: 'button',
                        text: 'Inizia',
                        ui: 'action-forward',
                        margin: '20 0 0 0',
                        listeners: {
                            tap: function(btn) {

                                btn.up("navigationview").push(
                                    /////////////////////////////////////////////////////////////////////////////
                                    /////////////////////////////////////////////////////////////////////////////
                                    {
                                        title: 'Connessione',
                                        scrollable: true,
                                        padding: 20,
                                        layout: {
                                            type: 'vbox',
                                            align: 'center'
                                        },
                                        items:[
                                            {
                                                xtype: 'image',
                                                src: "resources/images/connect_arduino.png",
                                                width: 320,
                                                height: 150,
                                                margin: '10 0 0 0'
                                            },
                                            {
                                                html: "<div style='text-align: center;'>Arduino viene distribuito con l'indirizzo predefinito 192.168.1.220. Assicurarsi quindi di trovarsi sulla sua stessa rete e che tale indirizzo non sia già occupato da un altro dispositivo.<br><br><br>Collegare Arduino alla rete adsl ed elettrica. Usare quindi il pulsante di seguito per effettuare un test veloce.</div>",
                                                margin: '20 0 0 0'
                                            },
                                            {                                                
                                                xtype: 'button',
                                                text: 'Verifica Connessione',
                                                ui: 'action',   //confirm
                                                margin: '20 0 0 0',
                                                listeners:{

                                                    tap: function(btn){
                                                        btn.up("viewport").mask({
                                                            xtype: 'loadmask',
                                                            message: 'Verifica in corso'
                                                        });

                                                        Ext.Ajax.request({
                                                            url: 'http://192.168.1.220/?action=read_actual_states',
                                                            timeout: 5000,
                                                            success: function(response){
                                                                btn.up("viewport").unmask();

                                                                btn.up("navigationview").push(
                                                                /////////////////////////////////////////////////////////////////////////////
                                                                /////////////////////////////////////////////////////////////////////////////
                                                                    {
                                                                        title: 'Perfetto!',
                                                                        scrollable: true,
                                                                        padding: 20,
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            align: 'center',
                                                                            pack: 'center'
                                                                        },
                                                                        items:[
                                                                            {
                                                                                xtype: 'image',
                                                                                src: "resources/images/icon_ok.png",
                                                                                width: 250,
                                                                                height: 250
                                                                            },
                                                                            {
                                                                                xtype: 'button',
                                                                                text: 'Inizia subito!',
                                                                                ui: 'confirm',
                                                                                margin: '30 0 0 0',
                                                                                handler: function(){
                                                                                    Ext.Msg.alert("asd","asd");
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                )
                                                            },
                                                            failure: function(){
                                                                btn.up("viewport").unmask();
                                                                Ext.Msg.alert("Attenzione","Non connesso ad Arduino!");
                                                            }
                                                        });                                                                                        
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                );
                            }
                        }                        
                    }
                ]
            }
        ]
    }
});


