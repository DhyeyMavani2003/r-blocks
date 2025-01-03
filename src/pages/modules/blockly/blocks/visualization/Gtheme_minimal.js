import Blockly from 'blockly';

Blockly.Blocks['Gtheme_minimal'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('theme_minimal(')
      .appendField('base_size = ')
      .appendField(new Blockly.FieldTextInput('11'), 'BASE_SIZE')
      .appendField(', base_line_size = ')
      .appendField(new Blockly.FieldTextInput('0.5'), 'BASE_LINE_SIZE')
      .appendField(', base_rect_size = ')
      .appendField(new Blockly.FieldTextInput('0.5'), 'BASE_RECT_SIZE')
      .appendField(', base_family = ')
      .appendField(new Blockly.FieldTextInput(''), 'BASE_FAMILY')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Apply a minimal theme to a ggplot with custom parameters');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggtheme.html');
  },
};

Blockly.JavaScript['Gtheme_minimal'] = function (block) {
  var base_size = block.getFieldValue('BASE_SIZE');
  var base_line_size = block.getFieldValue('BASE_LINE_SIZE');
  var base_rect_size = block.getFieldValue('BASE_RECT_SIZE');
  var base_family = block.getFieldValue('BASE_FAMILY');

  var code = 'theme_minimal(';
  if (base_size) code += `base_size=${base_size}, `;
  if (base_line_size) code += `base_line_size=${base_line_size}, `;
  if (base_rect_size) code += `base_rect_size=${base_rect_size}, `;
  if (base_family) code += `base_family="${base_family}", `;
  code = code.replace(/,\s*$/, '') + ')\n';

  return code;
};

export default {};
