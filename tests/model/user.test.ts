import {ORM} from '../../src/init/mikro-orm';
import User from '../../src/model/user';

describe('User model', () => {

    it('exposes the email', () => {
        const user = new User('email address', 'profile name');
        expect(user.email).toBe('email address')
    })

    it('exposes the number of profiles', () => {
        const user = new User('email address', 'profile name');
        expect(user.profiles.count).toBe(1)
    })

});