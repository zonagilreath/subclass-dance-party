var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // const $image = $('<img src="https://picsum.photos/200">');
  // this.$node.append($image);
}

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}
