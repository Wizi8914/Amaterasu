const { Command, CommandoMessage } = require('discord.js-commando');
 
module.exports = class nickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nick',
            group: 'utilitaire',
            memberName: 'nick',
            description: 'vous nick'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        if(!args) {
            return message.say(':x: Vous devez citer le pseudo avec le quelle vous voulez changer !')
        }

        
    }
}