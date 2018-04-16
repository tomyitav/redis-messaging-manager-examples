# redis-messaging-manager-example

## Examples for using [redis-mesagging-manager](https://github.com/tomyitav/redis-messaging-manager) library.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/redis-messaging-manager-example.git
npm install
tsc
```

### Basic setup

Make sure a redis broker instance is up on localhost. You can configure
a different ip address in messenger.ts file

### Running receiver

```bash
node dist\receiver.js
```

### Running publisher

```bash
node dist\publisher.js
```

Messages from the publisher will appear in the receiver code.