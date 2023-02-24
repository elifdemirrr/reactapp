//bu class componenti ileride fonksiyon componenti de oluşturulacak.
import React, { Component } from 'react'

export default class User extends Component { //videoda eski sürümde exportu kendisi yapıyor. Başka classlarda kullanmamız için
  render() {
    return (
      <div>
        <form>
        <input type="text"></input>
        <button>Gönder</button>

        </form>
       
      </div> //bu componentleri başka componentlere export, import ve direkt içine yerleştirebiliriz.
    )
  }
}
