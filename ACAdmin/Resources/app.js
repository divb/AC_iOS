
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var main = Ti.UI.createWindow({ // Hauptfenster // Einstieg
		backgroundColor: '#FFF',
	    navBarHidden : false, // iOS only
	    modal : false,
	    fullscreen: false,
	    tabBarHidden: true,
	    title: 'AC Admin'
	});
	main.open();
	      
	// Create our main window
	var self = Ti.UI.createWindow({
	    navBarHidden : false, // iOS only
	    modal : false,
	    fullscreen: false,
	    tabBarHidden: true,
	    title: 'AC Admin'
	});
    
 
	var nav = Titanium.UI.iPhone.createNavigationGroup({window: self});
	main.add(nav);
    
    var rightButton = Ti.UI.createButton({systemButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT});
    var leftButton = Ti.UI.createButton({systemButton: Ti.UI.iPhone.SystemButton.SEARCH});
   
    rightButton.addEventListener('click', function () {
    	var addMe = require('ui/key');
    	addMe(nav);
    });
    
    self.rightNavButton = rightButton;
    self.leftNavButton = leftButton;


/*
// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Private Key',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon: 'KS_nav_ui.png',
    title:'Key',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
*/