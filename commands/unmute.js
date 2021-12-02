const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");

    const user = message.mentions.members.first();
    
     if(!user) {
    
     return message.channel.send("Please mention the member to who you want to mute.")
    
     }
    
     
    
     if(user.id === message.author.id) {
    
     return message.channel.send("I won't unmute you.");
    
     }
    
     
    
     
    
     let reason = args.slice(1).join(" ")
    
     
    
    
     
    
     let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
     
    
     if(!muterole) {
    
     return message.channel.send("Deze server heeft de rol: `Muted` niet")
    
     }
    
    user.roles.remove(muterole)
    
    let sureEmbed = new discord.MessageEmbed()
    
    .setTitle("Mute")
    
    .setDescription(`You have **${message.mentions.users.first()}** unmuted `)
    
    .setColor("RED")
    
    let unmuteEmbed = new discord.MessageEmbed() //Feel free to edit embeds
    
    .setTitle("Success!")
    
    .setDescription(`Unmuted **${message.mentions.users.first()}`)
    
    .setColor("RED")
    
    .setFooter("Pog")
    
    
    
    message.channel.send({ embeds: [sureEmbed] })
    
    }
    
module.exports.help = {
    name: "unmute",
    description: "unmute",
    category: "Informatie"
}