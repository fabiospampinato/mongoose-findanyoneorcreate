# findAnyoneOrCreate

![Issues](https://img.shields.io/github/issues/fabiospampinato/mongoose-findanyoneorcreate.svg)
[![NPM version](https://img.shields.io/npm/v/mongoose-findanyoneorcreate.svg)](https://www.npmjs.com/package/mongoose-findanyoneorcreate)

Promise-based plugin for Mongoose that defines a "findAnyoneOrCreate" static method.

Useful for finding a document, with support for creating it if doesn't exist already.

## Install

```shell
$ npm install --save mongoose-findanyoneorcreate
```

## Usage

```js
import * as mongoose from 'mongoose';
import findAnyoneOrCreate from 'mongoose-findanyoneorcreate';
import BookSchema from './book_schema';

BookSchema.plugin ( findAnyoneOrCreate );

const model = mongoose.model ( 'Book', BookSchema );

const book = await model.findAnyoneOrCreate ({
  title: 'My book title',
  author: 'Me',
  category: 'fantasy'
});
```

## Related

- [findOneOrCreate](https://github.com/fabiospampinato/mongoose-findoneorcreate) - Promise-based plugin for Mongoose that defines a "findOneOrCreate" static method.

## License

MIT © Fabio Spampinato
