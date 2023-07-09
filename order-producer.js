const { Kafka } = require("kafkajs");
const random_name = require("random-name");
const random_email = require("random-email");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092", "localhost:9101"],
});

const producer = kafka.producer();

const produce_data = async () => {
  // Producing
  await producer.connect();
  let i = 0;
  while (i < 10000) {
    await producer.send({
      topic: "orders",
      messages: [
        {
          value: JSON.stringify({
            firstName: random_name.first(),
            lastName: random_name.last(),
            ordertime: new Date().getTime(),
            email: random_email({ domain: "example.com" }),
            address: random_name.place(),
            orderId: parseInt(
              (Math.random() * 9 + 1) * Math.pow(10, 9 - 1),
              10
            ),
          }),
        },
      ],
    });
    i++;
  }
    await producer.disconnect()
  };

produce_data().catch(console.error);
