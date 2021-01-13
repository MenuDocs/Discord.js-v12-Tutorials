const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const subreddits = [
	'cat',
	'cats',
	'catpics',
	'kittens'
];

module.exports = class extends Command {

	async run(message) {
		const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
			.then(response => response.json())
			.then(body => body.data.filter(post => post.mimetype.startsWith("image")));
		const selected = data[Math.floor(Math.random() * data.length)];
		return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
	}

};
