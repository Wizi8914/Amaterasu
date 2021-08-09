const { Command } = require('discord.js-commando');
 
module.exports = class bondageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bondage',
            group: 'nsfw',
            memberName: 'bondage',
            description: 'bondage image only NSFW channel !'
        });
    }
 
    async run(message, args) {
 
    }
}