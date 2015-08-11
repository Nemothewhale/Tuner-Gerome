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
    this.__controllerPath = "recorder";
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
    $.__views.recorder = Ti.UI.createWindow({
        id: "recorder"
    });
    $.__views.recorder && $.addTopLevelView($.__views.recorder);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.__alloyId1 && $.addTopLevelView($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var record = Ti.Media.createAudioRecorder();
    var button1 = Titanium.UI.createButton({
        title: "E",
        top: 10,
        width: 100,
        height: 50
    });
    var label = Titanium.UI.createLabel({
        text: "Label Demo",
        top: 20,
        width: 100,
        height: 50
    });
    button1.addEventListener("click", function() {
        record.start();
    });
    button1.addEventListener("click", function() {
        record.stop();
    });
    var i = 0;
    while (true) label.setText(i++);
    $.recorder.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;