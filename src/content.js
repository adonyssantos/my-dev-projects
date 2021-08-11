import Template from './template/Template.js';

const Content = projects => {
  const FIRST_ELEMENT_INDEX = 0;
  const LAST_ELEMENT_INDEX = projects.length - 1;
  let body = ``;

  projects.map((item, index) => {
    const element = Template(item);

    // Header
    if (index === FIRST_ELEMENT_INDEX) {
      body += `<h1>My Dev Projects - Adonys Santos</h1>`;
    }

    // Main Content
    if (element) {
      body += `<section>${element}</section>`;
    } else {
      body += `<h2 class="no-elements" >No elements yet!</h2>`;
    }

    // Footer
    if (index === LAST_ELEMENT_INDEX) {
      body += `<footer>@adonyssantos | www.adonyssantos.me</footer>`;
    }
  });

  return body;
};

export default Content;
