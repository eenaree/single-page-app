import About from './pages/About.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

const $root = document.getElementById('root');

const routes = [
  { path: '/', page: Home },
  { path: '/about', page: About },
];

const render = (path?: string) => {
  const currentPath = path || window.location.pathname;
  const currentPathPage =
    routes.find(route => route.path === currentPath)?.page || NotFound;

  $root?.replaceChildren(currentPathPage());
  $root?.querySelectorAll('a[href^="/"]').forEach($el =>
    $el.addEventListener('click', e => {
      e.preventDefault();

      if (!(e.target instanceof HTMLAnchorElement)) return;

      const href = e.target.getAttribute('href');
      if (href) {
        window.history.pushState({}, '', href);
        render(href);
      }
    })
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render();
});

window.addEventListener('popstate', () => {
  render();
});
