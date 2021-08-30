exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Caspar', email: 'myemail@gmail.com'},
        {id: 2, username: 'Christina', email: 'notsofriendly@yahoo.com'},
        {id: 3, username: 'Billy', email: 'myfriendismandy@whatsanemail.org'}
      ]);
    });
};