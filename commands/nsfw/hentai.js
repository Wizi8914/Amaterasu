const { Command } = require('discord.js-commando');
 
module.exports = class hentaiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hentai',
            group: 'nsfw',
            memberName: 'hentai',
            description: 'hentai image only NSFW channel !'
        });
    }
 
    async run(message, args) {
 
    }
}