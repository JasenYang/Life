context('flower', () => {
  beforeEach(() => {
    cy.visit('http://101.132.147.55')
  })

  var width = 30;

  // 点击开始 四分之一朵花
  it('测试开始', () => {

    cy.get('#mycanvas')
      .click(7 * width + 30, 10 * width + 30)
      .click(8 * width + 30, 10 * width + 30)
      .click(9 * width + 30, 10 * width + 30)
      .click(9 * width + 30, 11 * width + 30)

      .click(11 * width + 30, 8 * width + 30)
      .click(11 * width + 30, 7 * width + 30)
      .click(11 * width + 30, 6 * width + 30)
      .click(12 * width + 30, 8 * width + 30)

      .click(11 * width + 30, 10 * width + 30)
      .click(12 * width + 30, 10 * width + 30)
      .click(11 * width + 30, 11 * width + 30)
      .click(13 * width + 30, 11 * width + 30)
      .click(13 * width + 30, 12 * width + 30)
      .click(12 * width + 30, 12 * width + 30)


    cy.pause()

    // cy.get('#btn').click()
  })
})