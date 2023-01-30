/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          password: "test password",
          email: "vmikyan@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          password: "can guess it",
          email: "jhone@yahoo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          password: "test password",
          email: "alvard_85@yandex.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
