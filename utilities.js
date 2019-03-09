String.prototype.trimLeft = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

String.prototype.trimRight = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

Object.prototype.toArray = function() {
    return Array.from( this.keys( this ), k => this[ k ] );
}