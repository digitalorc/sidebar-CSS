const body = document.querySelector('body');
      sidebar = document.querySelector('.sidebar');
      toggle = document.querySelector('.toggle'); //<i class='bx bx-chevron-right toggle'></i>
      searchBtn = document.querySelector('.search-box');
      modeSwitch = document.querySelector('.toggle-switch');
      modeText = document.querySelector('.mode-text');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});


searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if(body.classList.contains('dark')) {
    modeText.innerHTML = "Light Mode";
  }else {
    modeText.innerHTML = "Dark Mode";
  }
});

