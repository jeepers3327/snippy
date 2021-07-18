import { Test, TestingModule } from '@nestjs/testing';
import { StargazersController } from './stargazers.controller';

describe('StargazersController', () => {
  let controller: StargazersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StargazersController],
    }).compile();

    controller = module.get<StargazersController>(StargazersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
