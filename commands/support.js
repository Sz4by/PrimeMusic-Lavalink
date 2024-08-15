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
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
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

