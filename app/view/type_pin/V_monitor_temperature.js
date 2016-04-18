Ext.define('SemperSitAmet.view.type_pin.V_monitor_temperature', {
    extend: 'Ext.Button',
    xtype: 'monitor_temperature',

    config:{
        style: 'background: #8F0100; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url(resources/images/icon_temperature.png); background-repeat: no-repeat; background-position: center 25%; background-size: 60px 60px;'
    },

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        var etichetta = this_view.config.etichetta;

        this_view.name = "monitor_temperature_"+pin;

        this_view.setText(etichetta+"<br>- C° - %");

        this_view.setLabelCls("x-button-label etichetta_temperatura");

        this_view.setHandler(function(){
            Ext.Ajax.request({
                method: 'GET',
                url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=get_dht_values&pin="+pin,
                success: function(response){
                    var risposta = Ext.JSON.decode(response.responseText);
                    var temp = risposta["temperature"],
                        humidity = risposta["humidity"];

                    Ext.ComponentQuery.query("monitor_temperature[name=monitor_temperature_"+pin+"]")[0].setText(etichetta+"<br>"+temp+"C° "+humidity+"%");
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

                        Ext.ComponentQuery.query("monitor_temperature[name=monitor_temperature_"+pin+"]")[0].setText(etichetta+"<br>"+temp+"C° "+humidity+"%");
                    }
                });
            }
        });

    }
});
