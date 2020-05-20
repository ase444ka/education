import './rate.scss';
let click = false;
$('.rate__star').mouseenter(function(event) {
    if (!($(this).parent().hasClass("rate_ratable"))) return;
    $(this).addClass('rate__star_checked');
    $(this).prevAll().addClass('rate__star_checked');
    $(this).nextAll().removeClass('rate__star_checked');   
})
$('.rate_ratable').mouseleave(function() {
    if (!click) $(this).children().removeClass('rate__star_checked')
})
$('.rate_ratable').mousedown(function() {
    click = true;
    $(this).removeClass('rate_ratable');
})