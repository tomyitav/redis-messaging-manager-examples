import messenger from '../messenger';

let bulkOfMessages: Array<string> = [
    "hello redis 1",
    "hello redis 2",
    "hello redis 3",
    "hello redis 4",
    "hello redis 5"
]

messenger.publishBulk('redis', bulkOfMessages);