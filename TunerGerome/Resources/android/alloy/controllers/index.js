function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var button1 = Ti.UI.createButton({
        title: "Tuner",
        width: "200",
        height: "40",
        top: 20
    });
    var button2 = Ti.UI.createButton({
        title: "Recorder",
        width: "200",
        height: "40",
        top: 70
    });
    var button3 = Ti.UI.createButton({
        title: "Frequency Player",
        width: "200",
        height: "40",
        top: 150
    });
    button1.addEventListener("click", function() {
        alert("module1");
        Alloy.createController("tuner").getView().open();
    });
    button2.addEventListener("click", function() {
        alert("module2");
        Alloy.createController("recorder").getView().open();
    });
    button3.addEventListener("click", function() {
        alert("module3");
        Alloy.createController("noteplayer").getView().open();
    });
    $.index.add(button1);
    $.index.add(button2);
    $.index.add(button3);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;