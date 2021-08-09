const { Command, CommandoMessage } = require('discord.js-commando');
const { default: fetch } = require('node-fetch');
 
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
     * @param {*} args 
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
        }
    }
}