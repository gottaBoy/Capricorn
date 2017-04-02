function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');
/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    console.info(false);
    if (o.hasClass('desktop')) {
        console.info(true);
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);