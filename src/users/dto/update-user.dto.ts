import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password', // bỏ đi trường password vì không muốn cập nhật trường password
  'name',
] as const) {
  _id: string;
}
