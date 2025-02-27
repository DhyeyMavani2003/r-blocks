// src/pages/modules/blockly/blocks/inference/bootstrap.js

import Blockly from 'blockly';

// Bootstrap CI for One Proportion Block
Blockly.Blocks['bootstrap_ci_prop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("set.seed(")
        .appendField(new Blockly.FieldNumber(123, 1), "SEED")
        .appendField(")");
      this.appendDummyInput()
        .appendField("prop_boot <- do(")
        .appendField(new Blockly.FieldNumber(5000, 1), "ITERATIONS")
        .appendField(") * prop(~");
      this.appendDummyInput()
        .appendField("    ")  // Indentation
        .appendField(new Blockly.FieldDropdown([
          ['sex', 'sex'],
          ['homeless', 'homeless'],
          ['substance', 'substance']
        ]), "VARIABLE")
        .appendField(", data = resample(")
        .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), "DATASET")
        .appendField("),");
      this.appendDummyInput()
        .appendField("    success = ")
        .appendField(new Blockly.FieldTextInput('"yes"'), "SUCCESS")
        .appendField(")");
      this.appendDummyInput()
        .appendField("confint(prop_boot, level = ")
        .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), "CONFIDENCE")
        .appendField(", method = \"quantile\")");
      
      this.setInputsInline(false);  // Changed to false to maintain line structure
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#039be5');
      this.setTooltip('Bootstrap confidence interval for one proportion');
    }
  };
  
  // Bootstrap Test for One Proportion Block
  Blockly.Blocks['bootstrap_test_prop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("set.seed(")
        .appendField(new Blockly.FieldNumber(123, 1), "SEED")
        .appendField(")");
      this.appendDummyInput()
        .appendField("sim_null <- do(")
        .appendField(new Blockly.FieldNumber(5000, 1), "ITERATIONS")
        .appendField(") * rflip(");
      this.appendDummyInput()
        .appendField("    n = ")
        .appendField(new Blockly.FieldNumber(100, 1), "SAMPLE_SIZE")
        .appendField(", prob = ")
        .appendField(new Blockly.FieldNumber(0.5, 0, 1, 0.01), "NULL_VALUE")
        .appendField(")");
      this.appendDummyInput()
        .appendField("prop(~")
        .appendField(new Blockly.FieldDropdown([
          ['prop <= HATP', 'prop <= HATP'],
          ['prop >= HATP', 'prop >= HATP'],
          ['abs(prop-NULL_VALUE) >= abs(HATP-NULL_VALUE)', 'abs(prop-NULL_VALUE) >= abs(HATP-NULL_VALUE)']
        ]), "TEST_TYPE")
        .appendField(", data = sim_null)");
      
      this.setInputsInline(false);  // Changed to false to maintain line structure
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#039be5');
      this.setTooltip('Bootstrap test for one proportion');
    }
  };

// Code generators
Blockly.JavaScript['bootstrap_ci_prop'] = function(block) {
  const seed = block.getFieldValue('SEED');
  const iterations = block.getFieldValue('ITERATIONS');
  const variable = block.getFieldValue('VARIABLE');
  const dataset = block.getFieldValue('DATASET');
  const success = block.getFieldValue('SUCCESS');
  const confidence = block.getFieldValue('CONFIDENCE');
  
  return `set.seed(${seed})\n` +
         `prop_boot <- do(${iterations}) * prop(~${variable}, data = resample(${dataset}), success = ${success})\n` +
         `confint(prop_boot, level = ${confidence}, method = "quantile")\n`;
};

Blockly.JavaScript['bootstrap_test_prop'] = function(block) {
  const seed = block.getFieldValue('SEED');
  const iterations = block.getFieldValue('ITERATIONS');
  const sampleSize = block.getFieldValue('SAMPLE_SIZE');
  const nullValue = block.getFieldValue('NULL_VALUE');
  const testType = block.getFieldValue('TEST_TYPE');
  
  return `set.seed(${seed})\n` +
         `sim_null <- do(${iterations}) * rflip(n = ${sampleSize}, prob = ${nullValue})\n` +
         `prop(~(${testType}), data = sim_null)\n`;
};

export default {};