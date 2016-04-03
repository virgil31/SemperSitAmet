Ext.define('SemperSitAmet.view.type_pin.V_timed_button', {
    extend: 'Ext.Button',
    xtype: 'timed_button',

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        this_view.setText(this_view.config.etichetta)

        this_view.setListeners({
            tap: function(btn){
                btn.disable();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if (xhttp.readyState == 4 && xhttp.status == 200){
                        //dopo XXXX millisecondi spengo
                        setTimeout(function(){
                            xhttp.onreadystatechange = function(){
                                if (xhttp.readyState == 4 && xhttp.status == 200){
                                    //Ext.Msg.alert("switched","switched");
                                    btn.enable();
                                }
                            }
                            xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+0, true);
                            xhttp.send();
                        }, this_view.tempo);
                    }
                }
                xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+1, true);
                xhttp.send();
            }
        })

    }
});
