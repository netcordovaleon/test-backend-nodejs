import { Document } from 'mongoose';

export default class InvoiceEntity extends Document {
  
    id?: string;
    vendorId: number;
    invoiceNumber: string;
    invoiceDate: string;
    invoiceTotal: number;
    paymentTotal: number;
    creditTotal: number;
    bankId: number;
    invoiceDueDate: string;
    paymentDate: string;
    currency: string;

}