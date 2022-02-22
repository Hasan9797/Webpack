'use strict'

function myModule() {
    this.hello = function(){
        console.log('Hello world');
    };

    this.goodbye = function (){
        console.log('bye!');
    };
}

module.exports = myModule;