var {Cc, Ci} = require('chrome');
var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
// ..
var document = mediator.getMostRecentWindow('navigator:browser').document;		
var navBar = document.getElementById('nav-bar'); 
// create a toolbarbutton element and append it