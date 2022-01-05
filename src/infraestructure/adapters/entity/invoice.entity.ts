import { Document } from 'mongoose';

export default class InvoiceEntity extends Document {
  
    id?: string;
    vendorId: number;
    invoiceNumber: string;
    invoiceDate: Date;
    invoiceTotal: number;
    paymentTotal: number;
    creditTotal: number;
    bankId: number;
    invoiceDueDate: Date;
    paymentDate: Date;
    currency: string;

}