import {PubsubManager} from 'redis-messaging-manager';

let messenger = new PubsubManager({
    host: 'localhost'
});
export default messenger;