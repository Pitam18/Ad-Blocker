chrome.webRequest.onBeforeRequest.addListener
(
    function(details) {return{cancel:true}},
    
    //this are the adds website urls which is blocked by our extension 

    { urls : ["*://*.zedo.com/*",
    "*://*.quantserve.com/*",
    "*://*.google-analytics.com/*",
    "*://*.adbrite.com/*",
    "*://*.googlesyndication.com/*"
    ]},
    ["blocking"]
)