import Blockly from 'blockly';

Blockly.Blocks['Ggeom_bar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_bar(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', stat = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['count', 'count'],
          ['identity', 'identity'],
        ]),
        'STAT'
      )
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['stack', 'stack'],
          ['dodge', 'dodge'],
          ['fill', 'fill'],
        ]),
        'POSITION'
      )
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(1, 0, 1), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a bar geometry layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_bar.html');
  },
};

Blockly.JavaScript['Ggeom_bar'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var stat = block.getFieldValue('STAT');
  var position = block.getFieldValue('POSITION');
  var fill = block.getFieldValue('FILL');
  var alpha = block.getFieldValue('ALPHA');
  var code = `geom_bar(aes(x=${x_var}), stat="${stat}", position="${position}", fill="${fill}", alpha=${alpha})\n`;
  return code;
};

export default {};
