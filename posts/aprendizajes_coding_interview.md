---
title: 'Aprendizajes de una coding interview'
date: '2020-10-20'
tags: 'fundamentos, coding interview, codigo limpio, personal'
type: 'normal'
description: 'Aprendizajes adquiridos luego de una coding interview'
preview: 'Un problema que resolver, un editor, tus coding skills y un tiempo determinado para resolverlo &#x231A;...'
---

Un problema que resolver, un editor, tus coding skills y un tiempo determinado para resolverlo &#x231A;.

<div class="post-container-image">
<img src="/images/aprendizajes_coding_interview/coding-working-workspace_.jpg" alt="Coding" title="Coding" class="post-medium-image">
</div>

Consistía en consumir un endpoint con una petición *http://* obtener de la respuesta la cantidad de edades mayores o iguales a 50 e imprimirlo en consola.  

Parece que no es muy complejo no? &#x1F914; véamos:

### Los datos de entrada &#x1F4E9;

El formato de la respuesta *http* era como el siguiente:

```json
{"data":"key=IAsdpK, age=58, key=WdNVdi, age=64, key=jsd9zt, age=47,  
key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29,  
key=XZbHV, age=32, key=k1SN5, age=88,key=4SCsU,  age=65, key=q3saG6, age=33,  
key=MGdpf, age=13, key=Kjd6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24"}
```

### Análisis del algoritmo &#x1F4D0;

Ahora que conocemos el detalle de la respuesta, el algoritmo sería algo así:

- primero debemos hacer la petición *Http* y obtener la respuesta.

- de la respuesta, separar el **value** del atributo **data**.

- eliminar los caracteres innecesarios y dejar solo los valores de las edades (*age*).

- convertirlo en un arreglo o lista de edades para operarlo.

- iterar y filtrar las edades que sean mayor o igual a 50.
  
### La solución &#x1F913; &#x1F4BB;

Debía hacerlo con un lenguaje seleccionado, en este caso yo usé **Java**.  

```java
public static void main (String[] args) {
    System.setProperty("http.agent", "Chrome");

    //Utilizado para el response
    StringBuilder response = new StringBuilder();

    try {
      URL url = new URL("https://.../api/challenges/json/ages");
      try {
        // Abro conexión http
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        BufferedReader in = new BufferedReader(
          new InputStreamReader(connection.getInputStream()));

        String inputLine;

        // Obtengo la respuesta
        while ((inputLine = in.readLine()) != null) {
          response.append(inputLine);
        }

         // Separo data de value, obtengo el value, usando una expresion regular
         // Remplazo los caracteres innecesarios,
         // Separo las ages en un arreglo, las convierto en un Stream, 
         // Filtro los mayores a 50 y cuento la cantidad de ellos.
        long result = Stream.of(response.toString().split(":")[1]
        .replaceAll("(key=)[a-zA-z0-9]+,\\s(age=)|[\\\"\\s\\}]?","").split(","))
        .filter(element -> Integer.parseInt(element) >= 50).count();

        // Imprimo resultado en consola
        System.out.println(result);

      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }  
```

> observen bien el código &#x1F440; a ver si detectan algunas mejoras.

### El post envío de la solución &#x1F9D0;

Bueno ese código es terrible &#x1F480;, aunque soluciona el problema planteado carece de algunas cosas :

- para empezar he olvidado hacer el *close* del *BufferedReader*.

