export default class Client {
  
    public id?: string;
    public companyName: string;
    public internalId: string;
    public taxId: string;
    public typeCurrency: string;
    public montlyFee: number;
  
    constructor(
      id: string,
      companyName: string,
      internalId: string,
      taxId: string,
      typeCurrency: string,
      montlyFee: number
    ) {
      this.id = id;
      this.companyName = companyName;
      this.internalId = internalId;
      this.taxId = taxId;
      this.typeCurrency = typeCurrency;
      this.montlyFee = montlyFee || 0;
    }

  }
  