Ext.define('SemperSitAmet.view.type_pin.V_timed_button', {
    extend: 'Ext.Button',
    xtype: 'timed_button',

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        var tempo = this_view.config.tempo;

        this_view.setText(this_view.config.etichetta)

        this_view.setListeners({
            tap: function(btn){
                btn.disable();

                Ext.Ajax.request({
                    url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+1,
                    callback: function(){
                        setTimeout(function(){
                            Ext.Ajax.request({
                                url: "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+0,
                                callback: function(){btn.enable();}
                            });
                        }, tempo);
                    }
                });
            }
        })

    }
});
