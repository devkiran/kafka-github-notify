const kafka = require('./kafka');
const { sendMessage } = require('./slack');

const consumer = kafka.consumer({ groupId: 'group-1' });

const run = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: 'topic-webhooks-events',
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value);

      sendMessage(value);
    },
  });
};

run();
