import { Optional } from 'typescript-optional';
import Invoice from '../invoice';

export interface InvoiceRepository {
  getAll(): Promise<Invoice[]>;

  getInvoice(invoiceId: string): Promise<Optional<Invoice>>;

  getFilterInvoices(vendor: string, dateIni: string, dateFin: string): Promise<Invoice[]>;

  createInvoice(client: Invoice): Promise<Optional<Invoice>>;

  deleteInvoice(clientId: string): Promise<Optional<Invoice>>;

  updateInvoice(
    invoiceId: string,
    invoice: Invoice,
  ): Promise<Optional<Invoice>>;
}
