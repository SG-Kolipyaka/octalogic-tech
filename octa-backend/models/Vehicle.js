module.exports = (sequelize, DataTypes) => {
    const vehicles = sequelize.define("vehicles", {
      model: { type: DataTypes.STRING, allowNull: false },
      wheels: DataTypes.INTEGER,
      type:DataTypes.STRING,
      status:DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, allowNull: true },
      updatedAt: { type: DataTypes.DATE, allowNull: true }
    });
    return vehicles;
  };
  