Ext.define('SemperSitAmet.controller.C_main', {
    extend: 'Ext.app.Controller',

    config: {


        views: [
            'main.V_main'
        ],

        control:{

        }


    },

    /////////////////////////////////////////

    refreshView: function(){
        this_view = Ext.ComponentQuery.query("main")[0];

        if(window.localStorage.getItem("config_pins")===null) SemperSitAmet.app.inizializzoBottoni();
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
