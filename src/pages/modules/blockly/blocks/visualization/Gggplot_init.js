import Blockly from 'blockly';

Blockly.Blocks['Gggplot_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ggplot(')
      .appendField('data = ')
      .appendField(new Blockly.FieldTextInput(''), 'DATA')
      .appendField(', aes(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', color = ')
      .appendField(new Blockly.FieldTextInput(''), 'COLOR_VAR')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldTextInput(''), 'FILL_VAR')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Initialize a ggplot object with custom data and aesthetics');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggplot.html');
  },
};

Blockly.JavaScript['Gggplot_init'] = function (block) {
  var data = block.getFieldValue('DATA');
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var color_var = block.getFieldValue('COLOR_VAR');
  var fill_var = block.getFieldValue('FILL_VAR');

  var code = `ggplot(${data}, aes(x=${x_var}, y=${y_var}`;
  if (color_var) {
    code += `, color=${color_var}`;
  }
  if (fill_var) {
    code += `, fill=${fill_var}`;
  }
  code += '))\n';
  return code;
};

export default {};
