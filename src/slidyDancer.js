var slidyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
}

slidyDancer.prototype = Object.create(Dancer.prototype);
slidyDancer.prototype.constructor = slidyDancer;

slidyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css( {
    'transition' : `transform ${this.timeBetweenSteps}ms`,
    'transform' :`translate(${getRandomScalar() * 90}px, ${getRandomScalar() * 90}px )`,
    'border': '0'
    });
  let $image = $('<img src="src/images/giphyDancer.gif">');
  $image.css({
    'height': '100px',
    'width': 'auto'
  })
  this.$node.html($image);
}

function getRandomScalar(){
  let rand = Math.random();
  if(rand > 0.5) return 1;
  else return -1;
}