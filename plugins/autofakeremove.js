   
/* Copyright (C) 2021 TERROR-BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/



/*
 __________   _________     ________________  ________  
     EDUTHO BUT ERROR VANNAL ENNOD PARAYANDA
     
     NJN FIX CHEYIYILLA HEHEE😂😂
     
     THANKS TO MY SUPPORTERS
_______  __________  ___________  ________    __________     
*/

const toPDF = require("custom-soffice-to-pdf");
const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');


Asena.addCommand({pattern: 'topdf ?(.*)', fromMe: false, desc: 'convert img-pdf' , dontAddCommandList: true }, async (message, match) => {


if (!message.reply_message)
      return await message.sendMessage('reply to image');
    if (message.reply_message.audio || message.reply_message.video || message.reply_message.sticker || message.reply_message.pdf) return message.sendMessage('NOT_SUPPORTED');
    toPDF(await message.reply_message.downloadAndSaveMediaMessage()).then(
      async (pdfBuffer) => {
        return await message.sendMessage(
          pdfBuffer,
          {
            filename: 'generated by whitedevil ' + ".pdf",
            mimetype: Mimetype.pdf,
          },
          MessageType.document
        );
      },
      (err) => console.log(`topdf : ${err}`)
    );
  }
);
