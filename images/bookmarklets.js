(function(){
    var jquery_version = '2.1.4';
    var site_url = 'http://127.0.0.1:8000';
    var static_url = site_url + 'static/';
    var min_width = 100;
    var min_height = 100;

    function bookmarklet(msg) {
        // here goes our bookmarklet code.
    };

    //Check if jquery is loaded
    if(typeof window.jQuery != 'undefined') {
        bookmarklet()
    } else {
        //check for conflicts
        var conflict = typeof window.$ != 'undefined';
        // check the script and point to Google API
        var script = document.createElement('script');
        script.setAttribute('src',
            'http://ajax.googleapis.com/ajax/libs/jquery' + jquery_version +'jquery.min.js');
        // add the script to the 'head' for processing
        document.getElementsByTagName('head')[0].appendChild(script);
        //create way to wait until script loads
        var attempts = 15;
        (function() {
            //check again if jquery is undefined
            if (typeof window.jquery == 'undefined') {
                if (--attempts > 0) {
                    // calls himself in a few ms
                    window.setTimeout(arguments.callee, 250)
                } else {
                    // too many attempts to load, send error
                    alert('An error ocurred while loading jQuery.')
                }
            } else {
                bookmarklet()
            }
        }) ();
    }
}) ()
