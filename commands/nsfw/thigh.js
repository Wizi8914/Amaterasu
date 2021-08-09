const { Command } = require('discord.js-commando');
 
module.exports = class hentaiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'thigh',
            group: 'nsfw',
            memberName: 'thigh',
            description: 'thigh image only NSFW channel !'
        });
    }
 
    async run(message, args) {
        let http = await fetch('https://shiro.gg/api/images/nsfw/thighs');
        let responce = await http.json();

        console.log(responce.url)
    }
}