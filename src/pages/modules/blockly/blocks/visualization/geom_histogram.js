import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

Blockly.Blocks['geom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(')
      .appendField('x = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'X_VAR')
      .appendField(', binwidth = ')
      .appendField(new Blockly.FieldNumber(30), 'BINWIDTH')
      .appendField(', stat = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['count', 'count'],
          ['density', 'density'],
        ]),
        'STAT'
      )
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1), 'ALPHA')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a histogram layer to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_histogram.html');
  },
};

Blockly.JavaScript['geom_histogram'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var binwidth = block.getFieldValue('BINWIDTH');
  var stat = block.getFieldValue('STAT');
  var alpha = block.getFieldValue('ALPHA');
  var fill = block.getFieldValue('FILL');
  var code = `geom_histogram(aes(x=${x_var}), binwidth=${binwidth}, stat="${stat}", alpha=${alpha}, fill="${fill}")\n`;
  return code;
};

Blockly.Blocks['Ggeom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', binwidth = ')
      .appendField(new Blockly.FieldTextInput('30'), 'BINWIDTH')
      .appendField(', stat = ')
      .appendField(new Blockly.FieldTextInput('count'), 'STAT')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldTextInput('0.5'), 'ALPHA')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldTextInput('black'), 'FILL')
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
  var stat = block.getFieldValue('STAT');
  var alpha = block.getFieldValue('ALPHA');
  var fill = block.getFieldValue('FILL');
  var code = `geom_histogram(aes(x=${x_var}), binwidth=${binwidth}, stat="${stat}", alpha=${alpha}, fill="${fill}")\n`;
  return code;
};

export default {};
