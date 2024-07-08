import sharedFunction from "../support/SharedFunctions";

export class modules{
 
  verifyModules(dataTable){
        dataTable.hashes().forEach(row=>{
            cy.customPath(`#page1 > :nth-child(${row.index})`)
            .should('have.text',row.text)
        })
    }
grabval(){
        const values = [];
    cy.customPath('#page1 > *').each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        values.push(text.trim()); 
      });
    }).then(() => {
      cy.wrap(values).as('values');
    });
    }

storevalue(){
        cy.customPath('@values').then((values) => {
      values.forEach((value) => {
        cy.log(value);
      });
    });
}

}