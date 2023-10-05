import { Controller, Get, Post } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService
  ) {}

  @Get('run')
  run() {
    return [this.diskService.getData(), this.cpuService.compute(1, 2)];
  }
}
