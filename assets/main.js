// Nav active
const sections=document.querySelectorAll('section[id]');
const navAs=document.querySelectorAll('.nav-item>a');
const navIo=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navAs.forEach(a=>a.classList.remove('active'));const a=document.querySelector(`.nav-item>a[href="#${e.target.id}"]`);if(a)a.classList.add('active');}});},{threshold:.4});
sections.forEach(s=>navIo.observe(s));

// Fade in
const fels=document.querySelectorAll('.fade-in');
const fio=new IntersectionObserver((ents)=>{ents.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);fio.unobserve(e.target);}});},{threshold:.1});
fels.forEach(el=>fio.observe(el));

// Modales
function openModal(id){document.getElementById('modal-'+id).classList.add('open');document.body.style.overflow='hidden';}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow='';}
function closeBack(e,id){if(e.target===document.getElementById(id))closeModal(id);}
function goAndOpen(section,modal){window.location.hash='#'+section;setTimeout(()=>openModal(modal),350);}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal-backdrop.open').forEach(m=>{m.classList.remove('open');document.body.style.overflow='';});}});

// CV download
function downloadCV(e){
  if(e)e.preventDefault();
  const a=document.createElement('a');
  a.href='assets/pdf/cv.pdf';
  a.download='assets/cv.pdf';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
}

function openLightbox(src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Téléchargement comptes rendus
function downloadReport(filename){
  const a=document.createElement('a');
  a.href='assets/pdf/compterendu/'+filename;
  a.download=filename;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
}
 
// Lightbox
function openLightbox(src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}