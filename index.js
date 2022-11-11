const { createBot } = require('whatsapp-cloud-api');

(async () => {
    try {
      
      const from = '108957422027938';
      const token = '';
      const to = '50251246386';
      const webhookVerifyToken = 'byronrmrzwebhookw';
  
      const bot = createBot(from, token);
  
      // Send text message, image, or pdf
      var docName = "Documento de prueba Coincaex";
      const result = await bot.sendText(to, 'Buena tarde, Mensaje de prueba realizado con exito');
      const resultpdf = await bot.sendDocument(to, 
        'https://www.guiometrics.com/wp-content/uploads/2019/06/Gui%CC%81a-Whatsapp-Business-mo%CC%81vil.pdf',
        {filename:docName}
        );


  
      // Start express server to listen for incoming messages

      await bot.startExpressServer({
        webhookVerifyToken,
      });
  
      // Listen to ALL incoming messages
      bot.on('message', async (msg) => {
        console.log(msg);
  
        if (msg.type === 'text') {
          await bot.sendText(msg.from, 'Received your text message!');
        } else if (msg.type === 'image') {
          await bot.sendText(msg.from, 'Received your image!');
        }
      });
    } catch (err) {
      console.log(err);
    }
  })();