context('glider', () => {
    beforeEach(() => {
      cy.visit('http://101.132.147.55')
    })
  
    // 测试 输入滑翔机，点击开始
    it('测试开始', () => {
      cy.get('#mycanvas')
        .click(300, 300)
        .click(330, 330)
        .click(360, 330)
        .click(360, 300)
        .click(360, 270)
        

      cy.get('#btn').click()
    })  
})