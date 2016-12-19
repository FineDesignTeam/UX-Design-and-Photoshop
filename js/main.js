$(document).ready(function() {
    function verticallyCenterColumnElements(selector) {
        $(selector).each(function(index, element) {
            var height = $(element).find('.post-header').outerHeight(),
                childrenNotPostHeader = $(element).find('[class*="col-"]:not(".post-header")');

            childrenNotPostHeader.each(function(index, element) {
                $(element).css('line-height', height + 'px');
            });
        });
    }
    
    verticallyCenterColumnElements('#posts-list > li');
    verticallyCenterColumnElements('#comments-list li');

    $(window).on('resize', function() {
        verticallyCenterColumnElements('#posts-list > li');
        verticallyCenterColumnElements('#comments-list li');
    });
});