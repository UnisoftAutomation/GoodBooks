export class sharedFunction{
    static loadXpathValue(){
        cy.fixture("XpathMapping.json").then((data)=>{
            this.Xpathvalue= data
        })
    }
    static loadIdValue(){
        cy.fixture("IdMapping.json").then((data)=>{
    this.IdValue =data
})
    }
    static loadCssValue(){
        cy.fixture("css-Mapping.json").then((data)=>{
            this.cssvalue =data
        })
    }
    static getXpathValue(key){
        return this.Xpathvalue[key]
    }
    static getIdValue(key){
        return this.IdValue[key]
    }
    static getCssValue(key){
        return this.cssvalue[key]
    }
}


export default  sharedFunction;