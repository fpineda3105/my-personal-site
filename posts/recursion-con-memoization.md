---
title: 'Una breve historia de Dragones, recursión y memoization'
date: '2020-11-18'
tags: 'fundamentos, Ciencias de la computación, algoritmos'
type: 'normal'
description: 'Mejorando la recursión usando memoization'
preview: 'En tiempos antiguos, antes de que los computadores fueran inventados, alquimistas estudiaron las propiedades míticas de los números. Como no había computadores, tenían que acudir a dragones para hacer el trabajo.'
---

> *"Para entender la recursión primero debemos entender la recursión"*  
> *anónimo*

### Martin y el Dragón
En tiempos antiguos, antes de que los computadores fueran inventados, alquimistas estudiaron las propiedades míticas de los números. Como no había computadores, tenían que acudir a dragones para hacer el trabajo. Los dragones eran bestias inteligentes pero también perezosos y malhumorados.

Un día un alquimista le dio a Martin una lista de números y lo envió a una cueva para que le preguntase al dragón si alguno de esos números era impar. Martin no había estado en la cueva antes, así que tomó una vela y fue entrando tímidamente y con cuidado hasta encontrar en el fondo a un viejo dragón.

<div class="post-container-image">
<img src="/images/dragones_recursion_memoization/slepping_dragon.jpg" alt="Dragon en cueva" title="Dragon en cueva" class="post-medium-image"/>
</div>

> *"Que quieres?"*  -gruñó el dragón mientras lo miraba con sospecha-  
> *"Por favor, dragón tengo una lista de números y necesito saber si alguno es impar"*  -dijo Martin-  
> *"Aquí está"*  -escribió la lista en el suelo con su dedo-  
> **(3142, 5798, 6550, 8914)**  
> *"Lo siento chico"*  -dijo el dragón, en tono malhumorado y continuó...-  
> *"Podría estar dipuesto a decirte si el primero de esa lista es impar, pero es lo mejor que puedo hacer"*  
> *"Pero necesito saber si algún número de la lista es impar, no solo el primero"*  -le explicó Martin-  
> *"Qué lástima por tí!"*  -y el dragón continuó...-  
> *"Solo voy a mirar el primero de la lista. Pero puedo mirar todas las listas que quieras, una a la vez"* 
> -Martin pensó por un momento. Tenía que haber una forma de evitar el mal humor.  
> *"Qué tal esta lista?"* -preguntó señalando la que había dibujado en el suelo-  
> **(3142, 5798, 6550, 8914)**  
> *"El primer número de la lista no es impar"* -dijo el dragón-  
> -Luego Martin cubrió el primer elemento de la lista con su mano y dibujó un nuevo paréntesis quedando:  
> **(5798, 6550, 8914)**
> *"Y ahora esta lista?"*  
> *"El primer número de la lista no es impar"* -respondió el dragón-  
> -Martin hizo el mismo proceso, quedando:  
> **(6550, 8914)**  
> *"El primer número de la lista tampoco es impar"* -repitió el dragón-  
> -repitió el proceso hasta quedar:  
> ()  
> "Esa es una lista vacía, no puede haber un número impar porque no hay nada allí" -volvió el dragón-  
> "Bien, ahora sé que no hay ningún número impar en la lista, todos son par" -exclamó Martin-  
> "Yo NUNCA dije eso!!" -gritó el dragón-  
> -Y Martin dibujó todas las listas que le preguntó al dragón-  
> **(3142, 5798, 6550, 8914)**  
> **(5798, 6550, 8914)**  
> **(6550, 8914)**  
> **(8914)**  
> **()**  
> "No lo ves? diciéndome que el primer elemento de cada lista no es impar, entonces ninguno de mi lista es impar." -preguntó Martin-  
> "Eso es bastante complicado, parece que has descubierto la recursión, pero no me preguntes qué significa, tendrás que descubrirlo por tu cuenta." -finalizó el dragón-

