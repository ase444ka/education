document.addEventListener('click', function(event){
    let tar = event.target
    let list = tar.classList;
    if (!list.contains('pagination__item')) return
    if(list.contains('pagination__item_current')) return
    let offset = +tar.parentElement.dataset.offset
    let total = +tar.parentElement.dataset.total
    /* -----------обработка троеточия------------ */
    if(list.contains('pagination__item_hidden')) {
        let firstItem = tar.parentElement.firstElementChild;
        let firstVal = 0
        if (firstItem.classList.contains('pagination__item_previous')) {
            firstVal = +firstItem.nextElementSibling.textContent + 2
        } else {
            firstVal = +firstItem.textContent + 3
            firstItem.classList.add('pagination__item_previous')
            firstItem.classList.remove('pagination__item_current')
            firstItem.textContent = 'arrow_back'
        }
        tar.parentElement.children[1].textContent = firstVal
        tar.parentElement.children[2].textContent = firstVal + 1
        if (firstVal >= total - 4 ) {
            tar.textContent = firstVal + 2;
            tar.classList.remove('pagination__item_hidden')
            
        }
        let lastItem = tar.parentElement.children[5]
        let lastVal = offset + firstVal + 1;
        if(lastVal < total - 1) {
            tar.parentElement.children[5].classList.add('pagination__item_next')
            tar.parentElement.children[4].textContent = firstVal + offset + 1
        }        else {
            tar.parentElement.children[5].classList.remove('pagination__item_next')
            if (lastVal == total) {
                tar.parentElement.children[4].textContent = lastVal - 1;
                tar.parentElement.children[5].textContent = lastVal;    
            } else if (lastVal == total - 1) {
                tar.parentElement.children[4].textContent = lastVal;
                tar.parentElement.children[5].textContent = lastVal + 1; 
            }
        }

        return
    }
    /* ------------обработка кнопки next-------------- */
    if(list.contains('pagination__item_next')) {
        let current = tar.parentElement.querySelector('.pagination__item_current')
        let firstVal = +tar.previousElementSibling.textContent + 1
        current.classList.remove('pagination__item_current')
        tar.parentElement.children[0].textContent = "arrow_back"
        tar.parentElement.children[0].classList.add('pagination__item_previous')
        tar.parentElement.children[1].textContent = firstVal
        tar.parentElement.children[1].classList.add('pagination__item_current')
        tar.parentElement.children[2].textContent = firstVal + 1
        if (firstVal >= total - 4 ) {
            tar.parentElement.children[3].textContent = firstVal + 2;
            tar.parentElement.children[3].classList.remove('pagination__item_hidden') 
            tar.parentElement.children[4].textContent = firstVal + 3
            tar.parentElement.children[5].textContent = firstVal + 4
            tar.parentElement.children[5].classList.remove('pagination__item_next')
            return
        }
        let lastVal = firstVal + offset + 1
        if (lastVal == total - 1) {
            tar.parentElement.children[4].textContent = lastVal
            tar.textContent = total
            tar.classList.remove('pagination__item_next')
            return
        }
        if (lastVal == total) {
            tar.parentElement.children[4].textContent = lastVal - 1
            tar.textContent = total
            tar.classList.remove('pagination__item_next')
            return
        }
        tar.parentElement.children[4].textContent = firstVal + 1 + offset
        return
    }
    /* ---------------------обработка кнопки previous------------- */ 
    if (tar.classList.contains('pagination__item_previous')) {
        let current = tar.parentNode.querySelector('.pagination__item_current')
        current.classList.remove('pagination__item_current')
        let first = +tar.nextElementSibling.textContent - offset - 1
        if (first < 1) first = 1
        if (first == 1) {
            tar.classList.remove('pagination__item_previous')
            tar.textContent = first++
            tar.classList.add('pagination__item_current')
        }
        tar.parentElement.children[1].textContent = first
        tar.parentElement.children[2].textContent = first + 1
        tar.parentElement.children[3].classList.add('pagination__item_hidden')
        tar.parentElement.children[3].textContent = "..."
        tar.parentElement.children[4].textContent = first + offset + 1
        if (!tar.classList.contains('pagination__item_current')) {
            tar.parentElement.children[1].classList.add('pagination__item_current')
        }
        return
        
    }
    let current = tar.parentNode.querySelector('.pagination__item_current')
    current.classList.remove('pagination__item_current')
    list.add('pagination__item_current')

})