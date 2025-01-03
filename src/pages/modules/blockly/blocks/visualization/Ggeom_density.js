import Blockly from 'blockly';

Blockly.Blocks['Ggeom_density'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_density(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', adjust = ')
      .appendField(new Blockly.FieldNumber(1, 0.1, 2), 'ADJUST')
      .appendField(', kernel = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['gaussian', 'gaussian'],
          ['epanechnikov', 'epanechnikov'],
          ['rectangular', 'rectangular'],
          ['triangular', 'triangular'],
          ['biweight', 'biweight'],
        ]),
        'KERNEL'
      )
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1), 'ALPHA')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(', size = ')
      .appendField(new Blockly.FieldNumber(1, 0.1, 5), 'SIZE')
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
  var kernel = block.getFieldValue('KERNEL');
  var alpha = block.getFieldValue('ALPHA');
  var fill = block.getFieldValue('FILL');
  var size = block.getFieldValue('SIZE');

  var code = `geom_density(aes(x=${x_var}), adjust=${adjust}, kernel="${kernel}", alpha=${alpha}, fill="${fill}", size=${size})\n`;
  return code;
};

export default {};
