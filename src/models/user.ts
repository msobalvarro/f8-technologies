import { UsersPropierties } from '@/utils/interfaces';
import { model, Schema } from 'mongoose';

const user = new Schema<UsersPropierties>(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: true
  }
)

export const usersModel = model('user', user)

