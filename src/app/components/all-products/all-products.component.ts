import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal,ModalDismissReasons,NgbModule  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products = [
    {
      id: 1,
      name: 'New Product 1',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 2,
      name: 'New Product 2',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 1,
      name: 'New Product 1',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 2,
      name: 'New Product 2',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 1,
      name: 'New Product 1',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 2,
      name: 'New Product 2',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 1,
      name: 'New Product 1',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
    {
      id: 2,
      name: 'New Product 2',
      batch_size: '8,00 KG',
      qty: 50,
      date: '10/24/2002',
    },
  ];
  constructor(private modalService: NgbModal) {
  }
  selectedProduct: any;
  openProductModal(content:any) {
    this.modalService.open(content, { centered: true });
  }
}