- el resultado está todo en un solo paso y se hace muy difícil entender lo que hace. Carece de [codigo limpio](https://www.amazon.com/-/es/Robert-C-Martin/dp/0132350882).

Aunque sea un problema específico y no muy complejo, no debemos olvidar que nuestro código habla por nosotros &#x1F5E3;.

Me quedé con la idea de que no lo hice lo mejor que pude, quizás estaba nervioso o estaba más pendiente del tiempo &#x231A;.

Así que lo hice nuevamente con un poco más de calma.

### Refactorización &#x1F9E0;

Algo sencillo con lo que podemos comenzar es separar la expresión regular en una variable:

```java
  final String UNNECESSARY_DATA = "(key=)[a-zA-z0-9]+,\\s(age=)|[\\\"\\s\\}]?";

  long result = Stream.of(response.toString().split(":")[1]
      .replaceAll(UNNECESSARY_DATA,"").split(","))      
      .filter(element -> Integer.parseInt(element) >= 50).count();
```

> ***Nota***: al hacer un replace con las expresión regular nos queda algo así:
> ```java
> "58,64,47,68,76,79,29,32,88,65,33..."  
> ```
> y haciendo el split algo así:
 ```java
> ["58","64","47","68","76","79","29","32","88","65","33"...]  
> ```

también podemos extraer el response de la *HttpURLConnection* en otro método:

```java
  static String extractResponseFrom (final HttpURLConnection connection) throws IOException {

      StringBuilder response = new StringBuilder();

      BufferedReader in = new BufferedReader(
        new InputStreamReader(connection.getInputStream()));

      String inputLine;
      while ((inputLine = in.readLine()) != null) {
          response.append(inputLine);
      }

      in.close();

      return response.toString();
  }
```

quedando hasta ahora así:

```java
  public static void main(String args[]) {
      try
      {
          URL url = new URL("https://.../api/challenges/json/ages");
          HttpURLConnection connection = (HttpURLConnection) url.openConnection();

          String response = extractResponseFrom(connection);

          long result = Stream.of(response.split(":")[1]
            .replaceAll(UNNECESSARY_DATA,"").split(","))
            .filter(element -> Integer.parseInt(element) >= 50).count();

          System.out.println(result);

      }
      catch (Exception e) {
          System.out.println(e.toString());
      }
  }
```

Creen que se puede mejorar aún más?

Pues sí, utilicemos la programación orientada a objetos para seguir mejorándolo.

Creemos una clase que encapsule la data que devuelve el *API* y agreguemos algunos métodos con [responsabilidad única](https://es.wikipedia.org/wiki/Principio_de_responsabilidad_%C3%BAnica) y un truco (retornar ***this***) para encadenar los métodos y realizar una solución más [declarativa](https://en.wikipedia.org/wiki/Declarative_programming):

```java
  static class Data {
      private static final String UNNECESSARY_DATA = "(key=)[a-zA-z0-9]+,\\s(age=)|[\\\"\\s\\}]?";
      private String data;

      Data(String value) {
          this.data = value;
      }

      Data getValue() {
          data = data.split(":")[1];
          return this;
      }

      Data retrieveAges() {
          data = data.replaceAll(UNNECESSARY_DATA, "");
          return this;
      }

      Stream<String> toStream() {
          return Stream.of(data.split(","));
      }
  }
```

Incorporemos otra pequeña mejora a la hora de filtrar las edades (ages) utilizando la interfaz de Predicados

```java
  static class GreaterThan50 implements Predicate<String> {

      @Override
      public boolean test(String element) {
          return Integer.parseInt(element) >= 50;
      }

  }
```

> recordar que lo que manipulamos siempre es un String, por eso la implementación de predicados hace internamente un Parse a Entero.

### Solución final &#x1F947;

Quedando la solución refactorizada de la siguiente manera:

```java
  public static void main(String args[]) {
      try
      {
          URL url = new URL("https://.../api/challenges/json/ages");
          HttpURLConnection connection = (HttpURLConnection) url.openConnection();

          if (HttpURLConnection.HTTP_OK == connection.getResponseCode()) {
              String response = extractResponseFrom(connection);

              Predicate<String> IS_GREATER_THAN_50 = new GreaterThan50();

              long result = new Data(response).getValue().retrieveAges()
                      .toStream().filter(IS_GREATER_THAN_50).count();

              System.out.println(result);
          }
      }
      catch (Exception e) {
          System.out.println(e.toString());
      }
  }
```

Probablemente se pueda mejorar aún más, por ejemplo, se puede encapsular la llamada http en otro método, pero sin duda está mucho mejor que la primera versión.

### &#x1F4DA; Aprendizajes

Hoy día usamos frameworks y/o librerias para la mayoría de las cosas que hacemos por diferentes razones y nos acostumbramos a que hacen mucho por nosotros, por ejemplo si usamos [Spring](https://spring.io/) y su ecosistema, [Spring Data](https://spring.io/projects/spring-data), etc. no debemos preocuparnos por abrir o cerrar una conexión a BD, hacer un commit o un rollback de una transacción.  

Es importante conocer los fundamentos y como funcionan las piezas por debajo.  

Palabras finales:

- No apresurarse a enviar la solución, dar una última revisada a detalle.

- Aplicar refactorización para que el código sea legible.

- Utilizar los recursos que dispones ([programación orientada a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos), [programación funcional](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional), conocimientos del lenguaje) para crear una solución lo más simple y entendible posible.

- Aplicar principios [SOLID](https://es.wikipedia.org/wiki/SOLID) luego hablaré en otro apartado de esto.

- Aprender de tus experiencias es fundamental para el crecimiento.

Espero que te sirva la mía y tú? también has pasado por una similar?

> *«Cuando te das cuenta de que has cometido un error, toma medidas inmediatas para corregirlo.»*  
> *Dalai Lama*
