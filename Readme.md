
# color

[ ![Codeship Status for weo-edu/color](https://img.shields.io/codeship/448deb10-f5f3-0132-7126-020cea137f51/master.svg)](https://codeship.com/projects/85910) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Style string generator for colors. Thank you [jsxstyle](https://github.com/petehunt/jsxstyle).

## Installation

    $ npm install @deku-scrubs/color


## Example

```js
color.rgb(255, 255, 255).toString()
// 'rgba(255, 255, 255)'
```

## API

#### .rgb(red, blue, green)

#### .rgba(red, blue, green, alpha)

#### .alpha(rgb, alpha)

#### .shade(rgba, percent)

#### .linearGradient(direction, points)

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
