context('flower', () => {
    beforeEach(() => {
      cy.visit('http://101.132.147.55')
    })
  
    var width = 30;

    // 点击开始 四分之一朵花
    it('测试开始', () => {

      cy.get('#mycanvas')
        .click(7*width, 10*width)
        .click(8*width, 10*width)
        .click(9*width, 10*width)
        .click(9*width, 11*width)

        .click(11*width, 8*width)
        .click(11*width, 7*width)
        .click(11*width, 6*width)
        .click(12*width, 8*width)

        .click(11*width, 10*width)
        .click(12*width, 10*width)
        .click(11*width, 11*width)
        .click(13*width, 11*width)
        .click(13*width, 12*width)
        .click(12*width, 12*width)




      cy.get('#btn').click()
    })  
})