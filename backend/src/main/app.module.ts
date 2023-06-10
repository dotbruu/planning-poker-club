import { Global, Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { WebSocketModule } from './websocket.module';

@Global()
@Module({
  imports: [ApplicationModule, WebSocketModule],
})
export class AppModule {}
