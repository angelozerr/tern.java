describe('calculator', function(){
  beforeEach(function(){
    browser().navigateTo('../../app/index.html');
  });

  it('should initialize with 0.', function(){
    expect(binding('display')).toEqual('0.');
  });

  it('should check number keys and decimal', function(){
    press(0);
    press(9);
    press(8);
    press(7);
    press(6);
    press(5);
    press(4);
    press(3);
    press(2);
    press(1);
    press(0);
    press('.');
    press(0);
    press(1);
    expect(binding('display')).toEqual('9876543210.01');
  });

  it('should clear display.', function(){
    press(1);
    press('C');
    expect(binding('display')).toEqual('0.');
  });

});

angular.scenario.dsl('press', function(){
  return function(key){
    return element(':button:contains('+key+')').click();
  };
});
