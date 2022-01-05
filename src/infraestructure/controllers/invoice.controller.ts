import {
    Controller,
    Get,
    Post,
    Res,
    HttpStatus,
    Body,
  } from '@nestjs/common';
import InvoiceCommand from 'src/application/command/invoice.command';
import BulkInvoiceUseCase from 'src/application/usecase/bulkInvoice.usecase';
import CreateInvoiceUseCase from 'src/application/usecase/createInvoice.usecase';
import GetInvoiceUseCase from 'src/application/usecase/getInvoice.usecase';
import GetInvoiceFilterUseCase from 'src/application/usecase/getInvoiceFilter.usecase';

@Controller('invoice/')
export default class InvoiceController {

    constructor(
        private readonly createInvoiceUseCase: CreateInvoiceUseCase,
        private readonly getInvoiceUseCase: GetInvoiceUseCase,
        private readonly getInvoiceFilterUseCase: GetInvoiceFilterUseCase,
        private readonly bulkInvoiceUseCase: BulkInvoiceUseCase
    ) {}

    @Get()
    public async getInvoices(
      @Res() request    
      ): Promise<any> {
      const invoices = await this.getInvoiceUseCase.handler();
      return request.status(HttpStatus.OK).json(invoices);
    }

    @Get('filter')
    public async getInvoicesFilter(
      @Res() request    
      ): Promise<any> {
      const { vendor, dateIni, dateFin} = request.req.query;
      const invoices = await this.getInvoiceFilterUseCase.handler(vendor, dateIni, dateFin);
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
 
    @Post('bulk')
    public async bulkInvoice(
      @Res() request,
    ): Promise<any> {
      debugger;
      const invoiceCreated = await this.bulkInvoiceUseCase.handler();
      return request.status(HttpStatus.CREATED).json(invoiceCreated);
    } 
}