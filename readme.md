# Mikro-ORM Example

Micro-project used as a POC (Proof Of Concept) on how to run Jest tests for
your project entities when these are mapped using Mikro-ORM decorators.

Initial GitHub's MikroORM discussion:  
https://github.com/mikro-orm/mikro-orm/discussions/3605

## Settings

This project provides a `docker-compose.yaml` file to provide a database
that can accept connections. If you don't have any MariaDB running on port 3306
then you can run the following command to boot it up:

```shell
docker-compose up --build -d
```

Then there are two potential ways to launch the source code and make sure the ORM
mappings are working.

**Option 1) launch the app**

This is, in essence, a way to run `node` and launch the code you have developed:

```shell
npm start
```

**Option 2) run the tests** (the reason for this repo)

The `MikroORM.init()` process is being executed inside a function, hence when
we import the (default) exported parameter, we get a function we need to call.

This function allows an input boolean argument, that determines if we need to
establish a database connection or if we just need to map the entities:

```ts
import ormInit from './init/mikro-orm';

ormInit();      // For Production, Development and Integration Testing
                // Equivalent to: ormInit(true)
                // You can see it in the App implementation:
                // - `src/app.ts`

ormInit(false); // For Unit Testing
                // This doesn't establish the DB connection, but inits the system
                // You can see this implementation in the test files:
                // - `tests/model/user.profile.ts`
                // - `tests/model/user.test.ts`
```

You can run the Unit tests through the npm test shortcut script: 

```shell
npm test
```
