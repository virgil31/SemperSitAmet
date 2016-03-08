Ext.define('SemperSitAmet.view.main.V_settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',

    config: {
        
        layout: {
            type: 'vbox',
            pack: 'stretch'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Impostazioni',
                items:[
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
            {
                xtype: 'list',
                flex:1,
                itemTpl: '<div style="font-family: Pictos; width: 24px; height: 24px; font-size: 1.4em; display: inline-block;margin-right: 10px;">{pictosIcon}</div>{title}',
                listeners: {
                    itemtap: function(item, index){
                        console.log("tapped");
                    }
                },
                data: [
                    { title: 'Profili', pictosIcon: 'n' },
                    { title: 'Tester', pictosIcon: 'x' },
                    { title: 'Info', pictosIcon: 'i' }
                ]
            }
        ]
    }
});
