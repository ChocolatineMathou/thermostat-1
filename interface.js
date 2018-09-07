$(document).ready(function() {

  var thermostat = new Thermostat();


  updateTemperature();

  $('#minus').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#plus').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powerSaveOn').click(function() {
    thermostat.powerSavingSwitch();
    $("#powerSave").text('Power save on')
    updateTemperature();
  });

  $('#powerSaveOff').click(function() {
    thermostat.powerSavingSwitch();
    $("#powerSave").text('Power save off')
    updateTemperature();
  });


  function updateTemperature() {
    $('#temp').text(thermostat.temperature);
    $('#temp').attr('class', thermostat.energyUsage());
  };

});
