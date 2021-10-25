const express = require('express');
const pushEvent = require('./producer');

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  const { repository, pusher } = req.body;

  const event = {
    repository: repository.full_name,
    url: repository.html_url,
    pusher: pusher,
  };

  const messages = [
    {
      value: JSON.stringify(event),
    },
  ];

  pushEvent(messages);

  res.send(200);
});

app.listen(3002, () => {
  console.log(`Listening on port 3002`);
});
