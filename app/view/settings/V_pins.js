Ext.define('SemperSitAmet.view.settings.V_pins', {
    extend: 'Ext.Panel',
    xtype: 'settings_pins',

    config: {
        scrollable: true,

        title: "Configura PINs",

        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },

        items: [
            //PIN7
            {
                xtype: 'panel',
                width: "100%",
                layout:{
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                    {
                        html: "7",
                        flex: 0.2
                    },
                    {
                        xtype: 'textfield',
                        name: 'etichetta7',
                        value: 'pin7',
                        flex: 1
                    },
                    {
                        xtype: 'selectfield',
                        name: 'tipo7',
                        options: [
                            {text: 'Switch',  value: 'switch'},
                            {text: 'A pressione', value: 'button_pression'},
                            {text: 'Temporizzato',  value: 'button_time'},
                            {text: 'Sensore Temperatura', value: 'monitor_temperature'}
                        ],
                        flex: 1
                    },
                    {
                        xtype: 'numberfield',
                        name: 'tempo7',
                        hidden: true
                    },
                    {
                        xtype: 'selectfield',
                        name: 'disabilitato7',
                        options: [
                            {text: 'OK',  value: 'false'},
                            {text: 'OFF', value: 'true'}
                        ],
                        flex: 1
                    }
                ]
            },
            //PIN8
            {
                xtype: 'panel',
                width: "100%",
                layout:{
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                    {
                        html: "8",
                        flex: 0.2
                    },
                    {
                        xtype: 'textfield',
                        name: 'etichetta8',
                        value: 'pin8',
                        flex: 1
                    },
                    {
                        xtype: 'selectfield',
                        name: 'tipo8',
                        options: [
                            {text: 'Switch',  value: 'switch'},
                            {text: 'A pressione', value: 'button_pression'},
                            {text: 'Temporizzato',  value: 'button_time'},
                            {text: 'Sensore Temperatura', value: 'monitor_temperature'}
                        ],
                        flex: 1
                    },
                    {
                        xtype: 'numberfield',
                        name: 'tempo8',
                        hidden: true
                    },
                    {
                        xtype: 'selectfield',
                        name: 'disabilitato8',
                        options: [
                            {text: 'OK',  value: 'false'},
                            {text: 'OFF', value: 'true'}
                        ],
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Salva',
                margin: '10 0 0 0',
                handler: function(){
                    var pin7 = {
                        etichetta: Ext.ComponentQuery.query("settings_pins textfield[name=etichetta7]")[0].getValue(),
                        tipo: Ext.ComponentQuery.query("settings_pins selectfield[name=tipo7]")[0].getValue(),
                        tempo: Ext.ComponentQuery.query("settings_pins numberfield[name=tempo7]")[0].getValue(),
                        disabilitato: Ext.ComponentQuery.query("settings_pins textfield[name=disabilitato7]")[0].getValue()
                    },
                        pin8 = {
                            etichetta: Ext.ComponentQuery.query("settings_pins textfield[name=etichetta8]")[0].getValue(),
                            tipo: Ext.ComponentQuery.query("settings_pins selectfield[name=tipo8]")[0].getValue(),
                            tempo: Ext.ComponentQuery.query("settings_pins numberfield[name=tempo8]")[0].getValue(),
                            disabilitato: Ext.ComponentQuery.query("settings_pins textfield[name=disabilitato8]")[0].getValue()
                        };

                    var pins = [null,null,null,null,null,null,null,pin7,pin8];

                    console.log(pins);
                    //console.log(pins[7]); //mostro la config del 7' pin
                }
            }
        ]
    }
});
