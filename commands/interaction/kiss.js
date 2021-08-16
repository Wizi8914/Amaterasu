const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { botname, botimage } = require('../../config');
 
module.exports = class Kisscommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            group: 'interaction',
            memberName: 'kiss',    
            description: 'embrace un utilisateur'
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
        let response = await fetch('https://nekos.life/api/v2/img/kiss');
        let json = await response.json();
        
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`:kiss: ${message.author.username} a embrasser ${member.username}`)
            .setImage(json.url)
            .setFooter(botname, botimage)
            .setTimestamp()
        
        message.say(embed)
    }
}