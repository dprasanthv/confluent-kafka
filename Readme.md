Docker Environment of Confluent Kafka:

#Instructions

1. Run `docker-compose up -d` to build and bring up the environment
2. Run `npm install` to install packages
3. Access http://localhost:9021/ and Create a topic `orders` under topic
4. Run Consumers `node order-consumer.js` and `node email-processor.js`
5. Run Producers `node order-producer.js`
