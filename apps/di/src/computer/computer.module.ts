import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';
import { PowerModule } from '../power/power.module';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, PowerModule, DiskModule],
  providers: [CpuService],
})
export class ComputerModule {}
