import { Schema } from 'mongoose';

const ClientSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  internalId: String,
  taxId: String,
  typeCurrency: String,
  montlyFee: Number
});

export default ClientSchema;