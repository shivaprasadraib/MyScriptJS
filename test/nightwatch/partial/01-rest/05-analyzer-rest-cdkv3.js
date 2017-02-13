const inkPlayer = require('../../lib/inkPlayer');
const config = require('../../../lib/configuration').getConfiguration('ANALYZER', 'REST', 'V3');

module.exports[config.header + ' very simple test'] = function simple(browser) {
  config.inks
      .filter(ink => ink.name === 'fourSquare')
      .forEach(ink => inkPlayer.playInk(browser, config, ink.strokes, ink.labels, '#inkPaperSupervisor span', '#inkPaperSupervisor span'));
};