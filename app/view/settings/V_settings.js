Ext.define('SemperSitAmet.view.settings.V_settings', {
    extend: 'Ext.navigation.View',
    xtype: 'settings',



    config: {
        defaultBackButtonText: "Indietro",


        navigationBar: {
            docked: 'top',
            items: [
                {
                    iconCls: 'home',
                    align: 'right',
                    listeners: {
                        tap: function(btn){
                            Ext.ComponentQuery.query("viewport panel[name=main_card]")[0].setActiveItem(0);
                        }
                    }
                }
            ]
        },

        items:[
            {
                xtype:'panel',
                title: "ImpostiazionI",

                layout: {
                    type: 'vbox',
                    pack: 'stretch'
                },

                items: [
                    {
                        xtype: 'list',
                        flex:1,
                        disableSelection: true,
                        itemTpl: '<div style="font-family: Pictos; width: 24px; height: 24px; font-size: 1.4em; display: inline-block;margin-right: 10px;">{pictosIcon}</div>{title}',
                        listeners: {
                            itemtap: function(item, index){
                                if(index == 0)
                                    item.up("navigationview").push({xtype: "settings_tester"});
                                if(index == 1)
                                    item.up("navigationview").push({xtype: "settings_pins"});
                                if(index == 2)
                                    item.up("navigationview").push({xtype: "settings_profiles"});
                                if(index == 3)
                                    item.up("navigationview").push({xtype: "settings_about"});
                            }
                        },
                        data: [
                            { title: 'Verifica connessione', pictosIcon: '!' },
                            { title: 'Configura Pin', pictosIcon: 'x' },
                            { title: 'Profili', pictosIcon: 'n' },
                            { title: 'Info', pictosIcon: 'i' }
                        ]
                    }
                ]
            }
        ]
    }
});
