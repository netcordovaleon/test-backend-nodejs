export default class Invoice {
  
    public id?: string;
    public vendorId?: number;
    public invoiceNumber?: string;
    public invoiceDate?: Date;
    public invoiceTotal?: number;
    public paymentTotal?: number;
    public creditTotal?: number;
    public bankId?: number;
    public invoiceDueDate?: Date;
    public paymentDate?: Date;
    public currency?: string;

    constructor(
      id: string,
      vendorId: number,
      invoiceNumber: string,
      invoiceDate: Date,
      invoiceTotal: number,
      paymentTotal: number,
      creditTotal: number,
      bankId: number,
      invoiceDueDate: Date,
      paymentDate: Date,
      currency: string

    ) {
      this.id = id;
      this.vendorId = vendorId || 0;
      this.invoiceNumber = invoiceNumber;
      this.invoiceDate = invoiceDate;
      this.invoiceTotal = invoiceTotal || 0;
      this.paymentTotal = paymentTotal || 0;
      this.creditTotal = creditTotal || 0;
      this.bankId = bankId;
      this.invoiceDueDate = invoiceDueDate;
      this.paymentDate = paymentDate;
      this.currency = currency;
    }

  }
  