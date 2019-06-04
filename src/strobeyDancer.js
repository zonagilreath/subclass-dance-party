var StrobeyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

StrobeyDancer.prototype = Object.create(Dancer.prototype);
StrobeyDancer.prototype.constructor = StrobeyDancer;

StrobeyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css({
    'border-color': getRandomColor(),
  });
};


const getRandomColor = function() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};