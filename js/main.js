$(document).ready(function() {
    $('#posts-list > li').each(function(index, element) {
        var height = $(element).find('.post-header').outerHeight(),
            childrenNotPostHeader = $(element).find('[class*="col-"]:not(".post-header")');

        childrenNotPostHeader.each(function(index, element) {
            $(element).css('line-height', height + 'px');
        });
    });

    $(window).on('resize', function() {
        $('#posts-list > li').each(function(index, element) {
            var height = $(element).find('.post-header').outerHeight(),
                childrenNotPostHeader = $(element).find('[class*="col-"]:not(".post-header")');

            childrenNotPostHeader.each(function(index, element) {
                $(element).css('line-height', height + 'px');
            });
        });
    });
});