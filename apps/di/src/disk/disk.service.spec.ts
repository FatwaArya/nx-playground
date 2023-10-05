import { Test, TestingModule } from '@nestjs/testing';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module';

describe('DiskService', () => {
  let service: DiskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PowerModule],
      providers: [DiskService],
      exports: [DiskService],
    }).compile();

    service = module.get<DiskService>(DiskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //should return 'data'
  it('should return data', () => {
    expect(service.getData()).toBe('data');
  });
});
