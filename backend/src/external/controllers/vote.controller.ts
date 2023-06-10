import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVoteRoomService } from 'src/application/services/create-vote-room.service';
import { ResetVotesRoomService } from 'src/application/services/reset-votes-room.service';
import { ShowResultVotingService } from 'src/application/services/show-result-votes.service';
import { RoomGateway } from 'src/main/websocket.gateway';

@Controller('/vote')
export class VoteController {
  constructor(
    private createVoteRoomService: CreateVoteRoomService,
    private showResultVotingService: ShowResultVotingService,
    private resetVotesRoomService: ResetVotesRoomService,
    private socketMessageService: RoomGateway,
  ) {}

  @Post('/:roomId')
  async createVote(@Param() params: any, @Body() body: any) {
    const room = await this.createVoteRoomService.execute({
      roomId: params.roomId,
      userId: body.userId,
      vote: body.vote,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }

    this.socketMessageService.server.emit(
      `room/${params.roomId}`,
      JSON.stringify({
        type: 'vote_created',
        votes: room.getValue(),
      }),
    );

    return room.getValue();
  }

  @Get('/average/:roomId')
  async showAverage(@Param() params: any) {
    const room = await this.showResultVotingService.execute({
      roomId: params.roomId,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }

    this.socketMessageService.server.emit(
      `room/${params.roomId}`,
      JSON.stringify({
        type: 'average_calculated',
        ...room.getValue(),
      }),
    );

    return room.getValue();
  }

  @Put('/reset/:roomId')
  async resetRoom(@Param() params: any) {
    const room = await this.resetVotesRoomService.execute({
      roomId: params.roomId,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }

    this.socketMessageService.server.emit(
      `room/${params.roomId}`,
      JSON.stringify({
        type: 'reset_votes',
        ...room.getValue(),
      }),
    );

    return room.getValue();
  }
}
