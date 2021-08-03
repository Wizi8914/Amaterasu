const { Command } = require('discord.js-commando');
const { default: fetch } = require('node-fetch');
 
module.exports = class catCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'divers',
            memberName: 'cat',
            description: 'giv cat image'
        });
    }
 
    async run(message, args) {
        let url = await fetch("https://aws.random.cat/meow");
        let responce = await url.json()
        
        console.log(responce)
    }
}