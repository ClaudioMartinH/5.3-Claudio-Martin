<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./itacademy.png" alt="Project logo"></a>
</p>

<h3  align="center"><span style="color: #FF000">Entrega 5.3 <br>Bases de datos NoSQL con MongoDB</span></h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ClaudioMartinH/5.3-Claudio-Martin.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ClaudioMartinH/5.3-Claudio-Martin.svg)](https://github.com/ClaudioMartinH/5.3-Claudio-Martin/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> En esta entrega nos adentramos en las bases de datos no relacionales de la mano de MongoDB
    <br>
</p>

## 📝 Contenidos

- [Acerca de](#about)
- [Comenzando](#getting_started)
- [Uso](#usage)
- [Tecnologias usadas](#built_using)
- [Autor](#authors)
- [Fuentes](#acknowledgement)

---
## 🧐 Acerca de <a name = "about"></a>

En esta entrega, la tercera oparte del Sprint 5 del curso de Desarrollo Backend con NodeJS nos presenta las bases de datos no relacionales con MongoDB, se trata en primer lugar de diseñar las bases de datos de una Óptica y de un Restaurante.
En el ***Nivel 1*** se nos pide diseñar la base de datos de la Óptica.
En el **Ejercicio 1** se nos pide como diseñariamos la base de datos para la vista que se nos muestra en:

```
./Nivell1/Exercici1/vista_client.jpg
```

En el **Ejercicio 2** se nos pide diseñar la base de datos que se ajuste a la vista mostrada en:

```
./Nivell1/Exercici2/vista_ulleres.jpg
```

Para el ***Nivel 2*** se nos pide diseñar la base de datos del Restaurante según las especificaciones del enunciado

```
./Nivell2/enunciado.txt
```
---
## 🏁 Comenzando <a name = "getting_started"></a>

Para comenzar hay que bajarse el repositorio de mi [Github](https://github.com/ClaudioMartinH/5.3-Claudio-Martin) y clonarlo de manera local con el siguiente comando:

```
git clone https://github.com/ClaudioMartinH/5.3-Claudio-Martin.git
```
---
### Prerrequisitos

Para poder visualizar esta entrega, hay que tener instalado:

- ![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

---
### Para la instalación

Para que se instalen las dependencias debemos ejecutar el siguiente comando en la terminal:

```
npm install
```
---
## 🚀 Uso <a name="usage"></a>

Para crear y llenar la base de datos de la Óptica, una vez hayamos conectado MongoDB, hay que cargar el script pertinente, que se puede hacer con este comando experimental de node que permite exportar los archivos json:

```
node --experimental-json-modules ./DB/js/optica_loadData.mjs
```

Para hacer lo pertinente con la base de datos del Restaurante habría que ejecutar nuevamente ese comando experimental:

```
node --experimental-json-modules ./Nivell2/mad_loadData.mjs
```
---

## ⛏️ Tecnologias usadas <a name = "built_using"></a>

- ![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white) - Database
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) - Server Environment

---
## ✍️ Autor <a name = "authors"></a>

- [ClaudioMartinH](https://github.com/ClaudioMartinH) - Idea & Initial work

---
## 🎉 Fuentes de información <a name = "acknowledgement"></a>

- [MongoDB Crash Course - The Fullstack Junkie - Youtube](https://www.youtube.com/watch?v=2KlFHHXDuG8&list=PLuGe-XRWqbNQHhIJXq5UfkzCB98vvw1m7)
- [NoSQL Cómo se modelan las BBDD no relacionales - Hola Mundo - Youtube](https://www.youtube.com/watch?v=Zdlude8l8w4)
- References
---