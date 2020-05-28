import './room-details.scss';
import {endDigit} from 'Common/common'

$(document).ready( () => {
    let feedsQuantity = document.querySelectorAll('.room-details__feed').length;
    let feeds =           (!feedsQuantity)       ? "пока нет отзывов" :
                endDigit(feedsQuantity, 1)       ? `${feedsQuantity} отзыв`  :
                endDigit(feedsQuantity, 2, 3, 4) ? `${feedsQuantity} отзыва` :
                `${feedsQuantity} отзывов`;

$('.room-details__feedback__quantity').text(feeds);
return;
});