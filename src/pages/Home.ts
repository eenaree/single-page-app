import Nav from '../components/Nav.js';

const Home = () => {
  const $fragment = document.createDocumentFragment();

  const $h1 = document.createElement('h1');
  $h1.textContent = 'Home Page';

  $fragment.append(Nav(), $h1);

  return $fragment;
};

export default Home;
