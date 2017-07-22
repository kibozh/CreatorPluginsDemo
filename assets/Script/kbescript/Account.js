var KBEngine = require("kbengine");
KBEngine.Account = KBEngine.GameObject.extend(
{
	__init__ : function()
	{
		this._super();
		KBEngine.Event.fire("onLoginSuccessfully", KBEngine.app.entity_uuid, this.id, this);
	},
});