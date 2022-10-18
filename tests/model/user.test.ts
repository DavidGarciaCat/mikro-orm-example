import mikroORM from '../../src/init/mikro-orm';
import {MikroORM} from "@mikro-orm/core";
import User from '../../src/model/user';

describe('User model', () => {

    let orm: MikroORM;

    beforeAll(async () => {
        orm = await mikroORM;
    });

    afterAll(async () => {
        await orm.close(true);
    });

    it('exposes the email', () => {
        const user = new User('email address', 'profile name');
        expect(user.email).toBe('email address')
    })

    it('exposes the number of profiles', () => {
        const user = new User('email address', 'profile name');
        expect(user.profiles.length).toBe(1)
    })

    it('exposes the profile name', () => {
        const user = new User('email address', 'profile name');
        expect(user.profiles.getItems()[0].name).toBe('profile name')
    })

});