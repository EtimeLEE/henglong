(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        designSize = 640;
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (clientWidth > designSize) clientWidth = designSize;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / designSize) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener("orientationchange", recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);