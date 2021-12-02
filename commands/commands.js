const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

  var halloEmbed = new discord.MessageEmbed()
    .setTitle("Bot Commands")
    .setDescription(`**Fun commands**
                    -botinfo
                    -changemind
                    -help
                    -hug
                    -info
                    -website
                    -roast
                    -meme
                    -respect
                    -serverinfo
                      `)
    .setColor("GREEN")
    .setFooter("Strike Enterprise | Made by Robin_Strike#1091");


    return message.channel.send({ embeds: [halloEmbed]});

}


module.exports.help = {
    name: "commands",
    description: "Displays this list",
    category: "informatie"
}