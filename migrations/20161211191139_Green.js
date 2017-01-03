
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Green', function(table) {
    table.increments();
    table.string('name');
    table.int('origin');
    table.text('desc');
    table.string('deck');
  })
};

exports.down = function(knex, Promise) {
  return knext.schema.dropTableIfExists('Green');
};
