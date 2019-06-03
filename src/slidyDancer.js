var slidyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.direction = 1;
}

slidyDancer.prototype = Object.create(Dancer.prototype);
slidyDancer.prototype.constructor = slidyDancer;

slidyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css( {
    'transition' : `transform ${this.timeBetweenSteps}ms`,
    'transform' :`translate(${getRandomScalar() * 90}px, ${getRandomScalar() * 90}px )`,
    'border-color' : 'blue',
    });
  
  // this.direction *= -1;
}

function getRandomScalar(){
  let rand = Math.random();
  if(rand > 0.5) return 1;
  else return -1;
}