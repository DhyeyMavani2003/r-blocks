import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

Blockly.Blocks['geom_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_point(')
      .appendField('x = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'Y_VAR')
      .appendField(', size = ')
      .appendField(new Blockly.FieldNumber(3, 0.1, 10), 'SIZE')
      .appendField(', shape = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['circle', '16'],
          ['triangle', '17'],
          ['square', '15'],
          ['diamond', '18'],
        ]),
        'SHAPE'
      )
      .appendField(', color = ')
      .appendField(new Blockly.FieldColour('#000000'), 'COLOR')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(1, 0, 1), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a scatter plot layer to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_point.html');
  },
};

Blockly.JavaScript['geom_point'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var size = block.getFieldValue('SIZE');
  var shape = block.getFieldValue('SHAPE');
  var color = block.getFieldValue('COLOR');
  var alpha = block.getFieldValue('ALPHA');
  var code = `geom_point(aes(x=${x_var}, y=${y_var}), size=${size}, shape=${shape}, color="${color}", alpha=${alpha})\n`;
  return code;
};

Blockly.Blocks['Ggeom_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_point(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', size = ')
      .appendField(new Blockly.FieldTextInput('3'), 'SIZE')
      .appendField(', shape = ')
      .appendField(new Blockly.FieldTextInput('16'), 'SHAPE')
      .appendField(', color = ')
      .appendField(new Blockly.FieldTextInput('black'), 'COLOR')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldTextInput('1'), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a scatter plot layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_point.html');
  },
};

Blockly.JavaScript['Ggeom_point'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var size = block.getFieldValue('SIZE');
  var shape = block.getFieldValue('SHAPE');
  var color = block.getFieldValue('COLOR');
  var alpha = block.getFieldValue('ALPHA');
  var code = `geom_point(aes(x=${x_var}, y=${y_var}), size=${size}, shape=${shape}, color="${color}", alpha=${alpha})\n`;
  return code;
};

export default {};
