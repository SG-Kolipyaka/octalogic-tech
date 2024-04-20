module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("userbookings", {
      firstName: { type: DataTypes.STRING, allowNull: false },
      wheels: DataTypes.INTEGER,
      lastName:DataTypes.STRING,
      vehicleType:DataTypes.STRING,
      selectedModel:DataTypes.STRING,
      startDate:DataTypes.STRING,
      endDate:DataTypes.STRING,
      bookingID: {
        type: DataTypes.INTEGER,
        references: {
          model: "vehicles",
          key: "id",
        },
      }, 
    });
    return user;
  };
 