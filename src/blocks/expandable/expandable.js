$('.expandable i').click(function(){
    let txt = $(this).text();
    txt = (txt=='expand_more')? 'expand_less':'expand_more'
    $(this).parent().toggleClass('expandable_expanded');
    $(this).text(txt);
})