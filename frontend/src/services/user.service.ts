import { RootObject } from '@/interfaces/user.interface';

export async function fetchUsers(limit: number = 30, skip: number = 0): Promise<RootObject> {
  try {
    const response = await fetch(`/api/users?limit=${limit}&skip=${skip}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
