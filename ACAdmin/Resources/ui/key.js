	function keystorage(nav) {
		var window = Ti.UI.createWindow({
			navBarHidden: false,
	        modal : false,
	        fullscreen: false,
	        tabBarHidden: true,
			title: 'Private Key',
			backgroundColor: '#FFFFFF'
		});
	    	
		nav.open(window);
		
		var view = Ti.UI.createView({layout: 'vertical'});
		
		// Label für das Input-Feld
		var label1 = Ti.UI.createLabel({
			color: '#000',
			font: { fontSize:18 },
			/*shadowColor: '#aaa',
			shadowOffset: {x:2, y:2},*/
			text: 'Private Key',
			top: 5,
			left: 10
	    });
	    view.add(label1);
	    
	    // Textfeld für den Private Key
	    var input = Ti.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#336699',
			top: 5, left: 10, right: 10
  	    });
  	    view.add(input);
  	    
  	    // Beschreibungstext
  	    var description = Ti.UI.createLabel({
  	    	color: '#ABABAB',
  	    	font: { fontSize: 12 },
  	    	text: 'Geben Sie hier Ihren Private Key ein. Sie finden ihn auf der Startseite in Ihrer Benutzerverwaltung.',
  	    	top: 5, left: 10, right: 10
  	    });
  	    view.add(description);
  	    
  	    // Button
  	    var button = Ti.UI.createButton({
  	    	systemButton: Ti.UI.iPhone.SystemButtonStyle.ADD,
  	    	title: 'Key speichern',
  	    	top: 10, right: 10
  	    });
  	    view.add(button);
  	    
  	    window.add(view);
	}
	module.exports = keystorage;