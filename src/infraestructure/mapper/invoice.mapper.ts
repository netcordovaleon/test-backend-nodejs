import Invoice from "src/domain/invoice";
import { Optional } from "typescript-optional";
import InvoiceEntity from "../adapters/entity/invoice.entity";
/*

      id: string,
      vendorId: number,
      invoiceNumber: string,
      invoiceDate: string,
      invoiceTotal: number,
      paymentTotal: number,
      creditTotal: number,
      bankId: number,
      invoiceDueDate: string,
      paymentDate: string,
      currency: string

*/ 
export default class InvoiceMapper {
    public static toDomain(invoiceEntity: InvoiceEntity): Optional<Invoice> {
      if (!invoiceEntity) {
        return Optional.empty<Invoice>();
      }
      const invoice = new Invoice(
        invoiceEntity.id,
        invoiceEntity.vendorId,
        invoiceEntity.invoiceNumber,
        invoiceEntity.invoiceDate,
        invoiceEntity.invoiceTotal,
        invoiceEntity.paymentTotal,
        invoiceEntity.creditTotal,
        invoiceEntity.bankId,
        invoiceEntity.invoiceDueDate,
        invoiceEntity.paymentDate,
        invoiceEntity.currency
      );
  
      return Optional.of(invoice);
    }
  
    public static toDomains(productsEntity: InvoiceEntity[]): Invoice[] {
      const invoices = new Array<Invoice>();
      productsEntity.forEach(invoiceEntity => {
        const invoice = this.toDomain(invoiceEntity);
        invoices.push(invoice.get());
      });
      return invoices;
    }
  }
  