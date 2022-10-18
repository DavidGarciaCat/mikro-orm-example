import {v4 as uuid} from 'uuid';
import {Collection, Entity, OneToMany, PrimaryKey, Property} from '@mikro-orm/core';
import Profile from './profile';

@Entity({ tableName: 'users' })
export default class User {

    @PrimaryKey({ name: 'uuid', type: 'uuid' })
    readonly uuid: string = uuid().toString();

    @Property({ name: 'email', type: 'string', length: 100, unique: true, nullable: false })
    email: string;

    @OneToMany({ entity: () => Profile, mappedBy: 'user' })
    readonly profiles: Collection<Profile> = new Collection<Profile>(this);

    constructor (email: string, profileName: string) {
        const profile = new Profile(this, profileName);

        this.email = email;
        this.profiles.add(profile);
    }
}
