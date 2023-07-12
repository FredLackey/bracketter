import { replace } from '../../index.mjs';

const line = 'Hello {name}! How are you?';

const values = {
  name: 'World',
}

const defaults = {
  name: 'Gomer',
}

const result = replace({ 
  line,
  values,
  defaults,
});

console.log(result);