import {v4 as uuid} from 'uuid';
import {Entity, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import User from './user';

@Entity({ tableName: 'profiles' })
export default class Profile {

    @PrimaryKey({ name: 'uuid', type: 'uuid' })
    readonly uuid: string = uuid().toString();

    @Property({ name: 'name', type: 'string', length: 100, nullable: false })
    name: string;

    @ManyToOne({
        entity: 'User', inversedBy: 'profiles', referenceColumnName: 'uuid',
        name: 'user_uuid', fieldName: 'user_uuid', nullable: false,
    })
    readonly user: User;

    constructor (user: User, name: string) {
        this.user = user;
        this.name = name;
    }

}
