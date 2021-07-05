const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { EmptyMessage } = require('../../strings.json');

require('dotenv').config()

module.exports = class GifCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gif',
            group: 'divers',
            memberName: 'gif',
            description: 'permet de aficher un gif'
        });
    }

    async run(message, args) {

        if(!args) {
            return message.say(EmptyMessage)
        }

        let url = `https://g.tenor.com/v1/search?q=${args}&key=${process.env.TENOR_KEY}&contentfilter=high`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);


        message.say(`Gif Aléatoire de ${args}`);
        message.say(json.results[index].url)

//        const embed = new MessageEmbed()
//            .setColor('BLUE')
//            .setTitle(`GIF aléatoire de ${args}`)
//            .setImage(json.results[index].url)
//            .setFooter('Galabot','https://i.ibb.co/VNRfF2P/logo-galstar.png');

//        message.say(embed);
    }
}