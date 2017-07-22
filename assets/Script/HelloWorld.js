var KBEngine = require("kbengine");
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        usernamebox : {
            default: null,
            type: cc.EditBox
        },
        passwordbox : {
            default: null,
            type: cc.EditBox
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Creator插件Demo!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        KBEngine.Event.register("onLoginSuccessfully", this, "onLoginSuccessfully");
    },
    
    onLoginClick:function() {
        KBEngine.Event.fire("login", this.usernamebox.string, this.passwordbox.string, "kbengine_cocos_creator_demo");
    },
    
    onLoginSuccessfully : function() {
	    console.log("登录成功");
	},

    // called every frame
    update: function (dt) {

    },
});
