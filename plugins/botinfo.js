const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'info', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/afd4937c734fb2db0a8c8.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `▢ *ᴍʏ ɴᴀᴍᴇ ɪs MilfBOT*

▢ *ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴋɴᴏᴡ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ᴊᴜsᴛ ᴍᴇssᴀɢᴇ ,help*

▢ *MilfBOTv1* 

▢ *ᴅᴇᴠᴇʟᴏᴘᴇʀ Hey ITS JORDI⁩*

▢ *ɢɪᴛʜᴜʙ ʟɪɴᴋ:* http://github.com/iamenpjordi69

`}) 

}));
