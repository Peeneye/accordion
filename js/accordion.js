(function ($) {
    var key = "exp";
    $('.accord-head').each(function () {
        var head = $(this);
        var item = head.parent();
        var headHeight = head.height();
        item.height(headHeight)
            .data(key, 0)
            .on('transitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
                if (item.data(key)) { item.height("auto"); }
            });
        head.click(function () {
            var currHeight = item.height(), state = item.data(key), autoHeight = item.height("auto").height();
            item.siblings().each(function () {
                var ele = $(this);
                if (ele.data(key)) {
                    ele.height(ele.height()).height(headHeight).data(key, 0);
                }
            });
            item.height(currHeight).height(state ? headHeight : autoHeight).data(key, state ? 0 : 1);
            return false;
        }).on('selectstart', false);
    });
})(jQuery);