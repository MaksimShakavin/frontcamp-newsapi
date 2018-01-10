export const $create = (html) => {
    const $element = document.createElement('div');
    $element.innerHTML = html;
    return $element.firstChild;
};

export const $qs = (selector) => {
    return document.querySelector(selector);
};

export const $delegate = (root,selector,type,callback) => {
    root.addEventListener(type,(event) => {
        if(event.target.matches(selector)){
            callback(event);
        }
    })
};