Ext.define('SemperSitAmet.view.welcome.V_welcome', {
    extend: 'Ext.navigation.View',
    xtype: 'welcome',

    config: {

        defaultBackButtonText: "Indietro",

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
                        src: "resources/images/logo_arduino.png",
                        width: 150,
                        height: 150,
                        margin: '10 0 0 0'
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
                                        //styleHtmlContent: true,
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
                                                width: "100%",//320,
                                                height: 150,
                                                margin: '10 0 0 0'
                                            },
                                            {
                                                html: "<div style='text-align: center;'>Collegare Arduino alla rete adsl ed elettrica.<br><br>E' consigliabile associare un'ip fisso ad Arduino <br><br><b>hostname:</b> <i>WIZnetEFFEED</i><br><b>MAC:</b> <i>DE:AD:BE:EF:FE:ED</i><br><br> Usare quindi il pulsante di seguito per effettuare la connessione.</div>",
                                                margin: '20 0 0 0'
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Verifica Connessione',
                                                ui: 'action',   //confirm
                                                margin: '20 0 0 0',
                                                listeners:{

                                                    tap: function(btn){

                                                        Ext.Msg.prompt('Subnet', 'Inserire la Subnet dove si trova Arduino', function(btnId,subnet) {
                                                            if(btnId == "ok"){
                                                                btn.up("viewport").mask({
                                                                    xtype: 'loadmask',
                                                                    message: 'Verifica in corso'
                                                                });
                                                                Ext.Ajax.abortAll();
                                                                var ip_trovato = false;
                                                                var ip_testati = 0;
                                                                for(var i = 0; i<=255; i++){
                                                                    Ext.Ajax.request({
                                                                        url: 'http://'+subnet+'.'+i+'/?action=read_actual_states',
                                                                        timeout: 60000,
                                                                        failure: function(){
                                                                            ip_testati++;
                                                                            if(ip_testati==256 && !ip_trovato){
                                                                                btn.up("viewport").unmask();
                                                                                Ext.Msg.alert("Attenzione!","Testati tutti gli ip della subnet "+subnet+" senza successo.");
                                                                            }
                                                                        },
                                                                        success: function(response){
                                                                            ip_testati++;
                                                                            var risposta = Ext.JSON.decode(response.responseText);
                                                                            if(risposta["success"]){
                                                                                ip_trovato = true;
                                                                                Ext.Ajax.abortAll();
                                                                                var ip_da_salvare = response.request.options.url.replace("http://","").replace("/?action=read_actual_states","");

                                                                                //salvo ip nel localStorage
                                                                                window.localStorage.setItem("arduino_ip",ip_da_salvare);

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
                                                                                                    btn.up("viewport").mask({
                                                                                                        xtype: 'loadmask',
                                                                                                        message: 'Cominciamo...'
                                                                                                    });
                                                                                                    setTimeout(function(){
                                                                                                        btn.up("viewport").unmask();
                                                                                                        //SemperSitAmet.app.getController("C_utility").updateUiStates();
                                                                                                        Ext.ComponentQuery.query("viewport panel[name=card]")[0].setActiveItem(1);
                                                                                                    },3000);
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                )
                                                                            }
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        },null,false,"192.168.1");
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
