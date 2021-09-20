const { Command, CommandoMessage } = require('discord.js-commando');
const jsoning = require('jsoning');
const db = new jsoning('warndb.json');


module.exports = class WarnCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            group: 'moderation',
            memberName: 'warn',
            description: 'donne un warn'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        if(!args) {
            return message.say(":x: **Vous devez citer le nom d'un utilisateur !**")
        }

        if(!args[1].startsWith('@')) {
            return message.say(':x: **Il faut mentioner une personne et non écrire son pseudonime !**')
        }

        const member = message.mentions.users.first();

        if(message.author === member) {
            return message.say(':x: **Vous ne pouvez pas vous mettre un warn vous même !**')
        }

        try {
            var memberName = member.username
        } catch (error) {
            return message.say(":x: **Il faut entrer un nom d'utilisateur valide !**")
        }

        message.say(member.id)

        db.clear()
        db.set("warn", 2)

        if(await db.get(member.id) == false) {
            db.push(member.id, 'test')
        }

    }
}