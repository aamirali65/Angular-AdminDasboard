import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal,ModalDismissReasons,NgbModule  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  products = [
    {
      id: 2321,
      name: 'New Product 1',
      batch_size: '8,00 KG',
      qty: 50,
    },
    {
      id: 2122,
      name: 'New Product 2',
      batch_size: '8,00 KG',
      qty: 50,
    },
  ];

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) {
    this.form = this.formBuilder.group({
      itemCode: ['', Validators.required],
      itemName: ['', Validators.required],
      available_qty: ['', Validators.required],
      standard_qty: ['', Validators.required],
    });
  }
  form!: FormGroup;
  submit = false
  onSubmit() {
    this.submit = true
    if (this.form.valid) {
        const formData = this.form.value;
      console.log(formData);
      this.modalService.dismissAll()
    }
  }
  openProductModal(content:any) {
    this.modalService.open(content, { centered: true });
  }
  deleteItem() {
    console.log('delete')
  }
  editItem() {
    console.log('edit')
  }
}
