import {PubsubManager} from "redis-messaging-manager";

let messenger = new PubsubManager('localhost');
export default messenger;