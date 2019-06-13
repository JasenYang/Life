context('glider', () => {
  beforeEach(() => {
    cy.visit('http://101.132.147.55')
  })

  // 测试 超级神气，点击开始
  it('测试开始', () => {
    cy.get('#mycanvas')
      .click(300, 300)

      .click(360, 300)
      .click(360, 270)

      .click(420, 240)
      .click(420, 210)
      .click(420, 180)

      .click(480, 210)
      .click(480, 180)
      .click(480, 150)
      .click(510, 180)

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

  })
})