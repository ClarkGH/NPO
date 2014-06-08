define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');

    // load local files
    var AppView = require('AppView');

    // instantiate renderables
    var appView = new AppView()

    // create the main context
    var mainContext = Engine.createContext();


    // create renderables
    var surface = new Surface({
        size: [ 100, 100 ],
        content: 'hi mom',
        properties: {
            color: 'white',
            backgroundColor: 'black'
        }
    })

    // add renderables
    mainContext.add( surface )
});
