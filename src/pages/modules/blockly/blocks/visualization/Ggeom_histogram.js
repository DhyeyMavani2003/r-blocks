import Blockly from 'blockly';

Blockly.Blocks['Ggeom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', binwidth = ')
      .appendField(new Blockly.FieldNumber(30), 'BINWIDTH')
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['stack', 'stack'],
          ['dodge', 'dodge'],
          ['fill', 'fill'],
        ]),
        'POSITION'
      )
      .appendField(', stat = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['count', 'count'],
          ['density', 'density'],
        ]),
        'STAT'
      )
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a histogram layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_histogram.html');
  },
};

Blockly.JavaScript['Ggeom_histogram'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var binwidth = block.getFieldValue('BINWIDTH');
  var position = block.getFieldValue('POSITION');
  var stat = block.getFieldValue('STAT');
  var fill = block.getFieldValue('FILL');
  var alpha = block.getFieldValue('ALPHA');

  var code = `geom_histogram(aes(x=${x_var}), binwidth=${binwidth}, position="${position}", stat="${stat}", fill="${fill}", alpha=${alpha})\n`;
  return code;
};

export default {};
