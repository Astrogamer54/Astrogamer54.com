window.onload = function () {
    const isSmall = window.matchMedia('only screen and (max-width: 800px)').matches;
    const isVertical = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    const mobileAgent = typeof window.orientation !== 'undefined'
    const isMobile = isSmall || isVertical || mobileAgent;
    console.log(isMobile);
    if (isMobile) {
        var content = document.getElementById('content');
        content.remove();
        var content = document.getElementById('nav-menu');
        content.remove();
        var mobileMain = document.createElement("main");
        mobileMain.id = "mobile-main";
        mobileMain.innerHTML = "<div class='mobile-div glow-section' id='mobile-div'><a href='#'>Astrogamer54.com</a><h1>we ran into a problem :(</h1><h1>your screensize is too small for this website</h1></div>";
        document.body.appendChild(mobileMain);
        document.body.id = "nav-menu"; // scuffed work around
    }
    // WHY IS THIS NOT WORKING PLS HELP
    var prevScrollpos = window.pageYOffset;
    document.body.onscroll = function () {
        console.log("a");
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-menu").style.transform = translate('0%', '0%');
        } else {
            document.getElementById("nav-menu").style.top = translate('0%', '100%');
        }
        prevScrollpos = currentScrollPos;

    };
    //end of not working
    let effectcheck;
    document.getElementById('nav-menu').onmousemove = function clickEvent(e) {
        for (const nav of document.getElementsByClassName("glow-section")) {
            const rect = nav.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            nav.style.setProperty("--mouse-x", `${x}px`);
            nav.style.setProperty("--mouse-y", `${y}px`);
        };

    };
    document.getElementById('nav-menu').onmouseenter = function fade(e) {
        var max = 100;
        for (const nav of document.getElementsByClassName("glow-section")) {
            if (!effectcheck) {
                effectcheck = setInterval(repeatcheck, 1);
            }
            function repeatcheck() {
                if (max > 0) {
                    max = max - 1
                } else {
                    clearInterval(effectcheck);
                }
                document.documentElement.style.setProperty("--glow-percent", `${100 - max}%`);

            };
        };
    };
    document.getElementById('nav-menu').onmouseleave = function fade(e) {
        clearInterval(effectcheck);
        var max = 100;
        effectcheck = null;
    };
    document.addEventListener('contextmenu', event => event.preventDefault());
};
