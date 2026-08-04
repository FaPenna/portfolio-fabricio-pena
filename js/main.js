/* ── NAV SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

function updateActiveNav() {
  const ids = ['home','sobre','experiencia','projetos','habilidades','comunidade','formacao','contato'];
  let cur = '';
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) cur = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}

/* ── MOBILE NAV ── */
document.getElementById('hamburger').addEventListener('click', () =>
  document.getElementById('mobile-nav').classList.add('open'));
document.getElementById('mobile-close').addEventListener('click', closeMNav);
function closeMNav() { document.getElementById('mobile-nav').classList.remove('open'); }

/* ── TYPEWRITER ── */
const roles = [
  'Engenheiro de Dados Jr.',
  'Python & SQL Developer',
  'Power BI Analyst',
  'ETL Pipeline Builder',
  'BI & Analytics Specialist'
];
let rIdx = 0, cIdx = 0, del = false;
const tw = document.getElementById('typewriter');

(function type() {
  const cur = roles[rIdx];
  if (!del) {
    tw.textContent = cur.slice(0, ++cIdx);
    if (cIdx === cur.length) { del = true; return setTimeout(type, 2200); }
  } else {
    tw.textContent = cur.slice(0, --cIdx);
    if (cIdx === 0) { del = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(type, del ? 45 : 75);
})();

/* ── CANVAS NETWORK ── */
const canvas = document.getElementById('hero-canvas');
const ctx    = canvas.getContext('2d');
let nodes = [], raf;

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initNodes() {
  nodes = [];
  const count = Math.min(Math.floor(canvas.width * canvas.height / 16000), 75);
  for (let i = 0; i < count; i++) {
    nodes.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r:  Math.random() * 1.8 + 0.8,
      ph: Math.random() * Math.PI * 2
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes.forEach(n => {
    n.x += n.vx; n.y += n.vy; n.ph += 0.018;
    if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    const pr = n.r + Math.sin(n.ph) * 0.5;
    ctx.beginPath();
    ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,212,255,0.65)';
    ctx.fill();
  });
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 145) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${(1 - d / 145) * 0.22})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }
  raf = requestAnimationFrame(draw);
}

resize(); initNodes(); draw();
window.addEventListener('resize', () => {
  cancelAnimationFrame(raf); resize(); initNodes(); draw();
});

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
