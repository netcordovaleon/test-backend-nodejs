import { Injectable } from '@nestjs/common';
import Client from 'src/domain/client';
import Invoice from 'src/domain/invoice';
import ClientCommand from '../command/client.command';
import InvoiceCommand from '../command/invoice.command';

@Injectable()
export default class InvoiceFactory {
  public createInvoice(invoiceCommand: InvoiceCommand): Invoice {
    return new Invoice(
      '',
      invoiceCommand.vendorId,
      invoiceCommand.invoiceNumber,
      invoiceCommand.invoiceDate,
      invoiceCommand.invoiceTotal,
      invoiceCommand.paymentTotal,
      invoiceCommand.creditTotal,
      invoiceCommand.bankId,
      invoiceCommand.invoiceDueDate,
      invoiceCommand.paymentDate,
      invoiceCommand.currency
    );
  }
}
