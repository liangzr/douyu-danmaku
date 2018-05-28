const path = require('path');
const Command = require('common-bin');

class RoomCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.yargs.usage('Usage: dmk room <add/remove> [roomid]');
  }

  * run({ argv }) {
    console.log(this.argv);
  }

  get decsciption() {
    return 'Manage set of liked rooms';
  }
}
