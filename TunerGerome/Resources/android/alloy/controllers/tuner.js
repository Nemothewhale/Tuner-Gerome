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
    this.__controllerPath = "tuner";
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
    $.__views.tuner = Ti.UI.createWindow({
        id: "tuner"
    });
    $.__views.tuner && $.addTopLevelView($.__views.tuner);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.__alloyId2 && $.addTopLevelView($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var recording = Ti.Media.createAudioRecorder();
    var startStopButton = Titanium.UI.createButton({
        title: "Start/Stop",
        top: "50dp",
        width: "200dp",
        height: "40dp"
    });
    startStopButton.addEventListener("click", function() {
        recording.start();
    });
    $.tuner.add(startStopButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;