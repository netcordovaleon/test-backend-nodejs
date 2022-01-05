import { Document } from 'mongoose';

export interface ClientEntity extends Document {
     companyName: string;
     internalId: string;
     taxId: string;
     typeCurrency: string;
     montlyFee: number;
  }
  