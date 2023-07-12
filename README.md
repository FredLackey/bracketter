# Bracetter ([`bracketter`](https://github.com/FredLackey/bracketter))

Parse and manipulate tokenized strings

## Description

So many file types... so many different tagging, wrapping, bracketting characters... `<>`, `</>`, `[]`, `{}`, `()`, `%%`, `__`, etc., etc., etc.

The goal of this library is to provide a one-stop-shop utility for whatever format your tokenized strings are in.

## Usage

During this experiemental stage, there is one single entrypoint, `replace()`:

```
const result = replace({ 
  line,     // raw string of tokenized values
  values,   // object of key-value pairs
  defaults  // optional key-value pair object, like values,
});
```
Or, if you have a multiple lines to replace:

```
const result = replace({ 
  lines,    // array of strings
  values,   // object of key-value pairs
  defaults  // optional key-value pair object, like values,
});
```

## Example Usage

If you're like me, seeing the code is everything.  Here's a quick example to show how you might use the [`bracketter`](https://github.com/FredLackey/bracketter) utility in your project:

```
import { replace } from '../../index.mjs';

const lines = [
  'Hello {name}! How are you?',
  'Today is %day%.',
];

const values = {
  name: 'World',
}

const defaults = {
  day: 'a great day',
}

const result = replace({ 
  lines,
  values,
  defaults,
});

console.log(result);
```
That code above will yield:
```
['Hello World! How are you?', 'Today is a great day.']
```

## Token Nesting

One of the items I use this library for is the nesting of tokenized strings.  Not too long ago I leveraged some [12-factor concepts](https://12factor.net/) to create a deployment engine for AWS and Azure using Terraform IaC packages.  The IaC code had to be built on the fly and constructed by applying multiple layers of logic.  Each layer could essentially change the previous for many reasons (security, quota limits, etc.).  One of the techniques that allowed me to be successful was allowing each layer to apply concrete changes _or_ new strings which could also be tokenized in preparation for the next stage.  Anyway, long story short, [`bracketter`](https://github.com/FredLackey/bracketter) employs this same nesting logic in case you would like to leverage a similar pattern.

## Contact Info

This was a quick lil' project I whipped up for something I needed in an opensouce project.  If you have interest in [`bracketter`](https://github.com/FredLackey/bracketter), please let me know so I will know to keep it alive.  If there are any enhancements you can think of, I'd love to know that to!  Until then...

**Fred Lackey**  
**[http://fredlackey.com](http://fredlackey.com)**  
**[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)**
