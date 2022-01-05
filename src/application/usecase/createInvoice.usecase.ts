import { Injectable, Inject, Logger } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import { InvoiceRepository } from 'src/domain/ports/invoice.repository';
import Invoice from 'src/domain/invoice';
import InvoiceCommand from '../command/invoice.command';
import InvoiceFactory from '../factory/invoice.factory';

@Injectable()
export default class CreateInvoiceUseCase {
  constructor(
    @Inject('InvoiceRepository') private invoiceRepository: InvoiceRepository,
    private invoiceFactory: InvoiceFactory,
  ) {}

  public handler(invoiceCommand: InvoiceCommand): Promise<Optional<Invoice>> {
    const invoice = this.invoiceFactory.createInvoice(invoiceCommand);
    return this.invoiceRepository.createInvoice(invoice);
  }
}
