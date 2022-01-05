import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Optional } from 'typescript-optional';
import { InjectModel } from '@nestjs/mongoose';
import { InvoiceRepository } from 'src/domain/ports/invoice.repository';
import InvoiceEntity from './entity/invoice.entity';
import Invoice from 'src/domain/invoice';
import InvoiceMapper from '../mapper/invoice.mapper';

@Injectable()
export default class InvoiceRepositoryMongo implements InvoiceRepository {
  constructor(
    @InjectModel('Invoice') private readonly invoiceModel: Model<InvoiceEntity>,
  ) {}
    public async getAll(): Promise<Invoice[]> {
        const clients = await this.invoiceModel.find();
        return InvoiceMapper.toDomains(clients);
    }
    public async getInvoice(invoiceId: string): Promise<Optional<Invoice>> {
        const client = await this.invoiceModel.findById(invoiceId);
        return InvoiceMapper.toDomain(client);
    }
    public async createInvoice(invoice: Invoice): Promise<Optional<Invoice>> {
        let invoiceCreated = new this.invoiceModel(invoice);
        invoiceCreated = await invoiceCreated.save();
        return InvoiceMapper.toDomain(invoiceCreated);
    }
    public async deleteInvoice(invoiceId: string): Promise<Optional<Invoice>> {
        const invoiceDelete = await this.invoiceModel.findByIdAndDelete(invoiceId);
        return InvoiceMapper.toDomain(invoiceDelete);
    }
    public async updateInvoice(invoiceId: string, invoice: Invoice): Promise<Optional<Invoice>> {
        const invoiceUpdated = await this.invoiceModel.findByIdAndUpdate(
            invoiceId,
            invoice,
            { new: true },
          );
          return InvoiceMapper.toDomain(invoiceUpdated);
    }
}