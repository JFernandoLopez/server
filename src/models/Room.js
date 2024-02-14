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
                    max: 30,
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
            status:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        { timestamps: true, paranoid: true }
    );
};