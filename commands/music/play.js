const { VoiceConnection } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const { UserNotInVoiceChannel, EmptyPlayMessage } = require('../../strings.json');

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


        const res = this.client.manager.search(
            message.content.slice(6),
            message.author
          );

        const player = this.client.manager.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
            selfDeafen: false,
          });


        if(player.state != 'CONNECTED') await player.connect()

       // voicechannel.join()

     //  player.connect()


       console.log(res)

        console.log(player)


    }
}
