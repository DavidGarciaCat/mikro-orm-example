import { MikroORM } from "@mikro-orm/core";
import { MariaDbDriver } from "@mikro-orm/mariadb";
import User from '../model/user';
import Profile from "../model/profile";

export default (shouldConnect: boolean = true): Promise<MikroORM<MariaDbDriver>> => {
    return MikroORM.init<MariaDbDriver>({
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
    }, shouldConnect);
}
