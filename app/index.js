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


document.getElementById('home-link').addEventListener('click', () => {
  jump('#home', {
    offset: -120
  })
});

document.getElementById('contact-link').addEventListener('click', () => {
  jump('#contact', {
    offset: -100
  })
});

document.getElementById('about-link').addEventListener('click', () => {
  jump('#about', {
    offset: -100
  })
});
