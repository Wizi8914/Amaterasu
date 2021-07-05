const { Command } = require('discord.js-commando');
const { MessageButton } = require('discord-buttons');
const { MessageEmbed } = require('discord.js');

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'music',
            memberName: 'test',
            description: 'commande de test'
        });
    }
    
    async run(message, args) {

     //   const embed = new MessageEmbed()
       //     .setTitle('osef')
  //          .setColor('RED')

    //    const yes = new MessageButton()
      //      .setStyle('green')
        //    .setLabel('yes')
          //  .setID('uwu')

   //     const no = new MessageButton()
     //       .setStyle('red')
       //     .setLabel('no')
         //   .setID('nouwu')

       // message.say({
         //   embed: embed,
           // buttons: [yes,no]
      //  })

    }
}

