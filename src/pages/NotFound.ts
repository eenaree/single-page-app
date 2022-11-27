import Nav from '../components/Nav.js';

const NotFound = () => {
  const $fragment = document.createDocumentFragment();

  const $div = document.createElement('div');
  $div.textContent = 'page not found';

  $fragment.append(Nav(), $div);

  return $fragment;
};

export default NotFound;
