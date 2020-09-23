const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

	async run(msg, ...banner) {
		return msg.channel.send(await figlet(banner), { code: true });
	}

};
