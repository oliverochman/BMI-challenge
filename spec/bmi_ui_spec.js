describe('BMI_UI_metric - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#weight_met').val('90');
    $('#height_met').val('186');
    $('#calculate_metric').trigger('click');
  });
  it("displays BMI Value", function() {
    expect($('#display_value_metric').text()).toBe('Your BMI is 26.01');
  });

  it("displays BMI Message", function() {
    expect($('#display_message_metric').text()).toBe('and you are Overweight');
  });
});

describe('BMI_UI_imperial - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('.tabs-title:contains("Imperial")').click();
    $('#weight_imp').val('198.41');
    $('#height_imp').val('73.22');
    $('#calculate_imperial').trigger('click');
  });
  it("displays BMI Value", function() {
    expect($('#display_value_imperial').text()).toBe('Your BMI is 26.02');
  });

  it("displays BMI Message", function() {
    expect($('#display_message_imperial').text()).toBe('and you are Overweight');
  });
});
