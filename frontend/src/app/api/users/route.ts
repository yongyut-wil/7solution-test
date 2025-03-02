import { NextRequest, NextResponse } from 'next/server';
import { userServiceClient } from '@/services/grpc-client';
import { promisify } from 'util';

// Promisify the gRPC client method
const getUsers = promisify(userServiceClient.getUsers).bind(userServiceClient);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '30', 10);
    const skip = parseInt(searchParams.get('skip') || '0', 10);

    const response = await getUsers({ limit, skip });
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
