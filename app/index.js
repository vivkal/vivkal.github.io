/**
 * Application entry point
 */

import 'styles/index.scss';
import jump from 'jump.js'

/**
 *  innerHeight - viewport + scrollbar
 * scrollHeight - element height + padding
 * clientHeight - element height + padding + scrollbar
 * offsetHeight - element height + padding + border + scrollbar
 */


document.getElementById('home-link').addEventListener('click', function() {
  jump('#home', {
    offset: -120
  })
});

document.getElementById('contact-link').addEventListener('click', function() {
  jump('#contact', {
    offset: -100
  })
});

document.getElementById('about-link').addEventListener('click', function() {
  jump('#about', {
    offset: -100
  })
});
