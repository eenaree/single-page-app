const Nav = () => {
  const $nav = document.createElement('nav');
  const $ul = document.createElement('ul');
  const navList = ['', 'About', 'Service'];
  for (const path of navList) {
    const $li = document.createElement('li');
    const $a = document.createElement('a');
    $a.textContent = path === '' ? 'Home' : path;
    $a.href = `/${path.toLowerCase()}`;
    $li.append($a);
    $ul.append($li);
  }
  $nav.append($ul);

  return $nav;
};

export default Nav;
