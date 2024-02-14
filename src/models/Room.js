const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "Room",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                validate: {
                    max: 100,
                }
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            floor: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            state:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        { timestamps: true, paranoid: true }
    );
};