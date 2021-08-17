const { Command, CommandoMessage } = require('discord.js-commando');
const translate = require('deepl')

require('dotenv').config()

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
        
        const str = args.split(' ')


        translate({
            free_api: true,
            text: args,
            source_lang: str[0],
            target_lang: str[1],
            auth_key: process.env.DEEPL_API_KEY
        })
        .then(result => {
            message.say(result.data.translations[0].text)
        })
        .catch(error => {
            message.say(":x: Il semblerai qu'il y ai une erreur")
        })
    }
}