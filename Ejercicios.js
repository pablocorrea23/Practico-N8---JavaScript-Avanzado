function convertirTexto(texto) {
    //Crear una funcion para generar el hash de un texto como numero entero
    //Usando métodos ya establecidos
    //Aqui tu codigo

    let caracteres = texto.split('');

        //acc comienza en 0, es el acumulador de acc, com es entero vamos a acumular a partir del 0. (<<6, se desplaza 6 bits) (<<16, se desplaza 16 bits)
    return caracteres.reduce((acc, val) => (acc = val.charCodeAt(0) + (acc << 6) + (acc << 16) - acc), 0);
}
console.log(convertirTexto('hola'))


function HashTable() {
    //      Hash Table
    //      Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
    //      Para guardar un valor asociado a una key (string):
    //    - Correr la key a través de una función hash para transformarla a un número entero.
    //    - Establecer el par llave/valor en tu tabla hash -- Usa un set
    //    - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
    //      Aqui tu codigo


            /////////////////////////// no me sale ///////////////////////////

    // class TablaHash {
    //     constructor(){
    //         this.tabla = new Array(127);
    //         this.tamano = 0;
    //     }

    //     _hash(llave){
    //         let hash = 0;
    //         for (let i = 0; i < llave.length; i++){
    //             hash += llave.charCodeAt(i);
    //         }
    //         return hash % this.tabla.length;
    //     }

    //     set(llave, valor){
    //         const indice = this._hash(llave);
    //         this.tabla[indice] = [llave, valor];
    //         this.tamano++;
    //     }

    //     get(llave){
    //         const objetivo = this.hash(key);
    //         return this.tabla[objetivo];
    //     }
    // }
    // const ht = new TablaHash();
    // ht.set("Canada", 300);
    // ht.set("France", 100);
    // ht.set("Spain", 110);


    // console.log(ht.get("Canada"));
    // console.log(ht.get("France"));
    // console.log(ht.get("Spain"));
}
