Ext.define('SemperSitAmet.view.type_pin.V_switch', {
    extend: 'Ext.field.Toggle',
    xtype: 'switch',

    initialize : function() {
        this_view = this;
        this_view.callParent();

        var pin = this_view.pin;
        this_view.setLabel(this_view.etichetta)

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
