const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const wiki = require('wikipedia');
const { botname, botimage } = require('../../config');
 
module.exports = class WikipediaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wikipedia',
            aliases: ['wiki'],
            group: 'divers',
            memberName: 'wikipedia',
            description: 'show wikipedia page'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        if(!args) {
            message.say(":x: Il faut citer le nom d'une page wikipedia !")
        }

        message.say("**:clock4: Recherche... (`"+`${args}`+"`)**").then(async (resultmessage) => {
            try {
                await wiki.setLang('fr')
                const wikipage = await wiki.page(args, {preload:true, fields:["intro"]})

                const embed = new MessageEmbed()
                    .setColor('WHITE')
                    .setTitle(wikipage.title)
                    .setURL(wikipage.fullurl)
                    .setDescription(wikipage._intro + " [...]")
                    .setFooter(botname, botimage)
                    .setTimestamp();

                resultmessage.delete().then(message.say(embed))


            } catch (error) {
                resultmessage.edit(':x: Aucune Page correspondant a votre recherche a été trouvé !')
            }
        })
    }
}