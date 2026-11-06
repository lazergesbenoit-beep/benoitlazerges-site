const bar=document.querySelector('.top'),nav=document.querySelector('nav'),burger=document.querySelector('.burger');
addEventListener('scroll',()=>bar.classList.toggle('solid',scrollY>60));
burger.onclick=()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
nav.onclick=()=>nav.classList.remove('open');
const modal=document.getElementById('modal'),player=document.getElementById('player');
function close(){modal.hidden=true;player.src='about:blank'}
document.querySelectorAll('[data-vimeo]').forEach(b=>b.onclick=()=>{player.title=b.dataset.title;player.src='https://player.vimeo.com/video/'+b.dataset.vimeo+'?autoplay=1&title=0&byline=0&portrait=0';modal.hidden=false});
modal.querySelector('.close').onclick=close;
modal.onclick=e=>{if(e.target===modal)close()};
addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});
fetch('https://vimeo.com/api/oembed.json?width=1280&url='+encodeURIComponent('https://vimeo.com/1244129009')).then(r=>r.json()).then(d=>{if(d.thumbnail_url)document.getElementById('thumb2').src=d.thumbnail_url}).catch(()=>{});
