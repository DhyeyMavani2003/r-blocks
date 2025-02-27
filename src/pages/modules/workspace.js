/**
 * Workspace Component for RBlocks
 *
 * Main workspace implementation that allows users to create R statistical analysis
 * code using a block-based programming interface. Contains the Blockly workspace
 * configuration and block definitions for statistical operations.
 *
 * Dependencies:
 * - React
 * - Blockly
 * - react-blockly
 * - @mui/icons-material
 *
 * Related:
 * - See Toolbar component for navigation controls
 * - See ./blockly/blocks for block definitions
 */

import React, { useState, useEffect } from 'react';

//Blockly
import Blockly from 'blockly';
import { BlocklyWorkspace } from 'react-blockly';
import './blockly/blocks';

// Contexts

// Style
import './styles/base.css';

/**
 * Renders a Blockly visual programming workspace for creating R statistical analysis code.
 * Includes blocks for general functionality, numerical summaries, data visualization
 * and statistical inference.
 *
 * @returns {JSX.Element} A Blockly workspace component
 */
export default function Workspace({ initialWorkspaceXml, onWorkspaceInstance }) {
  const [workspace, setWorkspace] = useState(null);

  const workspaceConfig = {
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    // Add move optimization options
    moveOptions: {
      drag: true,
      scrollbars: true,
      wheel: true
    },
    // Reduce event firing frequency
    maxInstances: 1,
    maxBlocks: 1000,
    trashcan: true
  };

  // Add this effect to handle external XML updates
  // Handle initial XML loading
  useEffect(() => {
    if (workspace && initialWorkspaceXml) {
      try {
        // Clear existing workspace
        workspace.clear();
        
        // Load new XML
        const xml = Blockly.Xml.textToDom(initialWorkspaceXml);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (e) {
        console.error('Error loading workspace XML:', e);
      }
    }
  }, [workspace, initialWorkspaceXml]);

  // Only handle workspace instance changes
  const handleWorkspaceChange = (workspaceInstance) => {
    if (!workspace) {
      setWorkspace(workspaceInstance);
      if (onWorkspaceInstance) {
        onWorkspaceInstance(workspaceInstance);
      }
    }
  };

  /**
   * Updated RBlocks Workspace Component with Consistent Directory Structure
   *
   * The dropdown structure for both mosaic and ggplot2 blocks has been updated
   * to have the same categories and options for consistency.
   */

  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'General Functions',
        colour: '#FF6B5B',
        contents: [
          { kind: 'block', type: 'Glib' },
          { kind: 'block', type: 'lib' },
          { kind: 'block', type: 'Gnames' },
          { kind: 'block', type: 'names' },
          { kind: 'block', type: 'Gglimpse' },
          { kind: 'block', type: 'glimpse' },
          { kind: 'block', type: 'Ghead' },
          { kind: 'block', type: 'head' },
          { kind: 'block', type: 'Gtail' },
          { kind: 'block', type: 'tail' },
          { kind: 'block', type: 'Ghelp' },
          { kind: 'block', type: 'help' },
        ],
      },
      {
        kind: 'category',
        name: 'mosaic',
        colour: '#4A90E2',
        contents: [
          {
            kind: "category",
            name: "General Functionality",
            colour: "#FF6B5B",
            contents: [
              { kind: "block", type: "lib" },
              { kind: "block", type: "names" },
              { kind: "block", type: "glimpse" },
              { kind: "block", type: "head" },
              { kind: "block", type: "tail" },
              { kind: "block", type: "help" },
            ],
          },
          {
            kind: "category",
            name: "Numerical Summaries (using HELPrct)",
            colour: "#66BB6A",
            contents: [
              { kind: "block", type: "tallydata" },
              { kind: "block", type: "tallydataformat" },
              { kind: "block", type: "tallysexdata" },
              { kind: "block", type: "tallysexdata2" },
              { kind: "block", type: "tallysexformatdata" },
              { kind: "block", type: "favstatsdata" },
              { kind: "block", type: "favstatssubstancedata" },
              { kind: "block", type: "favstatssubstancedata2" },
              { kind: "block", type: "cor" },
            ],
          },
          {
            kind: "category",
            name: "Numerical Summaries",
            colour: "#66BB6A",
            contents: [
              { kind: "block", type: "Gtallydata" },
              { kind: "block", type: "Gtallydataformat" },
              { kind: "block", type: "Gtallysexdata" },
              { kind: "block", type: "Gtallysexdata2" },
              { kind: "block", type: "Gtallysexformatdata" },
              { kind: "block", type: "Gfavstatsdata" },
              { kind: "block", type: "Gfavstatssubstancedata" },
              { kind: "block", type: "Gfavstatssubstancedata2" },
              { kind: "block", type: "Gcor" },
            ],
          },
          {
            kind: "category",
            name: "Data Visualization (using HELPrct)",
            colour: "#43A047",
            contents: [
              { kind: "block", type: "gf_bar" },
              { kind: "block", type: "pie" },
              { kind: "block", type: "gf_counts" },
              { kind: "block", type: "gf_percents" },
              { kind: "block", type: "mosaicplot" },
              { kind: "block", type: "gf_boxplot" },
              { kind: "block", type: "gf_boxplot_substance" },
              { kind: "block", type: "gf_histogram" },
              { kind: "block", type: "gf_histogram_substance" },
              { kind: "block", type: "gf_dens" },
              { kind: "block", type: "gf_dens_color" },
              { kind: "block", type: "gf_point" },
            ],
          },
          {
            kind: "category",
            name: "Data Visualization",
            colour: "#43A047",
            contents: [
              { kind: "block", type: "Ggf_bar" },
              { kind: "block", type: "Gpie" },
              { kind: "block", type: "Ggf_counts" },
              { kind: "block", type: "Ggf_percents" },
              { kind: "block", type: "Gmosaicplot" },
              { kind: "block", type: "Ggf_boxplot" },
              { kind: "block", type: "Ggf_boxplot_substance" },
              { kind: "block", type: "Ggf_histogram" },
              { kind: "block", type: "Ggf_histogram_substance" },
              { kind: "block", type: "Ggf_dens" },
              { kind: "block", type: "Ggf_dens_color" },
              { kind: "block", type: "Ggf_point" },
            ],
          },
          {
            kind: "category",
            name: "Statistical Inference (using HELPrct)",
            colour: "#039be5",
            contents: [
              { kind: "block", type: "proptest" },
              { kind: "block", type: "proptest2" },
              { kind: "block", type: "ttest" },
              { kind: "block", type: "ttest2" },
              { kind: "block", type: "xchisqtest" },
              { kind: "block", type: "anova" },
              { kind: "block", type: "slrsummary" },
            ],
          },
          {
            kind: "category",
            name: "Statistical Inference",
            colour: "#039be5",
            contents: [
              { kind: "block", type: "Gproptest" },
              { kind: "block", type: "Gproptest2" },
              { kind: "block", type: "Gttest" },
              { kind: "block", type: "Gttest2" },
              { kind: "block", type: "Gxchisqtest" },
              { kind: "block", type: "Ganova" },
              { kind: "block", type: "Gslrsummary" },
            ],
          }
        ],
      },
      {
        kind: 'category',
        name: 'ggplot2',
        colour: '#2E7D32',
        contents: [
          {
            kind: 'category',
            name: 'Numerical Summaries',
            colour: '#66BB6A',
            contents: [
              { kind: 'block', type: 'Gtallydata' },
              { kind: 'block', type: 'tallydata' },
            ],
          },
          {
            kind: 'category',
            name: 'Visualizations',
            colour: '#43A047',
            contents: [
              { kind: 'block', type: 'Ggf_bar' },
              { kind: 'block', type: 'gf_bar' },
              { kind: 'block', type: 'Ggf_counts' },
              { kind: 'block', type: 'gf_counts' },
              { kind: 'block', type: 'Ggf_boxplot' },
              { kind: 'block', type: 'gf_boxplot' },
              { kind: 'block', type: 'Ggf_histogram' },
              { kind: 'block', type: 'gf_histogram' },
              { kind: 'block', type: 'Ggf_dens' },
              { kind: 'block', type: 'gf_dens' },
              { kind: 'block', type: 'Ggf_point' },
              { kind: 'block', type: 'gf_point' },
              { kind: 'block', type: 'Gtheme_minimal' },
              { kind: 'block', type: 'theme_minimal' },
              { kind: 'block', type: 'Glabs' },
              { kind: 'block', type: 'labs' },
              { kind: 'block', type: 'Gpie' },
              { kind: 'block', type: 'pie' },
            ],
          },
        ],
      },
      {
        kind: 'category',
        name: 'Randomization',
        colour: '#FF6B5B',
        contents: [
          { kind: 'block', type: 'bootstrap_ci_prop' },  // Add this line
          { kind: 'block', type: 'bootstrap_test_prop' }, // Add this line
          { kind: 'block', type: 'bootstrap' },  // Your existing block
        ],
      }
    ],
  };

  /**
   * Renders the Blockly workspace component
   * @returns {JSX.Element} BlocklyWorkspace component with configured toolbox and handlers
   */

  return (
    <BlocklyWorkspace
      className="blockly" 
      toolboxConfiguration={toolboxCategories}
      initialXml={initialWorkspaceXml}
      workspaceConfiguration={workspaceConfig}
      onWorkspaceChange={handleWorkspaceChange}
    />
  );
}
