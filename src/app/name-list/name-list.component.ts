import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

pessoas: any = [
  {id:1, nome: 'João', salario: 5000},
  {id:1, nome: 'Maria', salario: 1000},
  {id:1, nome: 'Jose', salario: 2000},
  {id:1, nome: 'Pedro', salario: 3000},
  {id:1, nome: 'Felipe', salario: 10000},
  {id:1, nome: 'Bruce', salario: 800}
]

getValorTotal(): Number{
  return this.pessoas.reduce(
    (soma, pessoas) => soma + pessoas.salario, 0);
}

buscarId(id){
  return this.pessoas.find(pessoa => pessoa.id == id);
}

aumentarSalario(percentual){
  this.pessoas.map(pessoa =>
    pessoa.salario+= pessoa.salario * percentual/100
    )
}

verificandoSalario(valor:Number){
  return this.pessoas.every(pessoa => pessoa.salario > valor);
}

buscaCampos(criterio:string){
return this.pessoas.filter((pessoa)=>
Object.keys(pessoa).some
  (chave=> pessoa[chave].toString().includes(criterio)));
}

  nomes: string[] = ['joão', 'joão', 'joão', 'maria', 'pedro', 'felipe', 'bruce'];
  nomesFiltro: string[] = [];

  buscar(valor:string){
    this.nomesFiltro= [];

    //metodo 1
    for(var i = 0; i < this.nomes.length; i++){
        if(this.nomes[1].toLowerCase().includes(valor.toLowerCase())){
          this.nomesFiltro.push(this.nomes[i]);
        }
    }
    //metodo 2
    let temp = [];
    this.nomes.forEach(buscarItem);
    function buscarItem(nome){
      if(nome.toLowerCase().includes(valor.toLowerCase())){
        temp.push(nome);
      }
    }
    this.nomesFiltro = temp;

    // Metodo 3
    this.nomesFiltro = this.nomes.filter(function(nome){
      return nome.toLowerCase().includes(valor.toLowerCase());
    });

    //metodo 4

    this.nomesFiltro = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase()));  
  }
}
