import mikroORM from './init/mikro-orm';

async function initORM() {
    const orm = await mikroORM;
    const conn = await orm.isConnected();

    if (conn) {
        console.log('Connected!')
        process.exit(0);
    }

    console.log('NOT connected!')
    process.exit(1);
}

initORM();
