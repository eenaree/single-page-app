import Nav from '../components/Nav.js';

const About = () => {
  const $template = document.createDocumentFragment();

  const $h1 = document.createElement('h1');
  $h1.textContent = 'About Page';

  $template.append(Nav(), $h1);

  return $template;
};

export default About;
