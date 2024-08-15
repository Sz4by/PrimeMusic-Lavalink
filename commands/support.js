const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.com/invite/RwsFau5YSu";
      const youtubeLink = "https://youtube.com/@sz4by";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1158023873057525850/1273575278538522635/6280-2.gif?ex=66bf1ce8&is=66bdcb68&hm=bf15ee303e8d595932c456c13374f98a4b0ef33acd2536799d53fe98c8e7a68a&', 
              url: 'https://discord.com/invite/RwsFau5YSu'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1158023873057525850/1273546368916521089/1000011120-ezgif.com-resize.jpg?ex=66bf01fb&is=66bdb07b&hm=ea8b931afbf72943021c0de3e8f1047b40e6f59e8e8332f1375c0c57c8f03dc0&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

