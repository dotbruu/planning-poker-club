import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { RoomModel, VoteModel } from 'src/domain/models/room.model';

@Schema({ collection: 'rooms' })
export class RoomEntity extends Document implements RoomModel {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], default: [] })
  deckVotes: string[];

  @Prop({ type: [String], default: [] })
  users: string[];

  @Prop({ type: Number, default: null })
  average?: number | null | undefined;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Vote' }], default: [] })
  votes: VoteModel[];

  @Prop({ type: Boolean, default: false })
  isRevealed: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(RoomEntity);

RoomSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});

RoomSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});
