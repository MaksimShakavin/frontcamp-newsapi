document.addEventListener('DOMContentLoaded',() => {
   const $loadButton = document.querySelector('.load-button');
   $loadButton.addEventListener('click',() => {
       import(/* webpackChunkName: "index" */ './index.js').then(module => module.default());
       $loadButton.remove();
   })
});