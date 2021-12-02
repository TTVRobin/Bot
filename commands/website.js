const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var ipEmbed = new discord.MessageEmbed()
    .setDescription("**Our website is coming!**")
    .setColor("GREEN")
    .setFooter("Strike Enterprise | Made by Robin_Strike#1091");


    return message.channel.send({ embeds: [ipEmbed]});

}

module.exports.help = {
    name: "website",
    description: "geeft website weer",
    category: "Informatie"
}