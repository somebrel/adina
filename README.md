# adina
---
[adina](https://github.com/somebrel/adina) is a RESTful server that allows clients to request assets from a directory located in the server's filesystem.

## Example
```bash
curl http://localhost:8080/get/3?from=/home/alice
```

Assuming that adina is installed, running on `localhost:8080` and you have some files in a folder called `/home/alice`, you gonna get an something like

```javascript
["content of the a file", "another file content", "file with some content"]
```

## About
---
This project was born as a part of a bigger project I had to do for the universtity. The name comes from *__a__ssets* and  *Diener* (German for servant, pronounced __di__i__na__).

## Instalation
---
### Recomended
```bash
npm install --global adina
```

### As a node module
```bash
npm install adiner
```

Depending on your needs use the flags `--save` or `--save-dev`.

### Manual Instalation
If for whatever reason you wish to build [adina](https://github.com/somebrel/adina) yourself, goe ahead and

```bash
git clone https://github.com/somebrel/adina.git
```

```bash
cd adina
```

```bash
npm install
```

```bash
npm run build
```

## Usage
---


## Tests
---
There are Unit Tests available written using [Jest](https://facebook.github.io/jest/) as test engine. They can be run with
```
npm test
```

## Contributors
---
For reporting bugs, asking questions or giving suggestions, please [create an issue](https://github.com/somebrel/adina/issues)

## License
---
MIT License

Copyright (c) 2017 Brahian E. Soto Mercedes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
