# Function: buildTooltipForDropdown()

> **buildTooltipForDropdown**(`dropdownName`, `lookupTable`): `Function`

Builds an extension function that will map a dropdown value to a tooltip
string.

This method includes multiple checks to ensure tooltips, dropdown options,
and message references are aligned. This aims to catch errors as early as
possible, without requiring developers to manually test tooltips under each
option. After the page is loaded, each tooltip text string will be checked
for matching message keys in the internationalized string table. Deferring
this until the page is loaded decouples loading dependencies. Later, upon
loading the first block of any given type, the extension will validate every
dropdown option has a matching tooltip in the lookupTable. Errors are
reported as warnings in the console, and are never fatal.

## Parameters

### dropdownName

`string`

The name of the field whose value is the key
to the lookup table.

### lookupTable

The table of field values to
tooltip text.

## Returns

`Function`

The extension function.

## Alias

Blockly.Extensions.buildTooltipForDropdown

## Defined in

node_modules/blockly/blockly.d.ts:10488
