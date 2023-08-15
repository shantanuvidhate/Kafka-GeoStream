//Adim infrastructure

//refer https://kafka.js.org/docs/getting-started

//Let's start by instantiating the KafkaJS client by pointing it towards at least one broker:
const {kafka} = require("./client")

async function init () {
    const admin = kafka.admin();
    console.log("Please wait connecting admin...")
    admin.connect();
    console.log("Admin connected!");


    console.log("Creating Topic [user-location-updates]")
    await admin.createTopics({
        topics :[
            {
                topic:"user-location-updates",
                numPartitions:2,

            },
        ]
    })
    console.log("Creating created success [user-location-updates]")
admin.disconnect();
}
init();

