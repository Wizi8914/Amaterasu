const { Command, CommandoMessage } = require('discord.js-commando');
 
module.exports = class AnimeinfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'animeinfo',
            aliases: ['anime'],
            group: 'anime',
            memberName: 'animeinfo',
            description: 'donne des information par apport a un anime'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */

    async run(message, args) {

        if(!args) {
            message.say(":x: Vous devez citer le nom d'un anime !")
        }

        try {
            let url = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(args)}`);
            const responce = await url.json();

            message.say(encodeURIComponent(args))

            console.log(responce)
        } catch (error) {
            return message.say(":x: Il s'emblerais qu'il y ai un probleme veuillez réessayer")
        }

    }
}