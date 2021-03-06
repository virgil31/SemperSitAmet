
Ext.define('SemperSitAmet.view.type_pin.V_pression_button', {
    extend: 'Ext.Button',
    xtype: 'pression_button',

    /*config: {
        style: 'background: #008A00; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url(resources/images/icon_led.png); background-repeat: no-repeat; background-position: center 40%; background-size: 80px 80px;'
    },*/

    initialize : function() {
        this.callParent();
        this_view = this;

        this_view.element.on({
            scope    : this,
            touchstart : 'onTouchstart'
        });

        var pin = this_view.config.pin;
        var icona = this_view.config.icona;

        this_view.setText(this_view.config.etichetta);

        this_view.setStyle("background: #008A00; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url("+icona+"); background-repeat: no-repeat; background-position: center 40%; background-size: 80px 80px;");

        this_view.setLabelCls("x-button-label etichetta_bottone");

        this_view.setListeners({
            touchstart: function(btn){
                btn.setStyle("box-shadow: inset 0px 0px 0px 5px #006100");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if (xhttp.readyState == 4 && xhttp.status == 200){
                        //Ext.Msg.alert("switched","switched");
                    }
                }
                xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+1, true);
                xhttp.send();
            },
            release: function(btn){
                btn.setStyle("box-shadow: inset 0px 0px 0px 5px #008A00");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if (xhttp.readyState == 4 && xhttp.status == 200){
                        //Ext.Msg.alert("switched","switched");
                    }
                }
                xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+0, true);
                xhttp.send();
            }
        })
    },

    onTouchstart : function(e) {
        this.fireEvent('touchstart', this, e);
    }

});
