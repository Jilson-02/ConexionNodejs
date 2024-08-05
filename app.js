import express from 'express';
import { sequelize } from './db/conexion.js';
import './model/categoriaModel.js'; // Importa primero la categoría
import './model/recetaModel.js'; // Luego la receta

const app = express();
const PORT = 3000;

const conexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');

        // Sincronizar todos los modelos
        await sequelize.sync({ force: false });
        console.log('Sincronización de modelos completada');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

conexion();
