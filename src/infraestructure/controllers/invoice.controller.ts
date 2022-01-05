import {
    Controller,
    Get,
    Post,
    Res,
    HttpStatus,
    Body,
  } from '@nestjs/common';
import InvoiceCommand from 'src/application/command/invoice.command';
import CreateInvoiceUseCase from 'src/application/usecase/createInvoice.usecase';
import GetInvoiceUseCase from 'src/application/usecase/getInvoice.usecase';

@Controller('invoice/')
export default class InvoiceController {

    constructor(
        private readonly createInvoiceUseCase: CreateInvoiceUseCase,
        private readonly getInvoiceUseCase: GetInvoiceUseCase

    ) {}

    @Get()
    public async getInvoices(
      @Res() request    
      ): Promise<any> {
      const invoices = await this.getInvoiceUseCase.handler();
      return request.status(HttpStatus.OK).json(invoices);
    }

    @Post()
    public async createInvoice(
      @Res() request,
      @Body() invoice: InvoiceCommand,
    ): Promise<any> {
      const invoiceCreated = await this.createInvoiceUseCase.handler(invoice);
      return request.status(HttpStatus.CREATED).json(invoiceCreated);
    }
}