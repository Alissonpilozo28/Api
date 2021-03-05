const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = proceso. env. PORT || 3050;

 const app = express();

app. uso(bodyParser. json());

Mysql
conexión const = mysql. createConnection({
  anfitrión: 'localhost',
  usuario: 'raíz',
  contraseña: 'rootpass',
  base de datos: 'node20_mysql'
});

Ruta
app. obtener('/', (req, res) => {
  res. enviar('Bienvenido a mi API!');
});

todos los clientes
app. obtener('/clientes', (req, res) => {
  const sql = 'SELECT * FROM customers';

  conexión. consulta(sql, (error, resultados) => {
    if (error) producir error;
    if (resultados. longitud > 0) {
      res. json(resultados);
    } Más {
      res. enviar('No resultado');
    }
  });
});

app. obtener('/customers/:id', (req, res) => {
  const { id } = req. params;
  const sql = 'SELECT * FROM customers WHERE id =  ${id}';
  conexión. consulta(sql, (error, resultado) => {
    if (error) producir error;

    if (resultado. longitud > 0) {
      res. json(resultado);
    } Más {
      res. enviar('No resultado');
    }
  });
});

app. post('/add', (req, res) => {
  const sql = 'INSERT INTO customers SET?';

  const customerObj = {
    nombre: req. cuerpo. nombre,
    ciudad: req. cuerpo. ciudad
  };

  conexión. consulta(sql, customerObj, error => {
    if (error) producir error;
    res. enviar('¡Cliente creado!');
  });
});

app. put('/update/:id', (req, res) => {
  const { id } = req. params;
  const { nombre, ciudad } = req. cuerpo;
  const sql = 'UPDATE customers SET name = '${name}', city='${city}' WHERE id =${id}';

  conexión. consulta(sql, error => {
    if (error) producir error;
    res. enviar('Cliente actualizado!');
  });
});

app. eliminar('/delete/:id', (req, res) => {
  const { id } = req. params;
  const sql = 'ELIMINAR DE los clientes WHERE id=  ${id}';

  conexión. consulta(sql, error => {
    if (error) producir error;
    res. enviar('Eliminar cliente');
  });
});

Compruebe la conexión
conexión. conectar(error => {
  if (error) producir error;
  consola. log('Servidor de bases de datos en ejecución!');
});

app. escuchar(PUERTO, () => consola. log('Servidor que se ejecuta en el puerto  ${PORT}'));