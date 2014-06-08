define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');

    // load local files
    var AppView = require('views/AppView');

    // instantiate renderables
    var appView = new AppView()

    // create the main context
    var mainContext = Engine.createContext();

    // add renderables
    mainContext.add( appView )
});
