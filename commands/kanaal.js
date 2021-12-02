const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");
    
 message.delete();
 
    var kanaalEmbed = new discord.MessageEmbed()
    .setTitle("**Wrong channel**")
    .setDescription("can you please resume this conversation privately and not on the discord server.")
    .setColor("GREEN")
    .setFooter("Strike Enterprise | Made by Robin_Strike#1091");


    return message.channel.send({ embeds: [kanaalEmbed]});

}


module.exports.help = {
    name: "kanaal",
    description: "hallo",
    category: "Informatie"
}