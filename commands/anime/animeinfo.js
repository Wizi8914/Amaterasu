const { Command } = require('discord.js-commando');
 
module.exports = class ClassName extends Command {
    constructor(client) {
        super(client, {
            name: '<Name>',
            group: '<group>',
            memberName: '<memberName>',
            description: '<description>'
        });
    }
 
    async run(message, args) {

    }
}