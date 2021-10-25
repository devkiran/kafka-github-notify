const { Kafka } = require('kafkajs');

const brokers = ['192.168.1.4:9092'];

const kafka = new Kafka({
  clientId: 'github-notification',
  brokers: brokers,
});

module.exports = kafka;
