import { Socket } from '@/services/websocket/Socket';

export class GameSocket extends Socket {
  private messageQueue: ArrayBuffer[];

  constructor(url: string, token: string | null) {
    super(url, token);
    this.messageQueue = [];
  }

  useMessageQueue() {
    this.webSocket.onmessage = (event) => {
      this.messageQueue.push(event.data);
    };
  }

  isMessageEmpty(): boolean {
    if (this.messageQueue.length === 0) {
      return true;
    }
    return false;
  }

  pollMessage(): ArrayBuffer | undefined {
    return this.messageQueue.shift();
  }
}
