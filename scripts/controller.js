var controller = {
  
  init: function() {
    model.init();
    view.init(model.width, model.height);
  },

};

$(document).ready(function() {
  controller.init();
});