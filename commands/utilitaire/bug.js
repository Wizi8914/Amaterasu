const { Command } = require('discord.js-commando');
 
module.exports = class bugcommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'divers',
            memberName: 'bug',
            description: 'report un bug'
        });
    }
 
    async run(message, args) {
        message.say()
    }
}