import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { RootObject } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly apiUrl = 'https://dummyjson.com/users';

  async getUsers(limit: number = 30, skip: number = 0): Promise<RootObject> {
    try {
      const response = await axios.get<RootObject>(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
