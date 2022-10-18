import { EntityManager, MikroORM } from "@mikro-orm/core";
import { MariaDbDriver, EntityRepository } from "@mikro-orm/mariadb";
import User from '../model/user';
import Profile from "../model/profile";

export const ORM = {} as {
    orm: MikroORM,
    em: EntityManager,
    userRepository: EntityRepository<User>,
    profileRepository: EntityRepository<Profile>,
};

(async () => {
    ORM.orm = await MikroORM.init<MariaDbDriver>(
        {
            debug: true,
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
        false // Don't connect to the DB for testing reasons
    );

    ORM.em = ORM.orm.em;
    ORM.userRepository = ORM.orm.em.getRepository(User);
    ORM.profileRepository = ORM.orm.em.getRepository(Profile);
})();
