/* eslint-disable no-console */

// import config from '../resources/config';
// import data from '../resources/data.xml';

// import people from './people';
// import $ from 'jquery';
import '../css/style.sass';
// import '../css/style.pcss';
// import icon from '../assets/images/logo.svg';
import _ from 'lodash';

import 'font-awesome/css/font-awesome.css';
import printMe from './print';
import {cube} from './math';

// $('.header').append(`<img src="${icon}"/>`)
// for (const person of people) {
//     $('body').append(`<div class="box"><h1>${person.name}</h1></div>`);
// }

// console.log(config);
// console.log(data);

const button = document.createElement('button');
button.innerHTML = 'Click me2';
button.onclick = printMe;
document.body.appendChild(button);

var div = document.createElement('div');
div.innerHTML = `5 cube is ${cube(5)}`;
document.body.appendChild(div);
