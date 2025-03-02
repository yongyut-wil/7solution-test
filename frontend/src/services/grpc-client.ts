import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { RootObject } from '../interfaces/user.interface';

// This is a server-side only module
// We'll use this in API routes

const PROTO_PATH = path.resolve('./src/proto/user.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
);

// Define the client interface
interface UserServiceClient {
  getUsers(request: { limit: number; skip: number }, callback: (error: Error | null, response: RootObject) => void): void;
}

// Create a client
const client = new (protoDescriptor.user as any).UserService(
  'localhost:5000',
  grpc.credentials.createInsecure()
) as UserServiceClient;

export const userServiceClient = client;
