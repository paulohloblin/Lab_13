/*import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));*/

import {MDCList} from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCTextFieldIcon} from '@material/textfield/icon';
const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));