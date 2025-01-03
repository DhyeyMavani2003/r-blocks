import Blockly from 'blockly';

Blockly.Blocks['Ggeom_boxplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_boxplot(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', fill = ')
      .appendField(new Blockly.FieldColour('#000000'), 'FILL')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(1, 0, 1), 'ALPHA')
      .appendField(', outlier.shape = ')
      .appendField(new Blockly.FieldNumber(16, 0, 25), 'OUTLIER_SHAPE')
      .appendField(', width = ')
      .appendField(new Blockly.FieldNumber(0.75, 0, 1), 'WIDTH')
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['dodge', 'dodge'],
          ['stack', 'stack'],
        ]),
        'POSITION'
      )
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
  var fill = block.getFieldValue('FILL');
  var alpha = block.getFieldValue('ALPHA');
  var outlier_shape = block.getFieldValue('OUTLIER_SHAPE');
  var width = block.getFieldValue('WIDTH');
  var position = block.getFieldValue('POSITION');

  var code = `geom_boxplot(aes(x=${x_var}, y=${y_var}), fill="${fill}", alpha=${alpha}, outlier.shape=${outlier_shape}, width=${width}, position="${position}")\n`;
  return code;
};

export default {};
