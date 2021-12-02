const fs = require("fs");
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");
    
    if (!args[0]) return message.reply("Enter a user.");

    if (!args[1]) return message.reply("Geef een reden mee.");

    var warnUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.member.get(args[0]).id);

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Can't find this person.")

    if(warnUser.permissions.has("MANAGE_MESSAGES")) return message.reply("No, this doesn't work");

    const warns = JSON.parse(fs.readFileSync("./warnings.json", "UTF8"));

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    }

    warns[warnUser.id].warns++;

    var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`**Gewarnd:** ${warnUser.user.username} (${warnUser.id})
                    **Warning by:** ${message.author}
                    **Reeason: ** ${reason}`)
    .addField("Number of warnings", warns[warnUser.id].warns.toString());

    const channel = message.member.guild.channels.cache.get("895391261652054047");

    if (!channel) return;

    channel.send({ embeds: [embed] });

    if (warns[warnUser.id].warns == 19) {
 
        var mes = new discord.MessageEmbed()
            .setDescription("LOOK AFTER " + warnUser.user.username)
            .setColor("#ee0000")
            .addField("Bericht", "another warn and you're banned!");
     
        message.channel.send({ embeds: [mes] });
     
    } else if (warns[warnUser.id].warns == 20) {
     
        message.guild.members.ban(warnUser, { reason: reason });
        message.channel.send(`${warnUser} is banned for having to many warns`);
     
    }


    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });


}

module.exports.help = {
    name: "warn"
}