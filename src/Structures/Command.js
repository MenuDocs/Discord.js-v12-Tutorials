const { Permissions } = require('discord.js');

module.exports = class Command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.description = options.description || 'No description provided.';
		this.category = options.category || 'General';
		this.usage = `${this.client.prefix}${this.name} ${options.usage || ''}`.trim();
		this.userPerms = new Permissions(options.userPerms).freeze();
		this.botPerms = new Permissions(options.botPerms).freeze();
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		throw new Error(`Command ${this.name} doesn't provide a run method!`);
	}

};
