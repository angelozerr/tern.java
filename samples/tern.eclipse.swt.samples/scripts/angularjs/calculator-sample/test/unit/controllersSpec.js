describe('CaluculatorController', function(){
  var calc;

  beforeEach(function(){
    calc = new CalculatorController();
  });

  it('should initialize with zero', function(){
    expect(calc.display).toEqual('0.');
  });

  it('should process number keys', function(){
    calc.number(1);
    expect(calc.display).toEqual('1.');
    calc.number(2);
    expect(calc.display).toEqual('12.');
  });

  it('should process number keys after decimal', function(){
    calc.key('.');
    calc.number(0);
    calc.number(0);
    calc.number(0);
    expect(calc.display).toEqual('0.000');
    calc.number(1);
    calc.number(2);
    calc.number(3);
    expect(calc.display).toEqual('0.000123');
  });

});
