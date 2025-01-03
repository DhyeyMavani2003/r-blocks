import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

Blockly.Blocks['geom_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_boxplot(')
      .appendField('x = ')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'Y_VAR')
      .appendField(', outlier.shape = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['dot', '16'],
          ['none', 'NA'],
        ]),
        'OUTLIER'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a boxplot geometry layer to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_boxplot.html');
  },
};

Blockly.JavaScript['geom_boxplot'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var outlier = block.getFieldValue('OUTLIER');
  var code = `geom_boxplot(aes(x=${x_var}, y=${y_var}), outlier.shape=${outlier})\n`;
  return code;
};

Blockly.Blocks['Ggeom_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_boxplot(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', outlier.shape = ')
      .appendField(new Blockly.FieldTextInput('16'), 'OUTLIER')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a boxplot geometry layer to a ggplot with custom variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_boxplot.html');
  },
};

Blockly.JavaScript['Ggeom_boxplot'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var outlier = block.getFieldValue('OUTLIER');
  var code = `geom_boxplot(aes(x=${x_var}, y=${y_var}), outlier.shape=${outlier})\n`;
  return code;
};

export default {};
