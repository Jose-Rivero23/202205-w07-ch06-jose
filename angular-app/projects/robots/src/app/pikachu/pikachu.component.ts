import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-pikachu',
  template: `
    <p>
      pikachu works!
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt=""
        width="600px"
      />
    </p>
  `,
  styles: [],
})
export class PikachuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
