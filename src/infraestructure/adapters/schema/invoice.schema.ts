import { Schema } from 'mongoose';

const InvoiceSchema = new Schema({
    vendorId: Number,
    invoiceNumber: String,
    invoiceDate: Date,
    invoiceTotal: Number,
    paymentTotal: Number,
    creditTotal: Number,
    bankId: Number,
    invoiceDueDate: Date,
    paymentDate: Date,
    currency: String,
 
});

export default InvoiceSchema;