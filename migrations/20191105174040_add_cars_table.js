
exports.up = function(knex) {
   return knex.schema.createTable('cars', function(table) {


    table.increments();
    
    table.string('make', 128);
    table.string('model');
    table.string('milage');
    table.boolean('status');
    table.timestamps(true, true);

   })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
