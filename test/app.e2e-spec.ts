import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { GenericContainer, Wait } from 'testcontainers';


describe('AppController (e2e)', () => {

  let app: INestApplication;
  let container;
  const portMongo = 27017;
  jest.setTimeout(30000);

  beforeAll(async done => {
    container = await new GenericContainer('mongo')
      .withExposedPorts(portMongo)
      .withWaitStrategy(Wait.forLogMessage('Listening on 0.0.0.0'))
      .start();
    done();
  });

  
  afterAll(async done => {
    container.stop();
    done();
  });
 

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(500);
  });
});
