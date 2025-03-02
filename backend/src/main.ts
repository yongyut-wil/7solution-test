import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create a hybrid application (HTTP + gRPC)
  const app = await NestFactory.create(AppModule);
  
  // Configure gRPC microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '..', 'src', 'proto', 'user.proto'),
      url: 'localhost:5000',
    },
  });

  // Start microservices
  await app.startAllMicroservices();
  
  // Start HTTP server
  await app.listen(process.env.PORT ?? 3001);
  
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('gRPC server is running on: localhost:5000');
}
bootstrap();
