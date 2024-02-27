import { Item } from './../../interfaces/iItem';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnDestroy(): void {
    console.log('Item deletado.')
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    if(this.item.comprado === true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deletarItem() {
    console.log('Deletando item.');
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
