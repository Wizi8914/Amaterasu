const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Commanddontexist } = require('../../strings.json');
const { botimage, botname} = require('../../config.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'utilitaire',
            memberName: 'help',
            description: "commande d'aide bot",
        });
    }

    async run(message, args) {      

        for (let i = 2; i < this.client.registry.groups.size; i++) {
            name = this.client.registry.groups.toJSON()[i].name
            //console.log(name)
            command = this.client.registry.groups.toJSON()[i].commands 
            console.log(command)
            
        }

        if (!args) {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Liste des commandes de " + botname)
                .setDescription('Le prefix pour utiliser le Amaterasu est ' + "`>` \n" + "Information sur une commande " + "`>help <text>`")
                .addField(":notes: MUSIQUE :", "`play`, " + "`queue`, " + "`skip`, " + "`skipto`, " + "`join`, " + "`leave`, \n" + "`pause`, " + "`resume`, " + "`info`, " + "`clear`, " + "`lyrics`")
                .addField(":jigsaw: DIVERS :", "`icon`, " + "`invite`, " + "`soundboard`, " + "`coinflip`, \n" + "`calcul`, " + "`say`, " + "`gif`, " + "`avatar`, " + "`skyblockbstats`")
                .addField(":tools: UTILITAIRE :", "`help`, " + "`ping`, " + "`botinfo`, " + "`clearchat`, " + "`server`, \n" + "`roles`")
                .addField(":shield: MODÉRATION :", "`kick`, " + "`ban`")
                .setFooter(botname,botimage)
                .setTimestamp()

            message.say(embed)

            return;
        } else {
            message.say(Commanddontexist);
        }

    }
}