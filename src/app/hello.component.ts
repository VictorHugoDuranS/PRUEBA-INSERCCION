import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: ``,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor () {

    let model : ModelI = {
        name : 'nombre del model',
        age: 12,
        address : {
          numero : 12,
          calle : 'calle del modelo'
        }
    }
    const newModel : Model = new Model();
    if( typeof newModel.name === 'string') {
        console.log('true');
    }


  }

}
export class AddressI {
  calle : string;
  numero : number;
}

export interface ModelI {

  name : string ;

  age : number;

  address : AddressI; 
}

export class Model {

  private _name : string ;

  private _age : number;

  private _address : Address;

  set name (value : string) {
    this._name  = value;
  }

  set age (value : number) {
    this._age = value;
  }

  set address (value : Address) {
    this._address = value;
  }

  get name () : string {
    return this._name;
  }

  get age () : number {
    return this._age;
  }

  get address () : Address {
    return this._address;
  }
}

export class Address  implements AddressI{

  private _calle : string;

  private _numero : number;

  set calle (value : string) {
    this._calle = value;
  }

  set numero (value : number) {
    this._numero = value;
  }

  get calle () : string {
    return this._calle;
  }

  get numero () : number {
    return this._numero;
  }

}



/**
 * Deep copy function for TypeScript.
 * @param T Generic type of target/copied value.
 * @param target Target value to be copied.
 * @see Source project, ts-deepcopy https://github.com/ykdr2017/ts-deepcopy
 * @see Code pen https://codepen.io/erikvullings/pen/ejyBYg
 */
export const deepCopy = <T>(target: T): T => {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime()) as any;
  }
  if (target instanceof Array) {
    const cp = [] as any[];
    (target as any[]).forEach((v) => { cp.push(v); });
    return cp.map((n: any) => deepCopy<any>(n)) as any;
  }
  if (typeof target === 'object' && target !== {}) {
    const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
    Object.keys(cp).forEach(k => {
      cp[k] = deepCopy<any>(cp[k]);
    });
    return cp as T;
  }
  return target;
};