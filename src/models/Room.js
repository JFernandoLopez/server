const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "Room",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
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
            }
        },
        { timestamps: true, paranoid: true }
    );
};