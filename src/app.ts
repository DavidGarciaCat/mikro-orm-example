import ormInit from './init/mikro-orm';

async function initORM() {
    // Establish a real DB connection and init the ORM settings
    const orm = await ormInit();
    const conn = await orm.isConnected();

    if (conn) {
        console.log('Connected!')
        process.exit(0);
    }

    console.log('NOT connected!')
    process.exit(1);
}

initORM();
