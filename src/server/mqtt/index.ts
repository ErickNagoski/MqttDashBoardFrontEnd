import { useEffect, useState } from "react";

export default function mqttServer() {
  const mqtt = require('mqtt');

  const options = {
    clientId: "erick00001",
    clean: true,
    connectTimeout: 4000,
    username: 'vqlvmcfj',
    password: 'Vzw6NIX4voxY',
    reconnectPeriod: 1000,
  }

  const client = mqtt.connect('mqtt://m14.cloudmqtt.com:12891', options);



  client.on('connect', function (e) {
    console.log('Connected')
    console.log(e)
  })

  client.on('error', function (e) {
    console.log('error')
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })

  // var client = mqtt.connect('m14.cloudmqtt.com', options)

  // client.on('connect', function () {
  //   console.log('connected')
  // })

  // client.on('message', function (topic, message) {
  //   // message is Buffer
  //   console.log(message.toString())
  //   client.end()
  // })
}
