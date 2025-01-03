import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

Blockly.Blocks['geom_density'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_density(')
      .appendField('x = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'X_VAR')
      .appendField(', adjust = ')
      .appendField(new Blockly.FieldNumber(1, 0.1, 2), 'ADJUST')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1), 'ALPHA')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a density plot layer to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_density.html');
  },
};

Blockly.JavaScript['geom_density'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var adjust = block.getFieldValue('ADJUST');
  var alpha = block.getFieldValue('ALPHA');
  var fill = block.getFieldValue('FILL');
  var code = `geom_density(aes(x=${x_var}), adjust=${adjust}, alpha=${alpha}, fill="${fill}")\n`;
  return code;
};

Blockly.Blocks['Ggeom_density'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_density(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', adjust = ')
      .appendField(new Blockly.FieldTextInput('1'), 'ADJUST')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldTextInput('0.5'), 'ALPHA')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldTextInput('black'), 'FILL')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a density plot layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_density.html');
  },
};

Blockly.JavaScript['Ggeom_density'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var adjust = block.getFieldValue('ADJUST');
  var alpha = block.getFieldValue('ALPHA');
  var fill = block.getFieldValue('FILL');
  var code = `geom_density(aes(x=${x_var}), adjust=${adjust}, alpha=${alpha}, fill="${fill}")\n`;
  return code;
};

export default {};
