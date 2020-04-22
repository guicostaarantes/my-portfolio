This repository contains a React portfolio (src/) and a contact handling server (contact/).

To run this application, do the following:

- Create the file src/config.json. Fill it with:

```js
{
  "contact": "the endpoint to your contact message handler (eg: http://localhost:3001/sendMessage)",
  "recaptcha_v2_key": "the recaptcha v2 key (not secret) provided by Google"
}
```

- Create the file contact/config.json. Fill it with:

```js
{
  "recaptcha_secret_key": "the recaptcha v2 secret key provided by Google",
  "telegram_api_key": "the API key for a bot you created in Telegram",
  "telegram_chat_id": "the chat id of this bot with your Telegram account"
}
```

- Run the portfolio in dev mode with `yarn start`.
- Or build it with `yarn build` and serve it with `serve -s ./build`.

- Run the contact server from this folder with `cd contact && yarn start`
