// Tracking code wrapped

// This replaces previous scripts like ' async src="https://www.google-analytics.com/analytics.js" '
function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { // only required for IE <9
        script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function() {
            callback();
        };
    }

    script.src = url;

    document.getElementsByTagName("head")[0].appendChild(script);
}

// Contains unique settings for google analytics
function initializeGAVars() {
    window.ga = window.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-1462795-47', 'auto'); // Live
    // ga('create', 'UA-135562362-1', 'auto'); // Dev test tracking

    // Replace the following lines with the plugins you want to use.
    ga('require', 'urlChangeTracker');

    ga('require', 'eventTracker', {
        attributePrefix: 'data-'
    });

    // ga('require', 'outboundLinkTracker');
    // ga('require', 'urlChangeTracker');
    // ...

    ga('send', 'pageview');

    // For GDPR
    ga('set', 'anonymizeIp', true);
}

function startHotJar() {
    (function(h, o, t, j, a, r) {
        h.hj = h.hj || function() {
            (h.hj.q = h.hj.q || []).push(arguments)
        };
        h._hjSettings = { hjid: 1191612, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
}

// Main function to Enable GA. Loads in two GA script and runs our settings.
function startGA() {
    loadScript('https://www.google-analytics.com/analytics.js', function() {
        // console.log('Loaded script => https://www.google-analytics.com/analytics.js')
        initializeGAVars()
    });

    loadScript('/js/autotrack.js', function() {
        // console.log('Loaded script => autotrack.js')
    });
}

// Uncommenting below will enable
// startHotJar();
// startGA();

// GDPR Code.

function gdprBtnOnClick(e) {
    e.preventDefault();
    var checkbox_analytics_value = document.getElementById("analyticsCheckBox").checked;
    if (checkbox_analytics_value == true) {
        localStorage.setItem('user-analytics', 'true');
    }
    localStorage.setItem('user-tc', 'true');
    initialiseGDPRState();
    return false;
}

function initialiseGDPRState() {
    var userAnalytics = localStorage.getItem('user-analytics');
    var userTc = localStorage.getItem('user-tc');
    console.log(userTc);

    // Initial value
    if (userTc == 'false' || userTc == null || userTc == undefined) {
        var gdprContainer = document.getElementsByClassName('gdpr-container')[0];
        gdprContainer.style.display = 'block';
    }

    // Case where user agrees
    if (userAnalytics == 'true' && userTc == 'true') {
        var gdprContainer = document.getElementsByClassName('gdpr-container')[0];
        gdprContainer.style.display = 'none';
        startHotJar();
        // startGA();
    } else if (userTc == 'true') {
        var gdprContainer = document.getElementsByClassName('gdpr-container')[0];
        gdprContainer.style.display = 'none';
    }
}