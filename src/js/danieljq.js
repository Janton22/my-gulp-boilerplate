$(window).scroll(function () {
    let scroll_posit = $(window).scrollTop() * .2;
    $('.maincontainer').css({
        'background-position-x': -scroll_posit + 'px',
    })
});

$('.hero-image-title')
    .mouseover(function () {
        $(this).css({
                'text-shadow': '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1), 0 0 40px #00ffff'
            })
            .mouseout(function () {
                $(this).css("text-shadow", "none")
            })
    });




let line = ".underline span";

$(".site-footer")
    .mouseover(function () {
        $(line).css("display", "block");

    })
    .mouseout(function () {
        $(line).css("display", "none");
    });

(function ($) {

    'use strict';

    $.fn.gallery = function (options) {

        return this.each(function () {
            let settings = $.extend({}, $.fn.gallery.defaults, options);
            let $gallery = $(this);
            let $images = $gallery.find(settings.tag);
            let loop;

            // Local functions
            let show = function ($image) {
                $images.removeClass('current').fadeOut(1200).promise().done(function () {
                    $image.addClass('current').fadeIn(1000);
                });
            };

            $images.hide().first().show().addClass('current');

            $gallery.find('a').on('click', function (event) {
                let id = this.href.replace(/^[^#]*(#.*)?$/i, '$1');
                if (!id) {
                    return true;
                }
                event.preventDefault();
                window.clearInterval(loop);
                loop = null;
                show($images.filter(id));
            });

            if (settings.loop) {
                let interval = settings.interval * 1200;
                loop = window.setInterval(function () {
                    let $next = $images.filter('.current').next(settings.tag);
                    if ($next.length === 0) {
                        $next = $images.first();
                    }
                    show($next);
                }, interval);
            }
        });

    };

    $.fn.gallery.defaults = {
        tag: 'figure',
        loop: true,
        interval: 5
    };

    $(function () {
        var $simple = $('[data-gallery="simple"]');
        if ($simple.length) {
            $simple.gallery($simple.data());
        }
    });

})(jQuery);