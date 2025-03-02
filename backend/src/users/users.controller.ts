import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { RootObject } from '../interfaces/user.interface';

interface GetUsersRequest {
  limit: number;
  skip: number;
}

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService', 'GetUsers')
  async getUsers(data: GetUsersRequest): Promise<RootObject> {
    return this.usersService.getUsers(data.limit, data.skip);
  }
}
