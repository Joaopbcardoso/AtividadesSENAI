describe('pagina de login', ()=>{
    it('login com sucesso', ()=>{
        cy.visit('http://127.0.0.1:5500/Teste%20de%20Sistemas/login/login.html?');
        cy.get('#usuario').type('admin')
        cy.get('#senha').type('senha')
        cy.get('#entrar').click()

        cy.on('window.alert', (txt)=>{
            expect(txt).to.contains('login efetuado')
        })
    })

    it('login com sucesso', ()=>{
        cy.visit('http://127.0.0.1:5500/Teste%20de%20Sistemas/login/login.html?');
        cy.get('#usuario').type('joao')
        cy.get('#senha').type('jp230107')
        cy.get('#entrar').click()

        cy.get('#erro').should('be.visible')
    })
})