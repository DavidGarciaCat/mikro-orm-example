import ormInit from '../../src/init/mikro-orm';
import {MikroORM} from "@mikro-orm/core";
import User from '../../src/model/user';
import Profile from '../../src/model/profile';

// User is now a mock constructor
jest.mock('../../src/model/user');

describe('Profile model', () => {

    let orm: MikroORM;

    beforeAll(async () => {
        // Don't establish any DB connection; just init the ORM settings
        orm = await ormInit(false);
    });

    afterAll(async () => {
        if (await orm.isConnected()) {
            await orm.close(true);
        }
    });

    // Mocked User
    const user = new User('email address', 'profile name');

    it('exposes the name', () => {
        const profile = new Profile(user, 'another profile');
        expect(profile.name).toBe('another profile');
    })

    it('exposes the owning user', () => {
        const profile = new Profile(user, 'another profile');
        expect(profile.user).toBe(user);
    })

});
