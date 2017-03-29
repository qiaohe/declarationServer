module.exports = {
    declaration: {
        insert: 'insert Declaration set ?',
        findCategoriesBy: 'select * from Category where pid = ?',
        findCommodities: 'select id, name from Commodity',
        findRules: 'select * from Rule',
        findDeclarationById: 'select * from Declaration where id=?',
        findCommoditiesByCategory: 'select * from Commodity where categoryId=?',
        findSuppliers: 'select * from Supplier where commodityId = ?'
    }
}
