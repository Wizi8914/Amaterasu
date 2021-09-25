const { Command, CommandoMessage } = require('discord.js-commando');
 
module.exports = class nickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setnick',
            aliases: ['nick', 'setnickname'],
            group: 'utilitaire',
            memberName: 'setnick',
            description: 'vous nick',
            guildOnly: true
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */
 
    async run(message, args) {
        if(!args) return message.say(':x: Vous devez citer le pseudo avec le quelle vous voulez changer !');

        if(args.length >= 32) return message.say(':x: votre pseudo doit contenir aux maximum 32 caractères')
        
        const argss = message.content.slice(message.guild.commandPrefix).trim().split(/ +/);

        const member = message.guild.members.cache.get(message.mentions.users.first().id)

        console.log(member)

        member.setNickname(argss[2])

        if(member.hasPermission("MANAGE_NICKNAMES")) {
            member.setNickname(argss[2])
        }
    }
}