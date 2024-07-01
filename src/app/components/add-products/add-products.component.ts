import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal,ModalDismissReasons,NgbModule  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  form: FormGroup;
  selectedItems: any[] = [];
  availableItems = [
    {
      itemCode: 21,
      itemName: 'New Item 1',
      standardQty: '8.00 KG',
      RequiredQty: 50
    },
    {
      itemCode: 201,
      itemName: 'New Item 1',
      standardQty: '8.00 KG',
      RequiredQty: 50
    },
    {
      itemCode: 21,
      itemName: 'New Item 1',
      standardQty: '8.00 KG',
      RequiredQty: 50
    },
    {
      itemCode: 201,
      itemName: 'New Item 1',
      standardQty: '8.00 KG',
      RequiredQty: 50
    }
  ];

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) {
    this.form = this.formBuilder.group({
      itemCode: ['', Validators.required],
      productName: ['', Validators.required],
      batchSize: ['', Validators.required],
      productQty: ['', Validators.required]
    });
  }
  submit = false
  onSubmit() {
    this.submit = true
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);
    }
  }
  editItem(index: number) {
  }
  deleteItem(index: number) {
  }
  openProductModal(content:any) {
    this.modalService.open(content, { centered: true });
  }

  toggleSelected(item: any) {
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter((i) => i !== item);
    } else {
      this.selectedItems.push(item);
    }
  }

  addSelectedItems() {
    this.modalService.dismissAll()
    console.log('Selected Items:', this.selectedItems);
  }

}
