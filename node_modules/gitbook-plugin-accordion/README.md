# gitbook-plugin-accordion
###
[![npm](http://img.shields.io/npm/dt/gitbook-plugin-accordion.svg)](https://www.npmjs.com/package/gitbook-plugin-accordion)

## Example

https://artalar.github.io/gitbook-plugin-accordion/

## Usage
In GitBook editor (or any else):

```
%accordion%Some title here%accordion%

Any content here

%/accordion%
```

> that`s all! But each tag should be in one paragraph

> similarly you can include accordion in accordion (like content)

> IE11+ (flexboxes)

## Install

Update `book.json`, like:

```json
{
  "gitbook": "3.2.2",
  "title": "Cool book",
  "plugins": ["accordion"]
}
```

Then run

```bash
gibook install 
```

That`s all, see *Usage*
