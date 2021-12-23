# rev-file

> Get the revved file path of a file

Reads the file, MD5-hashes it, truncates the hash to [10 characters](https://github.com/sindresorhus/rev-hash), appends it to the filename, and returns the modified path.

## Install

```sh
npm install rev-file
```

## Usage

```js
import {revisionFile} from 'rev-file';

console.log(await revisionFile('src/unicorn.png'));
//=> 'src/unicorn-bb9d8fe615.png'
```

## API

### revisionFile(filepath)

Returns a `Promise` for a revved file path.

### revisionFileSync(filepath)

Returns a revved file path.
