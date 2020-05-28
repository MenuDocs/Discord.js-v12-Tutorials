const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	async run(message) {
		message.channel.send(`My uptime is \`${ms(this.client.uptime, { long: true })}\``);
	}

};
