import { Component, OnInit } from '@angular/core';
import { products } from '../model/products';

@Component({
  selector: 'spa-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaProdutos: products[] = [
    { titulo: 'Teste', imagem: 'https://i.imgur.com/Ls4jLig.png', descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.' },

    { titulo: 'Teste', imagem: 'https://i.imgur.com/k91lKyp.png', descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.' },

    { titulo: 'Teste', imagem: 'https://i.imgur.com/t09abe2.png', descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.' },

    { titulo: 'Teste', imagem: 'https://i.imgur.com/AWVIP3q.png', descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.' },

    { titulo: 'Teste', imagem: 'https://i.imgur.com/om49LSX.png', descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.' },

  ]

}
