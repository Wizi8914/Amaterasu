const { VoiceConnection, MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const { botname, botimage } = require('../../config');
const { UserNotInVoiceChannel, EmptyPlayMessage } = require('../../strings.json');
const { MessageButton, MessageMenu, ButtonCollector} = require('discord-buttons')

require('dotenv').config()


module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'music',
            memberName: 'play',
            description: 'lit une video youtube',
                
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */

    async run(message, args) {
        const voicechannel = message.member.voice.channel;
        const server = message.client.server;

        if (!voicechannel) {
            return message.say(UserNotInVoiceChannel)
        } 
        
     //   if (!args) {
       //     return message.say(EmptyPlayMessage)
       // }

        const res = await this.client.manager.search(
            args,
            message.author
          );

        const player = this.client.manager.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
            selfDeafen: false,
          });


        voicechannel.join()

//=======================================================

        var value = "";

        for (let i = 0; i < 5; i++) {
            value += "**`" + (i + 1) + ".`** [" + res.tracks[i].title + "](" + res.tracks[i].uri +  ")\n";

        }
        
        var embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('Voici les 5 premiere vidéos correspondant à votre recherche')
            .setFooter(botname, botimage)
            .setTimestamp()
            .addField('Choisiser une des video en cliquant sur le bouton approprié', value)

//==========================================

        const one = new MessageButton()
            .setStyle('gray')
            .setLabel('1')
            .setID(1)
        
        const two = new MessageButton()
            .setStyle('gray')
            .setLabel('2')
            .setID(2)

        const three = new MessageButton()
            .setStyle('gray')
            .setLabel('3')
            .setID(3)
        
        const four = new MessageButton()
            .setStyle('gray')
            .setLabel('4')
            .setID(4)

        const five = new MessageButton()
            .setStyle('gray')
            .setLabel('5')
            .setID(5)


        message.say({
            embed: embed,
            buttons: [one, two, three, four, five]
        })

        this.client.on("clickButton", async (button) => {
            if(button.clicker.user.id === message.author.id) {
                var numbutton = button.id
                button.message.edit('eee')
                button.reply.defer()
            }

            console.log(numbutton)
        })

//==============================================


     //  player.connect()


      // console.log(res)

        //console.log(player)

    }
}


