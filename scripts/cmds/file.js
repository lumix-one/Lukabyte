 const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61554451689144"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝙎𝙊𝙍𝙍𝙔 𝙊𝙉𝙇𝙔 [ 🍀🩸 𝑀𝑟 𝐿𝑈𝐶𝐼𝐹𝐸𝑅 🩸🍀]\n_____________________\n 𝗖𝗔𝗡 𝗨𝗦𝗘 𝗙𝗜𝗟𝗘 {🩸🍀}", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝙇𝙀 𝙉𝙊𝙈 𝘿𝙐 𝙁𝙄𝘾𝙃𝙄𝙀𝙍 𝑀𝑟 🍀🩸 𝐿𝑈𝐶𝐼𝐹𝐸𝑅 🩸🍀.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`🤧|𝙁𝙄𝘾𝙃𝙄𝙀𝙍 𝙄𝙉𝙏𝙍𝙊𝙐𝙑𝘼𝘽𝙇𝙀 𝘽𝙊𝙎𝙎 😿: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
