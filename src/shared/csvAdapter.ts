import  Invoice from "src/domain/invoice";
import * as fs from 'fs';
const csv = require('csv-parser')
 
export default class CsvAdapter {

    public getInvoicesFromFile() : Promise<Invoice[]> {

        const x = new Promise<Invoice[]> ((resolve, reject)=> {
            const invoices: Array<Invoice> = [];
            fs.createReadStream('invoices.csv')
            .pipe(csv())
            .on('data',  (item) => {
                const invoice: Invoice = {};
                invoice.vendorId = item.VENDOR_ID;
                invoice.invoiceNumber = item.INVOICE_NUMBER;
                invoice.invoiceDate = (item.INVOICE_DATE && new Date(item.INVOICE_DATE)) || null
                invoice.invoiceTotal = item.INVOICE_TOTAL;
                invoice.paymentTotal = item.PAYMENT_TOTAL;
                invoice.creditTotal = item.CREDIT_TOTAL;
                invoice.bankId = item.BANK_ID;
                invoice.invoiceDueDate = (item.INVOICE_DUE_DATE && new Date(item.INVOICE_DUE_DATE)) || null;
                invoice.paymentDate = (item.PAYMENT_DATE && new Date(item.PAYMENT_DATE)) || null;
                invoice.currency = item.CURRENCY;
                invoices.push(invoice);
            }).on('end',  () => {
                resolve(invoices);
            });

        });
        return x;
    }
}