const { Command } = require('discord.js-commando');
 
module.exports = class catCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'divers',
            memberName: 'cat',
            description: 'giv cat image'
        });
    }
 
    async run(message, args) {
        let 
    }
}