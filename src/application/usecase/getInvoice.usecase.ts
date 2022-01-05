import { Injectable, Inject, Logger } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import Client from 'src/domain/client';
import ClientCommand from '../command/client.command';
import { InvoiceRepository } from 'src/domain/ports/invoice.repository';
import InvoiceFactory from '../factory/invoice.factory';
import InvoiceCommand from '../command/invoice.command';
import Invoice from 'src/domain/invoice';

@Injectable()
export default class GetInvoiceUseCase {
  constructor(
    @Inject('InvoiceRepository') private invoiceRepository: InvoiceRepository) {}

  public handler(): Promise<Invoice[]> {
      return this.invoiceRepository.getAll();
  }
}
