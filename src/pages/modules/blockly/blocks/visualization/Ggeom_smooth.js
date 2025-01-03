import Blockly from 'blockly';

Blockly.Blocks['Ggeom_smooth'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_smooth(')
      .appendField('x = ')
      .appendField(new Blockly.FieldTextInput(''), 'X_VAR')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput(''), 'Y_VAR')
      .appendField(', method = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['loess', 'loess'],
          ['lm', 'lm'],
          ['gam', 'gam'],
        ]),
        'METHOD'
      )
      .appendField(', se = ')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'SE')
      .appendField(', color = ')
      .appendField(new Blockly.FieldColour('#0000FF'), 'COLOR')
      .appendField(', size = ')
      .appendField(new Blockly.FieldNumber(1, 0.1, 5), 'SIZE')
      .appendField(', alpha = ')
      .appendField(new Blockly.FieldNumber(0.5, 0, 1), 'ALPHA')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a smoothed line with confidence interval to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_smooth.html');
  },
};

Blockly.JavaScript['Ggeom_smooth'] = function (block) {
  var x_var = block.getFieldValue('X_VAR');
  var y_var = block.getFieldValue('Y_VAR');
  var method = block.getFieldValue('METHOD');
  var se = block.getFieldValue('SE') === 'TRUE';
  var color = block.getFieldValue('COLOR');
  var size = block.getFieldValue('SIZE');
  var alpha = block.getFieldValue('ALPHA');

  var code = `geom_smooth(aes(x=${x_var}, y=${y_var}), method="${method}", se=${se}, color="${color}", size=${size}, alpha=${alpha})\n`;
  return code;
};

export default {};
