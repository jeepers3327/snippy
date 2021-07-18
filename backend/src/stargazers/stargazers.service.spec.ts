import { Test, TestingModule } from '@nestjs/testing';
import { StargazersService } from './stargazers.service';

describe('StargazersService', () => {
  let service: StargazersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StargazersService],
    }).compile();

    service = module.get<StargazersService>(StargazersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
