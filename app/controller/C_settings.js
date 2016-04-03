Ext.define('SemperSitAmet.controller.C_settings', {
    extend: 'Ext.app.Controller',

    config: {


        views: [
            'settings.V_settings',
            'settings.V_profiles',
            'settings.V_tester',
            'settings.V_about',
            'settings.V_pins',
            'settings.V_config_pin'
        ],

        control:{

        }


    },

    getConfigAndPositionByPin: function(pin) {
        var config_pins = Ext.JSON.decode(window.localStorage.getItem("config_pins"));
        for (var i = 0; i < config_pins.length; i++) {
            if (config_pins[i].pin === pin)
                return {
                    config: config_pins[i],
                    position: i
                }
        }
        return null;
    }

    /////////////////////////////////////////

});
