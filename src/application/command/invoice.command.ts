export default class InvoiceCommand {
  
    public id?: string;
    public vendorId: number;
    public invoiceNumber: string;
    public invoiceDate: string;
    public invoiceTotal: number;
    public paymentTotal: number;
    public creditTotal: number;
    public bankId: number;
    public invoiceDueDate: string;
    public paymentDate: string;
    public currency: string;
 
  }
  