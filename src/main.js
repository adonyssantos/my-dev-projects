import Content from './content.js';
import data from './data.js';

(async () => {
  const main = document.getElementById('main') || null;
  main.innerHTML = await Content(data);
})();
