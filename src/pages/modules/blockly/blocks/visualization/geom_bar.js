import Blockly from 'blockly';
import { categorical_vars } from '../../constants';

Blockly.Blocks['geom_bar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_bar(')
      .appendField('stat = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['count', 'count'],
          ['identity', 'identity'],
        ]),
        'STAT'
      )
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['stack', 'stack'],
          ['dodge', 'dodge'],
          ['fill', 'fill'],
        ]),
        'POSITION'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a bar geometry layer to a ggplot');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_bar.html');
  },
};

Blockly.JavaScript['geom_bar'] = function (block) {
  var stat = block.getFieldValue('STAT');
  var position = block.getFieldValue('POSITION');
  var code = `geom_bar(stat="${stat}", position="${position}")\n`;
  return code;
};

Blockly.Blocks['Ggeom_bar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_bar(')
      .appendField('stat = ')
      .appendField(new Blockly.FieldTextInput('count'), 'STAT')
      .appendField(', position = ')
      .appendField(new Blockly.FieldTextInput('stack'), 'POSITION')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Add a bar geometry layer to a ggplot with custom parameters');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_bar.html');
  },
};

Blockly.JavaScript['Ggeom_bar'] = function (block) {
  var stat = block.getFieldValue('STAT');
  var position = block.getFieldValue('POSITION');
  var code = `geom_bar(stat="${stat}", position="${position}")\n`;
  return code;
};

export default {};
