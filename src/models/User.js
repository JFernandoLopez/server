const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            identityCard: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            }
        },
        { timestamps: true, paranoid: true }
    );
};