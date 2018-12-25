import { Query } from '../packages/core/src/database/sequelize';
const log = console.log;

const db = new Searcher({ 
    dialect: "sqlite", 
    connection: { filename: "D:/Files/Projects/Databases/Dictionary/jap.db"}
});
const init = {
    select: ["term", "meaning"],
    from: "terms",
    whereOr: [
        { in: { "terms": ["得る"] } },
        { in: { "meaning": ["give"] } }
    ]
};


 
test("db", 
async () => {
    expect(db).toBeTruthy();
    //log('db', db);
});

test("query", 
async () => {
    const query = db.select(init);
    expect(query).toBeTruthy();
    log('query', query);
});
test("QueryInterface", 
() => {
    const stmt = query(init);
    expect(stmt).toBeTruthy();
    log('QueryInterface statement:', stmt);
});
test("Qe", 
() => {
    //const stmt: Qe = init;
    const stmt = query(init);
    expect(stmt).toBeTruthy();
    log('Qe ___:', stmt);
});
test("Select", 
() => {
    const stmt = select("aaaa");

    expect(stmt).toBeTruthy();
    log('select statement:', stmt);
});

test("Select2", 
() => {
    const stmt = select("aaaa");
    expect(stmt).toBeTruthy();
    log('select statement:', stmt);
});
