eeconst Discord = require('discord.js');

const Util = require('discord.js');

const queue = new Map();

const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});

const prefix = "$";

client.login(process.env.bot_token); 

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by ajinla3bo beta V.1.0');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});


client.on('ready', () => {

    client.user.setActivity("$help | by ajinla3bo V.1.0",{type: 'Streaming'})

});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
     if (message.content === "") {
message.author.send("**هلا فيك بسيرفرنا**" + `  **
اتمنى يعجبك البوت
 حلم الاونريين يوصلو 100 مشترك
https://www.youtube.com/channel/UCchUzgmmvnJruuCxKb-9zhA?view_as=subscriber
https://www.youtube.com/channel/UC0Uzqtbtw6XNbvv2U09mOng
اتمنى تشترك وتحط لايك
وتكون افضل عضو يا احلى الناس
ولا تنسى قرائة القوانين
**`);
    }
});     

 
   
   
   client.on('message', message => {
    if (message.content === ('$bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@ايدي حقك>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});
