# redis-messaging-manager-examples

## Examples for using [redis-mesagging-manager](https://github.com/tomyitav/redis-messaging-manager) library.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/redis-messaging-manager-examples.git
npm install
tsc
```

### Basic setup

Make sure a redis broker instance is up on localhost. You can configure
a different ip address in messenger.ts file

### Creating PubsubManager instance

```js
  import {PubsubManager} from 'redis-messaging-manager';

  let messenger = new PubsubManager({
      host: 'localhost'
  });
  export default messenger;
```

### receiver demo

The following code snippet shows how to subscribe to a topic, (or channel)
named "redis"

```js
  import messenger from "../messenger";

  console.log('consuming messages..!');
  messenger.consume('redis')
      .subscribe(msg => {
          console.log('Got message- ', msg);
      });
```

Run command:

```bash
node dist\basic-pubsub\receiver.js
```

### Running publisher

This is how we publish a message on the channel "redis":

```js
import messenger from '../messenger';

messenger.publish('redis', 'Hello redis messenger!');
```

Run command:

```bash
node dist\basic-pubsub\publisher.js
```

Messages from the publisher will appear in the receiver console.

### Subscribe to server events

By using the ```getServerEventStream``` method, we get an Observable that
acts as a stream of events from the Redis server instance.

```js
import messenger from '../messenger';

messenger.getServerEventStream('error')
    .subscribe(() => {
        console.log('Got error event');
    })
```

Run command:

```bash
node dist\events\event-listener.js
```


