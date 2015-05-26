# rev-file [![Build Status](https://travis-ci.org/sindresorhus/rev-file.svg?branch=master)](https://travis-ci.org/sindresorhus/rev-file)

> Get the revved file path of a file

Reads the file, MD5 hashes it, truncates the hash to [10 characters](https://github.com/sindresorhus/rev-hash), appends it to the filename, and returns the modified path.


## Install

```
$ npm install --save rev-file
```


## Usage

```js
var revFile = require('rev-file');

revFile('src/unicorn.png');
//=> 'src/unicorn-bb9d8fe615.png'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
