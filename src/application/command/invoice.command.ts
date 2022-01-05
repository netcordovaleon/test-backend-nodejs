export default class InvoiceCommand {
  
    public id?: string;
    public vendorId: number;
    public invoiceNumber: string;
    public invoiceDate: Date;
    public invoiceTotal: number;
    public paymentTotal: number;
    public creditTotal: number;
    public bankId: number;
    public invoiceDueDate: Date;
    public paymentDate: Date;
    public currency: string;
 
  }
  