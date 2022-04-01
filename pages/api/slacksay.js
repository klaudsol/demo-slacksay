// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const {message='Sent by Slacksay :tada:'} = req.query; 
  const channel = process.env.SLACK_CHANNEL;
  const botToken = process.env.SLACK_BOT_TOKEN;
  const data = { channel, "text": message}; 
  const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${botToken}`
        },
      body: JSON.stringify(data) 
  });
  
  const json = await response.json();
  
  res.status(200).json({ response: json })
}
