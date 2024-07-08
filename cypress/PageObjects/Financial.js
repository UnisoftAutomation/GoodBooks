import sharedFunction from "../support/SharedFunctions";
export class financial{

    ClickFollwingModules(dataTable){
        dataTable.hashes().forEach(row => {
          cy.customPath(`#forseven > .ModuleList > #first > :nth-child(${row.index})`).should('have.text',row.text).click()
          cy.customPath('.gbformtitle').should('have.text',row.text)
    })
}
}