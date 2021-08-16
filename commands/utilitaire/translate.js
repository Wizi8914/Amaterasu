const { Command, CommandoMessage } = require('discord.js-commando');
const translate = require('google-translate-api');
 
module.exports = class TranslateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'translate',
            group: 'divers',
            memberName: 'translate',
            description: 'traduit un truc'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        const query = args.split(' ')

        translate(query, {to: 'en'}).then(res => {
            console.log(res.text)
        })
    }
}