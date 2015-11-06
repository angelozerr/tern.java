define(function() {
  return {
    capitalize: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    garble: function(word) {
      return word.replace(/[auiyoe]/g, function() {
        return "auiyoe".charAt(Math.floor(Math.random() * 6));
      });
    }
  };
});