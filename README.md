
##  Kafka GeoStream Project
This project demonstrates the use of Kafka to stream real-time user location data. Kafka, a distributed streaming platform, is used to efficiently handle and process live location updates from users. This use case showcases the scalability, reliability, and real-time capabilities of Kafka for such applications.


## Prerequisites


- Docker and Docker Compose installed on your machine.
- Node.js and npm installed for running nodejs application.
- Git for cloning this repository.





## Tech Stack

The technologies used in this project include:

- **Apache Kafka**: A distributed streaming platform.
- **KafkaJS**: A modern JavaScript client for Kafka.
- **Docker**: For containerization of Kafka and ZooKeeper.
- **Docker Compose**: For managing multi-container applications.
- **Node.js**: Used to run the Kafka producer and consumer applications.

## Getting Started

### Docker Compose

1. Clone this repository:

```bash
 git clone https://github.com/shantanuvidhate/Kafka-GeoStream.git
```
2. Navigate to the project folder :

```bash
 cd kafka-GeoStream
```
3. Enter your private IP address in .env:

```bash
 KAFKA_BROKER_IP="<PRIVATE-IP-ADDRESS>:9092"
```
4. Enter your private IP address in docker-compose.yml:

```bash
version: '3'
services:
  zookeeper:
    image: zookeeper
    ports:
      - "2181:2181"

  kafka:
    image: confluentinc/cp-kafka
    environment:
      KAFKA_ZOOKEEPER_CONNECT: <PRIVATE-IP-ADDRESS>:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://<PRIVATE-IP-ADDRESS>:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    ports:
      - "9092:9092"
    depends_on:
      - zookeeper

```
you can also configure topic replication factor in docker-compose.yml

5. Install dependencies:

```bash
 npm install
```
6. Start the Kafka and ZooKeeper containers using Docker Compose::

```bash
 docker-compose up
```
7. Run the Kafka producer in new terminal:

```bash
 node producer.js
```
8. Run the Kafka consumer in new terminal with 2nd argument with consumer name:

```bash
 node consumer.js user-loc-1
```

## Analysis
In this project, the producer sends messages to Kafka, and the consumer consumes those messages. You can observe the flow of messages within the Kafka architecture.
## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shantanuvidhate/Kafka-GeoStream/blob/main/LICENSE)

