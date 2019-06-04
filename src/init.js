$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.on('mouseover', function(event){
      // console.log('event');
      // event.target.remove();
      let left = $(event.target).css('left');
      left = parseInt(left.slice(0, left.length - 2));
      $(event.target).css({
        'left': `${left + (Math.random() * 300 - 150)}px`,
        'transition': 'left 900ms'
      });
      
      let top = $(event.target).css('top');
      top = parseInt(top.slice(0, top.length - 2));
      $(event.target).css({
        'top': `${top + (Math.random() * 300 - 150)}px`,
        'transition': 'top 900ms'
      });
    });
  });
  
  const lineEmUpBaby = function(){
    $('.dancer').css({'left': '1px'});
  }
  
  $('#line-up-button').on('click', function(){
    lineEmUpBaby();
  });
  

});

