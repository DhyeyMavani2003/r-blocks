import Blockly from 'blockly';

Blockly.Blocks['labs'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('labs(')
      .appendField('title = ')
      .appendField(new Blockly.FieldTextInput('Plot Title'), 'TITLE')
      .appendField(', x = ')
      .appendField(new Blockly.FieldTextInput('X Label'), 'X_LAB')
      .appendField(', y = ')
      .appendField(new Blockly.FieldTextInput('Y Label'), 'Y_LAB')
      .appendField(', subtitle = ')
      .appendField(new Blockly.FieldTextInput(''), 'SUBTITLE')
      .appendField(', caption = ')
      .appendField(new Blockly.FieldTextInput(''), 'CAPTION')
      .appendField(', tag = ')
      .appendField(new Blockly.FieldTextInput(''), 'TAG')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add labels to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/labs.html');
  },
};

Blockly.JavaScript['labs'] = function (block) {
  var title = block.getFieldValue('TITLE');
  var x_lab = block.getFieldValue('X_LAB');
  var y_lab = block.getFieldValue('Y_LAB');
  var subtitle = block.getFieldValue('SUBTITLE');
  var caption = block.getFieldValue('CAPTION');
  var tag = block.getFieldValue('TAG');

  var code = 'labs(';
  if (title) code += `title="${title}", `;
  if (x_lab) code += `x="${x_lab}", `;
  if (y_lab) code += `y="${y_lab}", `;
  if (subtitle) code += `subtitle="${subtitle}", `;
  if (caption) code += `caption="${caption}", `;
  if (tag) code += `tag="${tag}", `;
  code = code.replace(/,\s*$/, '') + ')\n';

  return code;
};

export default {};
