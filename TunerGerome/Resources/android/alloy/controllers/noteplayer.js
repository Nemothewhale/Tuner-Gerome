function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "noteplayer";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.noteplayer = Ti.UI.createWindow({
        id: "noteplayer"
    });
    $.__views.noteplayer && $.addTopLevelView($.__views.noteplayer);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.__alloyId0 && $.addTopLevelView($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var sound = Titanium.Media.createSound({
        url: "sound.wav"
    });
    var btn1 = Titanium.UI.createButton({
        title: "E",
        top: 10,
        width: 100,
        height: 50
    });
    var btn2 = Titanium.UI.createButton({
        title: "A",
        top: 60,
        width: 100,
        height: 50
    });
    var btn3 = Titanium.UI.createButton({
        title: "D",
        top: 110,
        width: 100,
        height: 50
    });
    var btn4 = Titanium.UI.createButton({
        title: "B",
        top: 160,
        width: 100,
        height: 50
    });
    var btn5 = Titanium.UI.createButton({
        title: "G",
        top: 210,
        width: 100,
        height: 50
    });
    var btn6 = Titanium.UI.createButton({
        title: "E",
        top: 260,
        width: 100,
        height: 50
    });
    $.noteplayer.add(btn1);
    $.noteplayer.add(btn2);
    $.noteplayer.add(btn3);
    $.noteplayer.add(btn4);
    $.noteplayer.add(btn5);
    $.noteplayer.add(btn6);
    btn1.addEventListener("click", function() {
        alert("sample message");
        sound.play();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;