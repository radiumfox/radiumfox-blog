import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule,  { abortOnError: false });
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    });
    await app.listen(4000, "localhost");
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();