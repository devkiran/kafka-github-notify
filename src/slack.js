const request = require('request');

const webhookUrl = 'https://hooks.slack.com/services/XXXX';

const sendMessage = ({ repository, pusher, url }) => {
  const text = `New event on ${repository} by ${pusher.name}. Visit ${url}`;
  const body = JSON.stringify({ text: text });

  request.post(
    {
      url: webhookUrl,
      body: body,
    },
    (err, res, body) => {
      console.log(res);
    }
  );
};

module.exports = {
  sendMessage,
};
