const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ["localhost:9092", "localhost:9101"],
})

const consumer = kafka.consumer({groupId: 'Email Processor'}) 
//A consumer group is a set of consumers which cooperate to consume data from some topics. 
//The partitions of all the topics are divided among the consumers in the group. 
//As new group members arrive and old members leave, the partitions are re-assigned so that each member receives a proportional share of the partitions.

const run = async () => {
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'orders', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        const msg = JSON.parse(message.value.toString());
        console.log("Sent Email to " + msg["email"] + " of Order with Order ID: " + msg["orderId"])
    },
  })
}

run().catch(console.error)