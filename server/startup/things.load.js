Meteor.startup(function() {
  if(Meteor.users.find().count() === 0) {
    Accounts.createUser({ email: 'nico1@gmail.com',username: 'mrtruko',password: '123456',profile: { nombre: 'nicolas',apellido: 'gonzalez',telefono: '12352',direccion: 'nivover',rut: '01291201',displayName: 'nicolas gonzalez' } });
  }
});