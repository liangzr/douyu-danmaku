
const path = require('path');
const Command = require('common-bin');

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: dmk <command> [options]';

    // load sub command
    this.load(path.join(__dirname, 'command'));
  }
}

module.exports = MainCommand;
