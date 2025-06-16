const axios = require('axios');

const Prefixes = [
  '/ai',
  'Ai',
  'LUCIFER ',
  'Lucifer',
  'bot',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🍀🩸 𝑀𝑂𝑅𝑁𝐼𝑁𝐺 𝑆𝑇𝐴𝑅 🩸🍀\n\n 𝑬𝒏 𝒒𝒖𝒐𝒊 𝒑𝒖𝒊𝒔 𝒋𝒆 𝒗𝒐𝒖𝒔 𝒆𝒕𝒓𝒆 𝒖𝒕𝒊𝒍𝒆 𝑴𝒓 .....?🤠🤠  ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🍀🩸 𝑀𝑂𝑅𝑁𝐼𝑁𝐺 𝑆𝑇𝐴𝑅 🩸🍀
_______________________
${answer}
ꃳꁝꁝꁝꃳꃳꂵꂵꂵꍌ🤠`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
