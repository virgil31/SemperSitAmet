Ext.define('SemperSitAmet.view.settings.V_about', {
    extend: 'Ext.Panel',
    xtype: 'settings_about',

    config: {
        scrollable: true,

        title: "Info",

        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },

        items: [
            {
                xtype: 'image',
                src: "resources/images/logo_eis.png",
                width: 150,
                height: 150,
                margin: '10 0 0 0',
                style: {
                    backgroundColor: "white"
                }
            }
        ]
    }
});
