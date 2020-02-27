$(".like").click(function() {
    let checked = "like__button_checked"
    let likes = $(this).find('.like__button').first().text()
    $(this).find('.like__button').toggleClass(checked)
    $(this).find('.like__base').toggleClass('like__base_checked')
    if ($(this).find('.like__button').hasClass(checked)) $(this).find('.like__button').text(++likes)
    else $(this).find('.like__button').text(--likes)
    return
})