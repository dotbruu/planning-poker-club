import { Module } from '@nestjs/common';
import { RoomGateway } from './websocket.gateway';

@Module({
  providers: [RoomGateway],
})
export class WebSocketModule {}
