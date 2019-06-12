context('startAgain', () => {
  beforeEach(() => {
    cy.visit('http://101.132.147.55')
  })

  // 测试 点击开始按钮后，点击结束后暂停
  it('测试结束后再次开始', () => {
    cy.get('#mycanvas')
      .click(300, 300)
      .click(330, 330)
      .click(360, 330)
      .click(360, 300)
      .click(360, 270)

    // 点击开始
    cy.get('#btn').click()

    // 暂停1s     
    function waitOneSecond() {
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    // 开始
    cy.then(() =>
      waitOneSecond().then(() => {
        cy.get('#btn').click()
      }))

    cy.then(() =>
      waitOneSecond().then(() => {
        cy.get('#btn').click()
      }))
  })
})
