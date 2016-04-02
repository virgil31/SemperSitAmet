Ext.define('SemperSitAmet.view.type_pin.V_monitor_temperature', {
    extend: 'Ext.Panel',
    xtype: 'monitor_temperature',

    config:{
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        }
    },

    initialize : function() {
        this_view = this;
        this_view.callParent();

        var pin = this_view.pin;
        var etichetta = this_view.etichetta;

        var items = [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: "Temp: "+etichetta
            },
            {
                xtype: 'label',
                name: 'label_temperature_'+pin
            },
            {
                xtype: 'button',
                text: 'Aggiorna',
                margin: '0 0 0 20',

                listeners: {
                    painted: function(){
                        Ext.Ajax.request({
                            method: 'GET',
                            url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=get_dht_values&pin="+pin,
                            success: function(response){
                                var risposta = Ext.JSON.decode(response.responseText);
                                var temp = risposta["temperature"],
                                    humidity = risposta["humidity"];

                                Ext.ComponentQuery.query("monitor_temperature label[name=label_temperature_"+pin+"]")[0].setHtml(temp+"C° "+humidity+"%");
                            }
                        });
                    }
                },
                handler: function(){
                    Ext.Ajax.request({
                        method: 'GET',
                        url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=get_dht_values&pin="+pin,
                        success: function(response){
                            var risposta = Ext.JSON.decode(response.responseText);
                            var temp = risposta["temperature"],
                                humidity = risposta["humidity"];

                            Ext.ComponentQuery.query("monitor_temperature label[name=label_temperature_"+pin+"]")[0].setHtml(temp+"C° "+humidity+"%");
                        }
                    });
                }
            }
        ];

        this_view.setItems(items);
    }
});
