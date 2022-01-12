export default function mqttServer() {
  var mqtt = require('mqtt')

  const options = {
    clientId: 'erick00001',
    // Port:'12891',
    username: 'vqlvmcfj',
    password: 'Vzw6NIX4voxY'
  }

  var client = mqtt.connect('m14.cloudmqtt.com', options)

  client.on('connect', function () {
    console.log('connected')
  })
}
