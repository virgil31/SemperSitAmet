Ext.define('SemperSitAmet.view.settings.V_pins', {
    extend: 'Ext.Panel',
    xtype: 'settings_pins',

    config: {
        scrollable: true,

        title: "Configura PINs",

        layout: {
            type: 'vbox',
            align: 'center'
        },
        defaults:{
            margin: '10 0 10 0'
        }
        /*
        items: [
            {
                xtype: 'button',
                text: 'PIN_7',
                handler: function() {
                    this.up("navigationview").push({xtype: "config_pin"});
                    var pin = SemperSitAmet.app.getController("C_settings").getConfigAndPositionByPin(7);
                    Ext.ComponentQuery.query("config_pin")[0].setValues(pin.config);
                }
            },
            {
                xtype: 'button',
                text: 'PIN_8',
                handler: function() {
                    this.up("navigationview").push({xtype: "config_pin"});
                    var pin = SemperSitAmet.app.getController("C_settings").getConfigAndPositionByPin(8);

                    Ext.ComponentQuery.query("config_pin")[0].setValues(pin.config);
                }
            }
        ]
        */
    },
    initialize : function() {
        this.callParent();
        this_view = this;

        if(window.localStorage.getItem("config_pins")===null) SemperSitAmet.app.inizializzoBottoni();
        var config_pins = Ext.JSON.decode(window.localStorage.getItem("config_pins"));
        var items = [];

        config_pins.forEach(function(config_pin){
            if(config_pin !== null){
                items.push({
                    xtype: 'button',
                    text: 'PIN_'+config_pin.pin,
                    handler: function() {
                        this.up("navigationview").push({xtype: "config_pin"});
                        var pin = SemperSitAmet.app.getController("C_settings").getConfigAndPositionByPin(config_pin.pin);

                        Ext.ComponentQuery.query("config_pin")[0].setValues(pin.config);
                    }
                });
            }
        });

        this_view.setItems(items);
    }
});
