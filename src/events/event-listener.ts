import messenger from '../messenger';

messenger.getServerEventStream('error')
    .subscribe(() => {
        console.log('Got error event');
    })
messenger.getServerEventStream('connect')
    .subscribe(() => {
        console.log('Got connect event');
    })
messenger.getServerEventStream('reconnecting')
    .subscribe(() => {
        console.log('Got reconnecting event');
    })
