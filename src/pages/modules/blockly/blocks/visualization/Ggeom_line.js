import Blockly from 'blockly';

Blockly.Blocks['Ggeom_line'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_line(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', linetype = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['solid', 'solid'],
          ['dashed', 'dashed'],
          ['dotted', 'dotted'],
          ['dotdash', 'dotdash'],
        ]),
        'LINETYPE'
      )
      .appendField(', size = ')
      .appendField(new Blockly.FieldNumber(1, 0.1, 5), 'SIZE')
      .appendField(', color = ')
      .appendField(new Blockly.FieldColour('#000000'), 'COLOR')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(1, 0, 1), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a line geometry layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_line.html');
  },
};

Blockly.JavaScript['Ggeom_line'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var linetype = block.getFieldValue('LINETYPE');
  var size = block.getFieldValue('SIZE');
  var color = block.getFieldValue('COLOR');
  var alpha = block.getFieldValue('ALPHA');

  var code = `geom_line(aes(x=${x_var}, y=${y_var}), linetype="${linetype}", size=${size}, color="${color}", alpha=${alpha})\n`;
  return code;
};

export default {};
