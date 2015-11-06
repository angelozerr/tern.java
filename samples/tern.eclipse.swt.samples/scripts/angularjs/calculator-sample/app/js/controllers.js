function CalculatorController(){
  this.clear();
}

CalculatorController.prototype = {
  clear: function(){
    this.value = 0;
    this.display = "0.";
    this.decimalPosition = null;
  },

  updateDisplay: function(){
    this.display = this.value.toString();
    if (!this.display.match(/\./)) {
      this.display += '.';
    }
    while(this.display.match(/\.(.*)/)[1].length + 1 < this.decimalPosition) {
      this.display += '0';
    }
  },

  key: function(key) {
    switch(key){
      case '.':
        this.decimalPosition = this.decimalPosition || 1;
        break;
    }
  },

  number: function(number){
    number = parseInt(number, 10);
    if (this.decimalPosition) {
      this.value = parseFloat(this.display + number);
      this.decimalPosition++;
    } else {
      this.value = this.value * 10 + number;
    }
    this.updateDisplay();
  }

};
