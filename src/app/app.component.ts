import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface CampaignElement {
  position: number,
  campaign: string;
  dni_deudor: string;
  dllamada: string;
  entidad: string;
  estado: string;
  horafin: string;
  horainicio: string;
  idcall: string;
  idcampaign: string;
  deuda: number;
  deudor: string;
  telefono: string;
}

const ELEMENT_DATA: CampaignElement[] = [
  {position: 1, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 2, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 3, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 4, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 5, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 6, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 7, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 8, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 9, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 10, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 11, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 12, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 13, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 14, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 15, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 16, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 17, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 18, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 19, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 20, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'material';
  displayedColumns: string[] = ['position', 'campaign', 'dni_deudor', 'dllamada', 'entidad', 'estado', 'horafin', 'horainicio', 'idcall', 'idcampaign', 'deuda', 'deudor', 'telefono'];
  dataSource: MatTableDataSource<CampaignElement>;
  copiaData: MatTableDataSource<CampaignElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idcampaign: string = ""; desde: string = ""; hasta: string = "";
  contesto: boolean = false; nocontesto: boolean = false;
  pago: boolean = false; nopago: boolean = false; nullresult: boolean = false;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.copiaData = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.copiaData.paginator = this.paginator;
    this.copiaData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDesde(event: Event) {  this.desde = (event.target as HTMLInputElement).value; }
  onHasta(event: Event) {  this.hasta = (event.target as HTMLInputElement).value; }
  setContesto(event: MatCheckboxChange) { this.contesto = event.checked; }
  setNoContesto(event: MatCheckboxChange) { this.nocontesto = event.checked; }
  setPago(event: MatCheckboxChange) { this.pago = event.checked; }
  setNoPago(event: MatCheckboxChange) { this.nopago = event.checked; }
  onBuscar() {
    if (this.contesto == true || this.nocontesto == true || this.pago == true || this.nopago == true) {
      this.nullresult = true;
    } else if (this.desde != "" || this.hasta != "") {
      const AUXILIAR_DATA: CampaignElement[] = [];
      for (let entry of ELEMENT_DATA){
        if (entry.horainicio.substring(0,10) > this.desde && this.desde != "") {  AUXILIAR_DATA.push(entry); } 
        else if (entry.horainicio.substring(0,10) < this.hasta && this.hasta != "") { AUXILIAR_DATA.push(entry); } 
      }
      if (AUXILIAR_DATA.length == 0) {
        this.nullresult = true;
      } else {
        this.nullresult = false;
        this.dataSource = new MatTableDataSource(AUXILIAR_DATA);
        if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
      }
    } else {
      this.dataSource = this.copiaData;
      if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
      this.nullresult = false; 
    }
  }
}
