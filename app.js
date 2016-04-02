/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'SemperSitAmet',

    requires: [
        'Ext.MessageBox',
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.Ajax',
        'Ext.field.Toggle',
        'Ext.List',
        'Ext.field.Select',
        'Ext.field.Number'
    ],

    controllers:[
        'C_utility',
        'C_welcome',
        'C_main',
        'C_settings',
        'C_type_pin'
    ],


    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        //per evitare il bug degli Ext.Msg.alert che non si chiudono
        Ext.Msg.defaultAllowedConfig.showAnimation = false;

        //per evitare che Ajax.request faccia due richieste (la prima sempre con metodo OPTIONS)
        Ext.Ajax.setUseDefaultXhrHeader(false);

        Ext.Viewport.add({
            xtype: 'panel',
            name: 'card',
            layout: {
                type: 'card',
                animation: 'flip'
            },
            items:[
                {
                    xtype: 'welcome'
                },
                {
                    xtype: 'panel',
                    name: 'main_card',
                    layout: {
                        type: 'card',
                        animation: 'flip'
                    },
                    items: [
                        {
                            xtype: 'main'
                        },
                        {
                            xtype: 'settings'
                        }
                    ]
                }
            ]
        });

        var arduino_ip = window.localStorage.getItem("arduino_ip");
        if(arduino_ip !== null){
            Ext.ComponentQuery.query("viewport panel[name=card]")[0].setActiveItem(1);
            //SemperSitAmet.app.getController("C_utility").updateUiStates();
        }

        //se non sono stati configurati i pin li metto con la config di default

        if(window.localStorage.getItem("config_pins") === null)
            this.inizializzoBottoni();

        console.log(Ext.JSON.decode(window.localStorage.getItem("config_pins")));
    },


    inizializzoBottoni: function(){
        var config_pins = [];
        for(var i = 0 ; i<7; i++){
            config_pins[i+3] = {
                xtype: "switch", //switch,pression_button,timed_button,monitor_temperature
                pin: (i+3),
                etichetta: "PIN_"+(i+3),
                tempo: null,
                disabilitato: false
            }
        }
        config_pins[14] = {
            xtype: "switch", //switch,pression_button,timed_button,monitor_temperature
            pin: 14,
            etichetta: "PIN_A0",
            tempo: null,
            disabilitato: false
        }
        config_pins[15] = {
            xtype: "switch", //switch,pression_button,timed_button,monitor_temperature
            pin: 15,
            etichetta: "PIN_A1",
            tempo: null,
            disabilitato: false
        }
        window.localStorage.setItem("config_pins",Ext.JSON.encode(config_pins));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }


});

/*
ICONE
http://pictos.cc/classic/font
*/

/*
Nel caso in cui la build production dias Unexpected Identifier su app.js :

1-Open Chrome's dev tools
2-Goto to the resources tab
3-Expand local storage
4-Select your web app's url
5-Delete all entries
*/
