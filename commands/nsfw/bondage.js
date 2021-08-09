const { Command, CommandoMessage } = require('discord.js-commando');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { botname, botimage } = require('../../config');
 
module.exports = class bondageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bondage',
            group: 'nsfw',
            memberName: 'bondage',
            description: 'bondage image only NSFW channel !'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        let http = await fetch('https://shiro.gg/api/images/nsfw/bondage');
        let responce = await http.json();

        if(!message.channel.nsfw) {
            message.delete()
            message.say(':x: Vous ne pouvez utiliser cette command seulement dans un salon NSFW !').then(async(resultmessage) => {
                setTimeout(() => {
                    resultmessage.delete()
                }, 5000);
            })
        } else {
            const embed = new MessageEmbed()
                .setColor('GRAY')
                .setTitle(':underage: Image aléatoire de bondage :underage: ')
                .setURL(responce.url)
                .setImage(responce.url)
                .setFooter(botname, botimage)
                .setTimestamp();
            message.say(embed)
        }
    }
}