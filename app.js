import Store from './services/Store.js'
import { loadData } from './services/Menu.js'
import Router from './services/Router.js'


window.app = {}
app.store = Store;
app.route = Router

window.addEventListener('DOMContentLoaded', () => {
    loadData();
    app.route.init();
})

// const $ = function(args){ return document.querySelector(args);}
// const $$ = function(args){ return document.querySelectorAll(args);}

// HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
// HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
// HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
// HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }