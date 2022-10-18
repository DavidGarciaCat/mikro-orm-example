import { MikroORM } from "@mikro-orm/core";
import { MariaDbDriver } from "@mikro-orm/mariadb";
import User from '../model/user';
import Profile from "../model/profile";

const shouldConnect = ('test' !== process.env.NODE_ENV);
console.log('shouldConnect', shouldConnect);

export default MikroORM.init<MariaDbDriver>(
    {
        debug: false,
        allowGlobalContext: true,
        entities: [ User, Profile ],
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        dbName: 'test_database',
        user: 'test_user',
        password: 'test_password',
        charset: 'utf8mb4',
    },
    shouldConnect // Don't connect to the DB for testing reasons
);
