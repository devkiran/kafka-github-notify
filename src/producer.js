const kafka = require('./kafka');

const producer = kafka.producer();

const pushEvent = async (messages) => {
  await producer.connect();

  const response = await producer.send({
    topic: 'topic-webhooks-events',
    messages: messages,
  });

  console.log(response);

  await producer.disconnect();
};

module.exports = pushEvent;
