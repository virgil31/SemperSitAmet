Ext.define('SemperSitAmet.view.type_pin.V_timed_button', {
    extend: 'Ext.Button',
    xtype: 'timed_button',

    /*config:{
        style: 'background: #009EDB; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url(resources/images/icon_led.png); background-repeat: no-repeat; background-position: center 40%; background-size: 80px 80px;'
    },*/

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        var tempo = this_view.config.tempo;
        var icona = this_view.config.icona;

        this_view.setText(this_view.config.etichetta)

        this_view.setStyle("background: #009EDB; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url("+icona+"); background-repeat: no-repeat; background-position: center 40%; background-size: 80px 80px;");

        this_view.setLabelCls("x-button-label etichetta_bottone");

        this_view.setListeners({
            tap: function(btn){
                btn.disable();

                btn.setStyle("box-shadow: inset 0px 0px 0px 5px #005879");

                Ext.Ajax.request({
                    url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+1,
                    timeout: 2000,
                    callback: function(){
                        setTimeout(function(){
                            Ext.Ajax.request({
                                url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+0,
                                callback: function(){
                                    btn.enable();
                                    btn.setStyle("box-shadow: inset 0px 0px 0px 5px #009EDB");
                                }
                            });
                        }, tempo);
                    }
                });
            }
        })

    }
});
