
exports.up = function (knex) {
    return knex.schema.table('food', tbl => {
        // summary
        tbl.string('summary', 500);

        // array of resource links
        tbl.specificType('resources', 'TEXT[]')
    })
};

exports.down = function (knex) {
    return knex.schema.dropColumn('resources')
        .dropColumn('summary');
};
