module.exports = function (source) {
    const json = JSON.parse(source);
    for(let prop in json){
        if(json.hasOwnProperty(prop) && isNumeric(prop)) {
            delete json[prop];
        }
    }
    return `module.exports = ${JSON.stringify(json)}`;
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}