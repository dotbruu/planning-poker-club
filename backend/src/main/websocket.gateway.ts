import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class RoomGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: any;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.logger.log(`Client: ${client.id} Payload: ${payload}`);
    return 'Hello world!';
  }

  // On message
  @SubscribeMessage('messageToServer')
  handleMessageToServer(client: any, payload: any): void {
    this.logger.log(`Client: ${client.id} Payload: ${payload}`);
  }

  afterInit(server: any) {
    this.logger.log('Initialized!');
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
