'use strict';
const { DataTypes } = require('sequelize');

const ParticipantStatusValues = ['PENDING', 'APPROVED', 'REJECTED'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      'participants',
      {
        userId: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        eventId: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'events',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        status: {
          type: DataTypes.ENUM(...ParticipantStatusValues),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: null,
        },
      },
      { timestamps: false }
    );

    return Promise.resolve();
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('participants');
    return Promise.resolve();
  },
};
