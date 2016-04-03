Ext.define('SemperSitAmet.view.settings.V_config_pin', {
    extend: 'Ext.form.Panel',
    xtype: 'config_pin',

    config: {
        scrollable: true,

        title: "Configura Pin",

        layout: {
            type: 'vbox',
            align: 'center'
        },

        defaults:{
            labelWidth: 125,
            width: '100%'
        },

        items: [
            {
                xtype: 'numberfield',
                name: 'pin',
                label: 'Pin',
                readOnly: true
            },
            {
                xtype: 'textfield',
                name: 'etichetta',
                label: 'Etichetta'
            },
            {
                xtype: 'selectfield',
                label: 'Tipo',
                name: 'xtype',
                options: [
                    {text: 'Switch',  value: 'switch'},
                    {text: 'A pressione', value: 'pression_button'},
                    {text: 'Temporizzato',  value: 'timed_button'},
                    {text: 'Sensore Temperatura', value: 'monitor_temperature'}
                ]
            },
            {
                xtype: 'numberfield',
                name: 'tempo',
                label: 'Tempo (ms)'
            },
            {
                xtype: 'selectfield',
                name: 'hidden',
                label: 'Mostra?',
                options: [
                    {text: 'Si',    value: 'false'},
                    {text: 'No',    value: 'true'}
                ]
            },
            {
                xtype: 'button',
                text: 'Salva Modifiche',
                handler: function(){
                    var values = this.up('formpanel').getValues(),
                        pin = SemperSitAmet.app.getController("C_settings").getConfigAndPositionByPin(values.pin),
                        position = pin.position,
                        config_pins = Ext.JSON.decode(window.localStorage.getItem("config_pins"));

                    values.hidden = values.hidden == 'true';

                    config_pins[position] = values;

                    window.localStorage.setItem("config_pins",Ext.JSON.encode(config_pins));

                    this.up("navigationview").pop();
                    //infine refresho la vista main
                    SemperSitAmet.app.getController("C_main").refreshView();
                }
            }
        ]
    }
});
