import { Schema } from 'mongoose';

const InvoiceSchema = new Schema({
    vendorId: Number,
    invoiceNumber: String,
    invoiceDate: String,
    invoiceTotal: Number,
    paymentTotal: Number,
    creditTotal: Number,
    bankId: Number,
    invoiceDueDate: String,
    paymentDate: String,
    currency: String,
 
});

export default InvoiceSchema;