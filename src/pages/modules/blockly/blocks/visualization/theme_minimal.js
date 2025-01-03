import Blockly from 'blockly';

Blockly.Blocks['theme_minimal'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('theme_minimal(')
      .appendField('base_size = ')
      .appendField(new Blockly.FieldNumber(11, 6, 24), 'BASE_SIZE')
      .appendField(', base_line_size = ')
      .appendField(new Blockly.FieldNumber(0.5, 0.1, 2), 'BASE_LINE_SIZE')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Apply a minimal theme to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggtheme.html');
  },
};

Blockly.JavaScript['theme_minimal'] = function (block) {
  var base_size = block.getFieldValue('BASE_SIZE');
  var base_line_size = block.getFieldValue('BASE_LINE_SIZE');
  var code = `theme_minimal(base_size=${base_size}, base_line_size=${base_line_size})\n`;
  return code;
};

export default {};
