var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
    id: "style-tab",
    label: "Style Tab",
    icon: {
        "16": "./legion_16.png",
        "32": "./legion_32.png",
        "64": "./legion_64.png"
    },
    onClick: function() {
        require("sdk/tabs").activeTab.attach({
            contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("md5.js"), self.data.url("legion.js")]
        });
    }
});
