const Event = require('../../Structures/Event');
const MenuDocsEmbed = require('../../Structures/MenuDocsEmbed');
const { Util: { escapeMarkdown } } = require('discord.js');
const { diffWordsWithSpace } = require('diff');

module.exports = class extends Event {

	async run(old, message) {
		if (!message.guild || old.content === message.content || message.author.bot) return;

		const embed = new MenuDocsEmbed()
			.setColor('BLUE')
			.setAuthor(old.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Message Updated')
			.setDescription([
				`**❯ Message ID:** ${old.id}`,
				`**❯ Channel:** ${old.channel}`,
				`**❯ Author:** ${old.author.tag} (${old.author.id})`
			])
			.setURL(old.url)
			.splitFields(diffWordsWithSpace(escapeMarkdown(old.content), escapeMarkdown(message.content))
				.map(result => result.added ? `**${result.value}**` : result.removed ? `~~${result.value}~~` : result.value)
				.join(' '));

		const channel = message.guild.channels.cache.find(ch => ch.name === 'testing');
		if (channel) channel.send(embed);
	}

};
