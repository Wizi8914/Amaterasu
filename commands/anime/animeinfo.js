const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const fetch = require('node-fetch')
 
module.exports = class AnimeinfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'animeinfo',
            aliases: ['anime'],
            group: 'anime',
            memberName: 'animeinfo',
            description: 'donne des information par apport a un anime'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */

    async run(message, args) {

        if(!args) {
            message.say(":x: Vous devez citer le nom d'un anime !")
        }

        const { data } = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(args)}`).then((responce) => responce.json())

        const genre = await fetch(data[0].relationships.genres.links.related).then((responce) => responce.json())

        let genrelist = []
        for (let i = 0; i < genre.data.lenght; i++) {
            
        }
        console.log(genre.data.length)
        //console.log(genre.data[0].attributes.name)

        if(!data || !data.length) return message.say(":x: Il s'emblerais qu'il y ai un probleme veuillez réessayer");
        
        const embed = new MessageEmbed()
            .setTitle(`${data[0].attributes.titles.en} (${data[0].attributes.titles.en_jp}) (${data[0].attributes.titles.ja_jp})`)
            .setColor('#ff00ea')
            .setDescription(data[0].attributes.synopsis)
            .addField(":tv: Episodes", `${data[0].attributes.episodeCount} (${data[0].attributes.episodeLength} Minutes par Episode) (${data[0].attributes.totalLength} Minutes au total)`)
            .addFields(
                { name: `:desktop: **Episodes (${data[0].attributes.episodeCount})**`, value: `:page_facing_up: Min Par Episode: ${data[0].attributes.episodeLength} \n :abacus: Min Total: ${data[0].attributes.totalLength}`, inline: true },
                { name: ":diamond_shape_with_a_dot_inside: **Type**", value: `${data[0].attributes.type}`, inline: true },
                { name: ":tv: Episodes", value: `jj`, inline: true }    
            )

            .addField("type")
            .addField("status")
            .addField("start end ")
            .setThumbnail(data[0].attributes.posterImage && data[0].attributes.posterImage.original)
            .setURL(`https://kitsu.io/anime/${data[0].id}`)


        message.say(embed)

        //console.log(data[0])
    }
}