import { Injectable, Inject, Logger } from '@nestjs/common';
import { InvoiceRepository } from 'src/domain/ports/invoice.repository';
import CsvAdapter from 'src/shared/csvAdapter';

@Injectable()
export default class BulkInvoiceUseCase {
  constructor(
    @Inject('InvoiceRepository') private invoiceRepository: InvoiceRepository,
    private csvAdapter: CsvAdapter
  ) {}

  public handler(): Promise<string> {
    this.csvAdapter.getInvoicesFromFile().then(data => {
        data.forEach((item) => {
            this.invoiceRepository.createInvoice(item);
        });
    }); 
    return Promise.resolve("BULK");
  }
}
