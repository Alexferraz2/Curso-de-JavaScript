const defaultUser = {
    name: '',
    email: '',
    level: 1,
}

const user1 = {
    //O ...defaultUser serviu para clonar o objeto defaultUser, as propriedades que eu não informar como o level, ele herda do obketo defaultUser.
    ...defaultUser,
    name: 'Alexsandro',
    email: 'alex_ferraz2@hotmail.com',
    age: 41,

}

const admin = {
    ...defaultUser,
    name: 'Administrador',
    email: 'admin@gmail.com',
    level: 2,
}

console.log(user1)
console.log(admin)