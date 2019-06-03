var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition();
}

Dancer.prototype.step = function(){
  setTimeout(this.step, this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
}
