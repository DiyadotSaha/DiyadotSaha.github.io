
(function(){
  const KEY = 'theme-preference-2'; // 'light' | 'dark'
  const root = document.documentElement;

  function stored(){ return localStorage.getItem(KEY); }
  function system(){ return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  function current(){ return stored() || system(); }
  function apply(mode){
    root.setAttribute('data-theme', mode === 'dark' ? 'dark' : 'light');
    const btn = document.getElementById('neoToggle');
    if (btn) btn.setAttribute('aria-pressed', String(mode === 'dark'));
  }
  function toggle(){
    const next = current() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    apply(current());
    const btn = document.getElementById('neoToggle');
    if (btn) btn.addEventListener('click', toggle);
  });

  // If user never chose, follow system changes live
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', () => { if(!stored()) apply(system()); });
})();
