const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var halloEmbed = new discord.MessageEmbed()
    .setDescription("**Do you need help? create a ticket!**")
    .setColor("GREEN")
    .setFooter("Strike Enterprise | Made by Robin_Strike#1091");


    return message.channel.send({ embeds: [halloEmbed]});

}


module.exports.help = {
    name: "help",
    description: "hallo",
    category: "Informatie"
}