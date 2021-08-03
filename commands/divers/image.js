const { MessageEmbed } = require("discord.js");
const { Command } = require("discord.js-commando");
const SerApi = require('google-search-results-nodejs');
const { botname, botimage } = require("../../config");
const search = new SerApi.GoogleSearch(process.env.GOOGLE_API_KEY)

require('dotenv').config();

module.exports = class imageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'image',
            group: 'divers',
            memberName: 'image',
            description: 'cherche une image sur google'
        })
    }

    async run(message, args) {

        message.say('recherche ...').then((resultmessage) => {
            const param = {
                q: args,
                tbm: 'isch',
                ijn: '0'
            };
    
            const callback = function(data) {
    
                const img = data['images_results'][Math.floor(Math.random() * 100)].original
                
                var embed = new MessageEmbed()
                    .setColor('RAMDOM')
                    .setTitle(`Image aléatoire de ${args}`)
                    .setImage(img)
                    .setURL(img)
                    .setFooter(botname, botimage)
                    .setTimestamp()
                
                message.channel.bulkDelete(1).then(() => {
                    message.say(embed)
                })
    
            }
    
            search.json(param, callback);
        })
    }
}