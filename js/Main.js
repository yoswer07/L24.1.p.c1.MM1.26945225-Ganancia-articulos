/* Conociendo el codigo, costo y el precio de venta de los articulos que vende una tienda, se desea hacer un 
procesamiento que determine la ganancia total que tendria la empresa al venderlos todos, y tambien
el codigo del articulo con mayor precio de venta.*/

import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Tienda from "./Cl_Tienda.js";

//instanciar el objeto
let articulo = new Cl_Articulo(888, 10, 15);
let articulo2 = new Cl_Articulo(777, 20, 25);
let articulo3 = new Cl_Articulo(999, 15, 25);
let articulo4 = new Cl_Articulo(333, 25, 35);
let articulo5 = new Cl_Articulo(111, 50, 70);
let articulo6 = new Cl_Articulo(333, 40, 50);
let articulo7 = new Cl_Articulo(444, 80, 100);
let articulo8 = new Cl_Articulo(222, 5, 10);

let tienda = new Cl_Tienda();
tienda.procesarArticulo(articulo);
tienda.procesarArticulo(articulo2);
tienda.procesarArticulo(articulo3);
tienda.procesarArticulo(articulo4);
tienda.procesarArticulo(articulo5);
tienda.procesarArticulo(articulo6);
tienda.procesarArticulo(articulo7);
tienda.procesarArticulo(articulo8);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Ganancia total = ' + tienda.devolverGanancia() + "$";
salida.innerHTML += '<br> Codigo del articulo con mayor precio de venta = ' + tienda.devolverMayorPrecio();