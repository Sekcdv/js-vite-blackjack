import _ from "underscore";


// export const miNombre = 'Kedryck'

/**
 *  Esta función crea un nuevo deck 
 * @param {array<String>} tiposDeCarta Ejemplo : ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplo : ['A','J','Q','K']
 * @returns {array<String>} regresa un nuevo deck de cartas 
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

      if (!tiposDeCarta  || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio como arreglo de strings');
      if (!tiposEspeciales  || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio como arreglo de strings');
      
    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;