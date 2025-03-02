import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/user';
import path from 'path';

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
) as unknown as ProtoGrpcType;

// Create a client
const client = new protoDescriptor.user.UserService(
  'localhost:5000',
  grpc.credentials.createInsecure()
);

export const userServiceClient = client;
