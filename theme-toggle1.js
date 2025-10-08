(function(){
  const KEY = 'theme-preference-2'; // 'light' | 'dark'
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  function stored(){ return localStorage.getItem(KEY); }             // may be null
  function current(){ return stored() || (media.matches ? 'dark' : 'light'); }
  function apply(mode){
    root.setAttribute('data-theme', mode === 'dark' ? 'dark' : 'light');
    const wrap = document.getElementById('theme-switch');
    const btn  = document.getElementById('theme-toggle-2');
    if (wrap) wrap.classList.toggle('is-dark', mode === 'dark');
    if (btn)  btn.setAttribute('aria-pressed', mode === 'dark');
  }
  function toggle(){
    const next = current() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // init (follow system on first visit; use stored pref thereafter)
    apply(current());
    const btn = document.getElementById('theme-toggle-2');
    if (btn) btn.addEventListener('click', toggle);
  });

  // If no stored pref, reflect live OS changes
  media.addEventListener('change', () => { if(!stored()) apply(current()); });
})();
