import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest_search', {
    autoCreate: true
  }),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
