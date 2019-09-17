import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

import 'slick-carousel';

$('.slides').slick(
    {
        dots: true,
        arrows: true,
        rows: 2,
        slidesPerRow: 3,

        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    rows: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 366,
                settings: {
                    centerMode: false
                }
            }

        ]
    }
);