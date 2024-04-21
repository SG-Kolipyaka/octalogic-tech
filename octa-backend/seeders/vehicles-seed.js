'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    const vehiclesData = [
      {
        model: "Dodge Ram 1500",
        wheels: 4,
        type: "Truck",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Ford F-150",
        wheels: 4,
        type: "Truck",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Chevrolet Silverado",
        wheels: 4,
        type: "Truck",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Toyota Camry",
        wheels: 4,
        type: "Car",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Honda Civic",
        wheels: 4,
        type: "Car",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Ford Mustang",
        wheels: 4,
        type: "Car",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Mercedes-Benz C-Class",
        wheels: 4,
        type: "Car",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "BMW",
        wheels: 4,
        type: "Car",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Toyota RAV4",
        wheels: 4,
        type: "SUV",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Honda CR-V",
        wheels: 4,
        type: "SUV",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Jeep Wrangler",
        wheels: 4,
        type: "SUV",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Honda Activa",
        wheels: 2,
        type: "Scooter",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "TVS Jupiter",
        wheels: 2,
        type: "Scooter",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Suzuki Access",
        wheels: 2,
        type: "Scooter",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Harley-Davidson Street Glide",
        wheels: 2,
        type: "Cruiser",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Indian Scout",
        wheels: 2,
        type: "Cruiser",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Honda CB Shine",
        wheels: 2,
        type: "Motorcycle",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Yamaha FZ",
        wheels: 2,
        type: "Motorcycle",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        model: "Royal Enfield Classic 350",
        wheels: 2,
        type: "Motorcycle",
        status: "available",
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ];

    await queryInterface.bulkInsert('vehicles', vehiclesData, {});
    console.log('Vehicles seeded successfully.');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
