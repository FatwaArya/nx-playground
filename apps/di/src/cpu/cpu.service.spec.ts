import { Test, TestingModule } from '@nestjs/testing';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

describe('CpuService', () => {
  let service: CpuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PowerModule],
      providers: [CpuService],
      exports: [CpuService],
    }).compile();

    service = module.get<CpuService>(CpuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
