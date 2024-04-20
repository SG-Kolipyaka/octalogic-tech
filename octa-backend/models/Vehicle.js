module.exports = (sequelize, DataTypes) => {
    const vehicles = sequelize.define("vehicles", {
      model: { type: DataTypes.STRING, allowNull: false },
      wheels: DataTypes.INTEGER,
      type:DataTypes.STRING,
      status:DataTypes.STRING
    });
    return vehicles;
  };
  