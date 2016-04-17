Ext.define('SemperSitAmet.view.type_pin.V_monitor_temperature', {
    extend: 'Ext.Button',
    xtype: 'monitor_temperature',

    config:{
        style: 'background: #8F0100; color: white; border-radius: 0px;border: 1px solid transparent; border-top-color: transparent;'
    },

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        var etichetta = this_view.config.etichetta;

        this_view.name = "monitor_temperature_"+pin;

        this_view.setText("Temp: "+etichetta);

        this_view.setHandler(function(){
            Ext.Ajax.request({
                method: 'GET',
                url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=get_dht_values&pin="+pin,
                success: function(response){
                    var risposta = Ext.JSON.decode(response.responseText);
                    var temp = risposta["temperature"],
                        humidity = risposta["humidity"];

                    Ext.ComponentQuery.query("monitor_temperature[name=monitor_temperature_"+pin+"]")[0].setText("Temp: "+etichetta+"<br>"+temp+"C° "+humidity+"%");
                }
            });
        });

        this_view.setListeners({
            painted: function(){
                Ext.Ajax.request({
                    method: 'GET',
                    url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=get_dht_values&pin="+pin,
                    success: function(response){
                        var risposta = Ext.JSON.decode(response.responseText);
                        var temp = risposta["temperature"],
                            humidity = risposta["humidity"];

                        Ext.ComponentQuery.query("monitor_temperature[name=monitor_temperature_"+pin+"]")[0].setText("Temp: "+etichetta+"<br>"+temp+"C° "+humidity+"%");
                    }
                });
            }
        });

    }
});

/*
Ext.define('SemperSitAmet.view.type_pin.V_monitor_temperature', {
    extend: 'Ext.Panel',
    xtype: 'monitor_temperature',

    config:{
        style: 'background: #8F0100',
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        }
    },

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        var etichetta = this_view.config.etichetta;

        var items = [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: "Temp: "+etichetta,
                style: 'background: #8F0100; border-bottom-color: transparent;'
            },
            {
                xtype: 'label',
                name: 'label_temperature_'+pin,
                style: 'color: white;'
            },
            {
                xtype: 'button',
                //text: 'Aggiorna',
                iconCls: 'refresh',
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
*/
