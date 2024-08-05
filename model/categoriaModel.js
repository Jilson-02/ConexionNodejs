import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { recetaModel } from "./recetaModel.js";

export const categoriaModel = sequelize.define("categoria", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

categoriaModel.hasMany(recetaModel, { foreignKey: "categoria_id" });
recetaModel.belongsTo(categoriaModel, { foreignKey: "categoria_id" });
