import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { UserModel } from 'src/domain/models/user.model';

@Schema({ collection: 'users' })
export class UserEntity extends Document implements UserModel {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop()
  name: string;

  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});

UserSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});