> **Nota:** la historia es extraída tal cual del libro [Common LISP: A Gentle Introduction to Symbolic Computation](#-referencias)

### Recursión

Seguramente sepas que en la historia anterior, podemos hacer un ciclo e iterar la lista y preguntar por cada elemento si es impar hasta llegar al final de la lista. A través de la Recursión podemos hacer exactamente lo mismo pero de una forma diferente llamándonos a sí mismos (en este caso a una función).

Veamos la conversación de Martin y el Dragon usando JavaScript:

```js

function isOdd( number ) {
    return number % 2 != 0;
}

function isAnyOddNumberIn( numbers ) {
    // caso base
    if (numbers.length === 0) {
        return false;
    }
    // obtenemos primer elemento y el resto en 2 variables
    let [firstNumber, ...rest] = numbers;
    // preguntamos si es Par el primer elemento 
    if (isOdd( firstNumber )) {
        return true;
    }        
    // si no es Par, volvemos a preguntar con el resto de la lista
    return isAnyOddNumberIn( rest );    
}

let numbers = [3142, 5798, 6550, 8914];

console.log(isAnyOddNumberIn( numbers )); // false
```

#### Caso Base

 Saber cuando detenerse. Lo primero que podemos ver en la función **isAnyOddNumberIn(numbers)** es que hay un caso base, preguntamos si la lista está vacía, es la forma en la que finalizamos la recursión. Siempre debe haber un caso base sino queremos que suceda un error o tener un resultado inesperado.

#### Los argumentos

La idea es que en cada iteración nuestro problema sea cada vez más pequeño. En este caso tenemos un sólo argumento que es la lista de números, en cada llamada la lista es más pequeña. Si no disminuimos la lista o utilizamos siempre la misma, entrará en un ciclo infinito y ocasionará eventualmente el famoso Stack Overflow.

#### Contexto de ejecución y Stack
La información acerca de la ejecución de una función es almacenada en un **contexto de ejecución**. Es una estructura de datos que contiene los detalles de la ejecución de una función, tales como: qué instrucción se está ejecutando, las variables, etc.

En cada llamada se pausa la ejecución actual y se apila en un Stack el contexto actual. La mayoría de los lenguajes usan un [Call Stack](https://en.wikipedia.org/wiki/Call_stack) para almacenar los contextos de ejecución y colocan un límite para evitar un [Stack Overflow](https://en.wikipedia.org/wiki/Stack_overflow).

#### El camino más largo en una pirámide

```lisp
       /5/  
      /4/ 3  
     /7/ 9 7  
    /9/ 7 6 5
   /8/ 2 4 8 6
 ```

Este es un problema que se puede hacer con recursión, haciendo un análisis, podemos hacer un recorrido hacia abajo, hasta llegar a la base de la pirámide luego desde abajo ir sumando y verificando la suma o elemento máximo de cada lado dependiendo de la posición en la que estemos.

Si nos posicionamos en el primer escalón de la pirámide y sumamos con el máximo entre el lado izquierdo y derecho, veremos:

```lisp

 -> (9) (7) (6) (5)  = 17  11  14  13
   8/  2  \4  \8/  6
```

 > **Nota:** del lado derecho calculamos la suma acumulada en la posición respectiva eligiendo el máximo de cada lado.

Y si subimos al otro escalón quedaría:

```lisp
->   (7) (9) (7) =  24 23 21
    9/  7  \6/  5
   8/ 2   4  \8   6
```

nuevamente:

```lisp
->    (4) (3) = 28 26
     7/  9/ 7  
    9/  7 \6 5
   8/  2 4 \8 6
 ```

Y finalmenente:

```lisp
->     /5/  = 33
      /4/ 3  
     /7/ 9 7  
    /9/ 7 6 5
   /8/ 2 4 8 6
 ```

Si vemos la solución de este algoritmo:

```js
function maxPathWeight( pyramid, floor, position ) {
    let currentNode = pyramid[floor][position];
    // cuando llegamos a la base de la piramide, retornamos
    // para acumularlo
    if (floor === pyramid.length - 1){
        return currentNode;
    }
    // calculamos el acumulado del lado izquierdo hacia abajo
    let leftPath = currentNode + maxPathWeight(pyramid, floor + 1, position);
    // calculamos el acumulado del lado derecho hacia abajo
    let rightPath = currentNode + maxPathWeight(pyramid, floor + 1, position + 1);
    // retornamos el máximo de los acumulados
    return Math.max(leftPath, rightPath);
}

function longestPath( pyramid ) {
    // comenzamos desde la raíz la posición [0][0]
    return pathWeight(pyramid, 0, 0);
}

let pyramid =
    [
    [5],
    [4, 3],
    [7, 9, 7],
    [9, 7, 6, 5],
    [8, 2, 4, 8, 6]];

console.log( longestPath( pyramid ) ); // 33
```

### &#x1F4DA; Referencias

- [Common LISP: A Gentle Introduction to Symbolic Computation](http://www.cs.cmu.edu/~dst/LispBook/book.pdf)
- [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science))