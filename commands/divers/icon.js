const { Command } = require('discord.js-commando');
const { botimage } = require('../../config.json')

module.exports = class IconCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'icon',
            group: 'divers',
            memberName: 'icon',
            description: 'icon du serveur'
        });
    }

    async run(message) {
        message.say(botimage);
    }
}
