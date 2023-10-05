import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): string {
    this.powerService.supplyPower(25);
    return `result: ${a + b}`;
  }
}
