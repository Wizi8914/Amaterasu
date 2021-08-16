const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { botname, botimage } = require('../../config');
 
module.exports = class Feedcommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'interaction',
            memberName: 'feed',    
            description: 'nouri un joueur'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un utilisateur !")
        }

        let member = message.mentions.users.first();

        if(!args[1].startsWith('@')) {
            return message.say(':x: Il faut mentioner une personne et non écrire son pseudonime !')
        }

        if(message.author === member) {
            return message.say(':x: Vous ne pouvez pas vous nourire vous même !')
        }

        let response = await fetch('https://nekos.life/api/v2/img/feed');
        let json = await response.json();
        
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`:fork_and_knife: ${message.author.username} a nouri ${member.username}`)
            .setImage(json.url)
            .setFooter(botname, botimage)
            .setTimestamp()
        
        message.say(embed)
    }
}