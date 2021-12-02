const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry only cool people can do this");


    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Enter some text");
    }
    var sayEmbed = new discord.MessageEmbed()
      .setTitle("Announcement")
      .setFooter("Strike Enterprise | Made by Robin_Strike#1091")
      .setDescription(`${msg}`)
      .setColor("RANDOM");
      
    

      message.channel.send({ embeds: [sayEmbed]});
    message.delete();
  },


module.exports.help = {
    name: "say",
    description: "Say command",
    category: "Informatie"
}