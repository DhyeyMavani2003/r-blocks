import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

Blockly.Blocks['ggplot_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ggplot(')
      .appendField('data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'DATA')
      .appendField(', aes(')
      .appendField('x = ')
      .appendField(new Blockly.FieldDropdown([...quantitative_vars, ...categorical_vars]), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldDropdown([...quantitative_vars, ...categorical_vars]), 'Y_VAR')
      .appendField(', color = ')
      .appendField(new Blockly.FieldDropdown([['none', 'none'], ...categorical_vars]), 'COLOR_VAR')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Initialize a ggplot object with data and aesthetics');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggplot.html');
  },
};

Blockly.JavaScript['ggplot_init'] = function (block) {
  var data = block.getFieldValue('DATA');
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var color_var = block.getFieldValue('COLOR_VAR');

  var code = `ggplot(${data}, aes(x=${x_var}, y=${y_var}`;
  if (color_var !== 'none') {
    code += `, color=${color_var}`;
  }
  code += '))\n';
  return code;
};

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

  var code = `ggplot(${data}, aes(x=${x_var}, y=${y_var}`;
  if (color_var) {
    code += `, color=${color_var}`;
  }
  code += '))\n';
  return code;
};

export default {};
