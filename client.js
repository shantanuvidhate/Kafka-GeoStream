require('dotenv').config();
const { Kafka } = require ('kafkajs');
const kafkaBrokerIp = process.env.KAFKA_BROKER_IP;

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers : [`${kafkaBrokerIp}`]
});