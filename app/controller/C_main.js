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

        /*
        config_pins.forEach(function(config_pin){
            if(config_pin !== null){
                config_pin.width = '100%';
                config_pin.labelWidth = '70%';
                items.push(config_pin);
            }
        });*/

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
                height: "7em",
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
                height: "7em",
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
                height: "7em",
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
                height: "7em",
                margin: "0.2em 0.2em 0.2em 0.2em"
            },
            items:[
                config_pins[6],
                config_pins[7]
            ]
        });

        config_pins[8].width = "100%";
        items.push(config_pins[8]);

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
        });

        */

        this_view.setItems(items);

    }
});
