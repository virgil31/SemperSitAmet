Ext.define('SemperSitAmet.view.type_pin.V_switch', {
    extend: 'Ext.Button',
    xtype: 'switch',

    config:{
        style: 'background: #3D5B99; color: white; border-radius: 0px;border: 0px solid transparent; border-top-color: transparent;background-image: url(resources/images/icon_led.png); background-repeat: no-repeat; background-position: center 40%; background-size: 80px 80px;'
    },

    initialize : function() {
        this.callParent();
        this_view = this;

        this_view.pressed = false;

        var pin = this_view.config.pin;
        var tempo = this_view.config.tempo;

        this_view.setText(this_view.config.etichetta)

        this_view.setLabelCls("x-button-label etichetta_bottone");

        this_view.setListeners({
            tap: function(btn){
                btn.pressed = !btn.pressed;

                if(btn.pressed)
                    btn.setStyle("box-shadow: inset 0px 0px 0px 10px #213152");
                else
                    btn.setStyle("box-shadow: inset 0px 0px 0px 5px #3D5B99");

                var value = btn.pressed ? 1 : 0;

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if (xhttp.readyState == 4 && xhttp.status == 200){
                        //Ext.Msg.alert("switched","switched");
                    }
                }
                xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+value, true);
                xhttp.send();

            }
        })

    }
});

/*
Ext.define('SemperSitAmet.view.type_pin.V_switch', {
    extend: 'Ext.field.Toggle',
    xtype: 'switch',

    initialize : function() {
        this.callParent();
        this_view = this;

        var pin = this_view.config.pin;
        this_view.setLabel(this_view.config.etichetta)

        this_view.setListeners({
            change: function(btn,checked){

                var value = checked ? 1 : 0;

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if (xhttp.readyState == 4 && xhttp.status == 200){
                        //Ext.Msg.alert("switched","switched");
                    }
                }
                xhttp.open("GET", "http://"+window.localStorage.getItem("arduino_ip")+"/?action=set&pin="+pin+"&value="+value, true);
                xhttp.send();
            }
        })
    }
});
*/
