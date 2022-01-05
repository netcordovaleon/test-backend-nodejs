import { Injectable, Inject, Logger } from '@nestjs/common';
import { InvoiceRepository } from 'src/domain/ports/invoice.repository';
import Invoice from 'src/domain/invoice';

@Injectable()
export default class GetInvoiceFilterUseCase {
  constructor(
    @Inject('InvoiceRepository') private invoiceRepository: InvoiceRepository) {}

  public handler(vendor: string, dateIni: string, dateFin: string): Promise<Invoice[]> {
      return this.invoiceRepository.getFilterInvoices(vendor, dateIni, dateFin);
  }
}
