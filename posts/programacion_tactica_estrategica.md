---
title: 'Programación táctica vs estratégica'
image: "https://fpinedadev.com/images/programacion_tactica_estrategica/man_thinking.jpg"
date: '2021-07-28'
tags: 'diseño de software'
type: 'normal'
description: 'Notas importantes acerca del libro A Philosophy of Software Design del autor John Ousterhout'
preview: 'Alguna vez te has encontrado con código que no entiendes la razón por la cual se hizo de esa manera? 🤔...'
---

Alguna vez te has encontrado con código que no entiendes la razón por la cual se hizo de esa manera? 🤔

<figure class="post-container-image">
    <img src="/images/programacion_tactica_estrategica/man_thinking.jpg" alt="Dragon en cueva" title="Pensando" class="post-big-image"/>
<figcaption class="post-image-footer"> imagen de: </br> <a href='https://www.freepik.com/vectors/people'>People vector created by jcomp - www.freepik.com</a> </figcaption>
</figure>

Puede ser algo tan simple como el nombre de una variable, el nombre de un método, como también podría ser mas complejo como el diseño de una clase o el de una API.

El libro [A Philosophy of Software Design](https://www.amazon.com/-/es/John-Ousterhout/dp/1732102201/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=323K98Y2I9LGR&dchild=1&keywords=philosophy+of+software+design&qid=1627485592&sprefix=philosophy+of%2Caps%2C251&sr=8-1) de John Ousterhout, el autor expone un conjunto de buenas y malas practicas que permiten diseñar sistemas de software minimizando o aumentando la complejidad del mismo, y uno de los conceptos que me pareció muy interesante, fue la elegante definición de programación táctica y programación estratégica como un mindset, veamos de que se trata, pero primero hablemos de una palabra que mencione anteriormente **complejidad**.

## &#x1F30C; ¿Qué es complejidad?

> "Es cualquier cosa relacionada con la estructura de un sistema de software que hace que sea difícil de entender y modificar".

La habilidad para reconocer complejidad en el diseño de software es una habilidad critica, dado que la complejidad puede tomar muchas formas, por ejemplo:

- Dificultad para entender un bloque de código.
- Agregar pequeñas mejoras requiere modificar muchas partes del sistema.
- Dificultad para reconocer en que módulos se debe hacer modificaciones para agregar nuevas funcionalidades.
- Dificultad para resolver un bug sin el miedo a introducir nuevos bugs.
- ...
  
> "Si un sistema es difícil de entender y modificar, entonces tiene una complejidad alta; si es fácil de entender y modificar, entonces tiene una complejidad baja o es simple"

### Pero como podemos mejorar la complejidad del software?

El autor expone una serie de buenas y malas practicas que van a permitir diseños con menor o mayor complejidad. Veamos la que en mi opinión, es la mas importante, relacionada con el mindset del programador y/o la organización.

## &#x1F407; Programación táctica

Se refiere al estilo de programación en el cual el foco es tener algo funcional, hacer la funcionalidad que se pide lo mas pronto que se pueda, una vez que funciona, el programador da por finalizada la tarea. Es un mindset que principalmente nace del programador y que estoy de acuerdo con el autor en que es el estilo de la mayoría de los programadores y que otras veces se extiende hacia y/o es parte de la organización.

En esta era de "agilidad" que practican muchas organizaciones también se hace presente este mindset dada la urgencia de entregar "valor" rápidamente a los usuarios.

A la larga este mindset adoptado hace que el software se haga más complejo.

## &#x1F422; Programación estratégica

Es un mindset en el cual el programador o diseñador de la solución se da cuenta que el **código que funciona** no es suficiente. Lo mas importante es:

- Producir un diseño simple.
- El mantenimiento o la estructura del software a largo plazo.
- No introducir complejidad innecesaria.
- Facilitar a futuro la añadidura de nuevas funcionalidades.
- ...

Es una inversión de tiempo, al principio requiere de esfuerzo, pero luego se vuelve un hábito y se vuelve parte de nuestra mejora continua.

### &#x1F52E; Que puedo hacer para mejorar mi mindset?

Práctica, práctica y más práctica &#x1F939; no hay un atajo. Aquí algunos consejos:

### &#x1F57A; Deja el código mejor de lo que lo encontraste

Es un mantra que yo sigo, ser un mejor programador y/o diseñador de software es una mejora constante, día a día, si te encuentras con código que se puede mejorar, hazlo. No solo estarás mejorando el código base y lo hará cada vez más mantenible, sino también te servirá de practica en tu proceso de mejora continua.

### &#x1F680; Diseña por lo menos 2 veces

A la hora de abordar una solución diseñala 2 veces con estrategias distintas, luego haz una comparación de ambas, los pro y los contras, puede que incluso te encuentres con una solución intermedia que se adapte mejor a las necesidades actuales y futuras.

### &#x1F575; Escribe tests correctamente

Escribir una extensiva suite de tests y de manera correcta te permite hacer mejoras continuas al código sin el miedo a romper cosas o introducir nuevos bugs, una extensiva suite de tests permite refactorizar código constantemente y de manera más segura.

### &#x270D; Escribir comentarios

La mayoría de los programadores pasamos mas tiempo leyendo código que escribiéndolo.

Yo 🙋‍♂️ antes de leer el libro, era de los que pensaba que escribir comentarios no ayudaba en nada, pero no es así. Escribir buenos comentarios también es una habilidad critica. Saber reconocer donde y qué escribir en un comentario es sumamente util para los futuros mantenedores del software. por ejemplo, veamos el código de un simple método, **substring** de la clase **String** de Java:

```java
...
 public String substring(int beginIndex, int endIndex)
```

sabemos que retorna el substring de un String, pero ¿El indice de fin es inclusivo o exclusivo?

Un comentario evitaría que el programador tenga que hacer una prueba o entrar al código de la implementación para saber si se incluye o no se incluye el indice de fin.

Existen ejemplos mucho mas complejos que nos encontramos dia a dia, en los que tenemos que ingresar a la implementación para conocer los detalles de la misma, cuando en realidad un comentario o un diseño simple nos debería abstraer de los detalles de implementación.

Una estrategia que propone el autor es escribir comentarios antes de la implementación, de hecho te puede ayudar a encontrar mejoras en tu diseño.

## &#x1F4DD; Conclusiones

Un libro recomendado para todos aquellos que quieran seguir mejorando sus habilidades a la hora de diseñar software. Es un trabajo continuo, nadie es lo suficientemente bueno como para diseñar algo que no tenga que evolucionar y hacer ajustes al diseño inicial. Sin embargo, se puede mitigar mucha complejidad tomando un pequeño tiempo extra que permita diseñar lo mejor que se pueda en ese momento antes de implementar nuevas funcionalidades.

¿Y tú hacia que lado te inclinas mas? ¿Programador táctico o programador estratégico?
En caso de darte cuenta de que la mayoría de las veces adoptas un mindset de programación táctica, espero que este articulo te ayude a mejorar tus habilidades y adoptar un mindset más estratégico.

Y por último dejo una cita [John Ousterhout, A Philosophy of Software Design](https://ww.amazon.com/-/es/John-Ousterhout/dp/1732102201/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=323K98Y2I9LGR&dchild=1&keywords=philosophy+of+software+design&qid=1627485592&sprefix=philosophy+of%2Caps%2C251&sr=8-1):
> *«Your job as a developer is not just to create code that you can work with easily, but to create code that others can also work with easily.»*

### &#x1F4DA; Referencias

- [A Philosophy of Software Design](https://ww.amazon.com/-/es/John-Ousterhout/dp/1732102201/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=323K98Y2I9LGR&dchild=1&keywords=philosophy+of+software+design&qid=1627485592&sprefix=philosophy+of%2Caps%2C251&sr=8-1)
