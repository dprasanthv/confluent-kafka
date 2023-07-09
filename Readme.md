Docker Environment of Confluent Kafka:

#Instructions

1. Run `docker-compose up -d` to build and bring up the environment
2. Access http://localhost:9021/ and Create a topic `orders` under topic
3. Run Consumers `node order-consumer.js` and `node email-processor.js`
4. Run Producers `node order-producer.js`
