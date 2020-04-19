const express = require("express");
const axios = require("axios");
const cors = require("cors");
const config = require("./config.json");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/sendMessage", async (req, res) => {
  const { formName, formMail, formMsg } = req.body;

  const chat_id = config.telegram_chat_id;
  const text = `Nova mensagem a partir do form do portfolio:\nNome: ${formName}\nEmail: ${formMail}\nMensagem: ${formMsg}`;

  try {
    await axios.post(
      `https://api.telegram.org/bot${config.telegram_api_key}/sendMessage`,
      { chat_id, text }
    );
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
});

app.listen(3001, () => {
  console.log("Contact server running at port 3001!");
});
