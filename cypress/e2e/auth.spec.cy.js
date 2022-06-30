
describe('/user/register', () => {
    const registerEndPoint = 'http://localhost:3000/api/user/register';

    it('doenst allow user creation with bad user body', () =>{
        let badBody = {
            name:"1",
            email:"foobar.com",
            password:"1",

        }
        cy.request({
            method: 'POST',
            url: registerEndPoint,
            failOnStatusCode: false,
            body: badBody
        }).then((response) => {
            expect(response.status).to.eq(400);
        })

    })

    it('/register create user', () =>{
        cy.request('POST', registerEndPoint, {
            "name":"testName",
            "email":"foo@bar.com",
            "password":"test123"
        }).then((response) => {
            expect(response.body.name).to.eq('testName');
            expect(response.body.email).to.eq('foo@bar.com');
            expect(response.body.password).to.eq('test123');

        })

    })

    it('doenst allow user creation with bad email', () =>{
        let badEmail = {
            name:"validUserName",
            email:"invalidEmail",
            password:"validUserPassword",
        }
        cy.request({
            method: 'POST',
            url: registerEndPoint,
            failOnStatusCode: false,
            body: badEmail
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('"email" must be a valid email')
        })

    })



})


