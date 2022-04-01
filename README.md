#Demo Slacksay

This is a small demo program that demonstrate the ability to send Slack messages via chat.postMessage API.
The advantage of using chat.postMessage over incoming webhooks is that it can be used for channels that you don't own.

## Getting Started


```bash
cp .env.sample .env #Replace the values with your own credentials
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

