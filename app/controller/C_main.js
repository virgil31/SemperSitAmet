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

        this_view.setItems(items);

    }
});
