var KBEngine = require("kbengine");
cc.Class({
    extends: cc.Component,

    properties: {
        ip : "127.0.0.1",
		port:"20013",
    },

    // use this for initialization
    onLoad: function () {
        var args = new KBEngine.KBEngineArgs();
		args.ip = this.ip;
		args.port = this.port;
		KBEngine.create(args);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
