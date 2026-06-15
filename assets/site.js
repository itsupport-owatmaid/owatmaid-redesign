/* Owat Maid — shared header/footer/FAB + behaviors (works on file://, no fetch) */
(function(){
  "use strict";
  document.documentElement.classList.add('js');

  var NAV = [
    {href:'index.html',    key:'home',     label:'หน้าแรก'},
    {href:'services.html', key:'services', label:'บริการ'},
    {href:'about.html',    key:'about',    label:'เกี่ยวกับเรา'},
    {href:'clients.html',  key:'clients',  label:'ลูกค้า/ผลงาน'},
    {href:'products.html', key:'products', label:'สินค้า'},
    {href:'contact.html',  key:'contact',  label:'ติดต่อ'}
  ];

  // active page from <body data-page> or filename
  var active = document.body.getAttribute('data-page');
  if(!active){
    var f = (location.pathname.split('/').pop()||'index.html').toLowerCase();
    var hit = NAV.filter(function(n){return n.href===f;})[0];
    active = hit ? hit.key : 'home';
  }

  function navLinks(cls){
    return NAV.map(function(n){
      var cur = n.key===active ? ' aria-current="page"' : '';
      return '<a href="'+n.href+'"'+cur+'>'+n.label+'</a>';
    }).join('');
  }

  var iconPhone='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  // ---------- header ----------
  var header =
  '<header class="header" id="top"><div class="wrap nav">'+
    '<a class="brand" href="index.html" aria-label="Owat Maid หน้าแรก"><img src="assets/logo.png" alt="โลโก้ Owat Maid"></a>'+
    '<nav class="nav-links" aria-label="เมนูหลัก">'+navLinks()+'</nav>'+
    '<div class="nav-cta">'+
      '<a class="nav-tel" href="tel:029074471">'+iconPhone+'02-907-4471</a>'+
      '<a class="btn btn-primary" href="contact.html">ขอใบเสนอราคา</a>'+
      '<button class="burger" id="burger" aria-label="เปิดเมนู" aria-expanded="false" aria-controls="drawer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>'+
    '</div>'+
  '</div></header>'+
  '<div class="backdrop" id="backdrop"></div>'+
  '<aside class="drawer" id="drawer" aria-label="เมนูมือถือ" aria-hidden="true">'+
    '<div class="dhead"><img src="assets/logo.png" alt="Owat Maid"><button class="dclose" id="dclose" aria-label="ปิดเมนู"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
    navLinks()+
    '<a class="btn btn-primary" href="contact.html">ขอใบเสนอราคา</a>'+
  '</aside>';

  // ---------- footer ----------
  var footer =
  '<footer class="footer"><div class="wrap"><div class="foot-grid">'+
    '<div class="foot-brand"><img src="assets/logo.png" alt="Owat Maid">'+
      '<p>บริษัท โอวาท โปร แอนด์ ควิก จำกัด ผู้ให้บริการทำความสะอาดครบวงจร ด้วยทีมงานมืออาชีพและมาตรฐานสากล</p>'+
      '<div class="foot-social">'+
        '<a href="https://www.facebook.com/owatmaid" aria-label="Facebook โอวาทเมด" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>'+
        '<a href="https://line.me/R/ti/p/~@owatmaid" aria-label="LINE @owatmaid" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.69 2 10.23c0 4.07 3.56 7.48 8.37 8.13.33.07.77.22.88.5.1.26.07.66.03.92l-.14.85c-.04.26-.2 1.02.9.56 1.1-.46 5.92-3.49 8.08-5.97 1.49-1.64 2-3.31 2-5.18C22 5.69 17.52 2 12 2z"/></svg></a>'+
        '<a href="https://www.owatmaid.com" aria-label="เว็บไซต์โอวาทเมด" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg></a>'+
      '</div></div>'+
    '<div><h4>บริการ</h4><ul class="foot-links">'+
      '<li><a href="services.html">แม่บ้านประจำ</a></li><li><a href="services.html">งานเฉพาะทาง</a></li>'+
      '<li><a href="services.html">จัดหาแรงงาน</a></li><li><a href="products.html">สินค้าและอุปกรณ์</a></li>'+
      '<li><a href="contact.html">ขอใบเสนอราคา</a></li></ul></div>'+
    '<div><h4>บริษัท</h4><ul class="foot-links">'+
      '<li><a href="about.html">เกี่ยวกับเรา</a></li><li><a href="about.html#policy">คุณภาพและความปลอดภัย</a></li>'+
      '<li><a href="clients.html">ลูกค้าและผลงาน</a></li><li><a href="contact.html">พื้นที่ให้บริการ</a></li></ul></div>'+
    '<div><h4>ติดต่อเรา</h4><ul class="foot-contact">'+
      '<li>'+iconPhone+'<a href="tel:029074471">02-907-4471-4</a></li>'+
      '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg><a href="mailto:maid@o-wat.com">maid@o-wat.com</a></li>'+
      '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>จันทร์-เสาร์ 08.00-17.00 น. · ฝ่ายขาย 24 ชม.</span></li></ul>'+
      '<div class="branch" style="margin-top:1.2rem"><b>สาขากรุงเทพฯ (สำนักงานใหญ่)</b><p>20, 22, 24, 26 ซอยสีหบุรานุกิจ 4 ถนนสีหบุรานุกิจ แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510</p></div>'+
      '<div class="branch"><b>สาขาชลบุรี</b><p>99/51 หมู่ 3 ต.ดอนหัวฬ่อ อ.เมืองชลบุรี จ.ชลบุรี 20000 · โทร 038-440-087</p></div>'+
      '<div class="branch"><b>สาขาลพบุรี</b><p>141/18 หมู่ 6 ต.พัฒนานิคม อ.พัฒนานิคม จ.ลพบุรี 15140 · โทร 091-772-2161</p></div></div>'+
  '</div><div class="foot-bottom"><span>© 2568 บริษัท โอวาท โปร แอนด์ ควิก จำกัด · สงวนลิขสิทธิ์</span><span>โอวาทเมด สะอาดดี สังคมดี</span></div></div></footer>';

  // ---------- FAB + back to top ----------
  var fab =
  '<button class="totop" id="totop" aria-label="กลับขึ้นด้านบน"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg></button>'+
  '<div class="cfab" id="cfab"><div class="cfab-menu" id="cfabMenu" role="menu" aria-label="ช่องทางติดต่อโอวาทเมด">'+
    '<a class="cfab-item" href="tel:029074471" role="menuitem"><span class="ic" style="background:oklch(0.58 0.13 150)">'+iconPhone+'</span>โทร 02-907-4471</a>'+
    '<a class="cfab-item" href="https://line.me/R/ti/p/~@owatmaid" target="_blank" rel="noopener" role="menuitem"><span class="ic" style="background:#06C755"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.69 2 10.23c0 4.07 3.56 7.48 8.37 8.13.33.07.77.22.88.5.1.26.07.66.03.92l-.14.85c-.04.26-.2 1.02.9.56 1.1-.46 5.92-3.49 8.08-5.97 1.49-1.64 2-3.31 2-5.18C22 5.69 17.52 2 12 2z"/></svg></span>LINE @owatmaid</a>'+
    '<a class="cfab-item" href="contact.html" role="menuitem"><span class="ic" style="background:var(--brand-press)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg></span>ขอใบเสนอราคา</a>'+
  '</div><button class="cfab-btn" id="cfabBtn" aria-expanded="false" aria-controls="cfabMenu" aria-label="เปิดช่องทางติดต่อโอวาทเมด"><img src="assets/logo.png" alt=""><span class="lbl">ติดต่อ</span></button></div>';

  // ---------- inject ----------
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + fab);

  // ---------- behaviors ----------
  var headerEl=document.querySelector('.header'), totop=document.getElementById('totop');
  function onScroll(){ var y=window.scrollY; headerEl.classList.toggle('scrolled', y>8); totop.classList.toggle('show', y>600); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  totop.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

  // drawer
  var burger=document.getElementById('burger'), drawer=document.getElementById('drawer'),
      backdrop=document.getElementById('backdrop'), dclose=document.getElementById('dclose');
  function openDrawer(){ drawer.classList.add('open'); backdrop.classList.add('open'); burger.setAttribute('aria-expanded','true'); drawer.setAttribute('aria-hidden','false'); }
  function closeDrawer(){ drawer.classList.remove('open'); backdrop.classList.remove('open'); burger.setAttribute('aria-expanded','false'); drawer.setAttribute('aria-hidden','true'); }
  burger.addEventListener('click', openDrawer);
  dclose.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeDrawer); });

  // FAB
  var cfab=document.getElementById('cfab'), cfabBtn=document.getElementById('cfabBtn');
  function closeCfab(){ cfab.classList.remove('open'); cfabBtn.setAttribute('aria-expanded','false'); }
  cfabBtn.addEventListener('click', function(e){ e.stopPropagation(); var o=cfab.classList.toggle('open'); cfabBtn.setAttribute('aria-expanded', o); });
  document.addEventListener('click', function(e){ if(!cfab.contains(e.target)) closeCfab(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeDrawer(); closeCfab(); } });
  cfab.querySelectorAll('.cfab-item').forEach(function(a){ a.addEventListener('click', closeCfab); });

  // services tabs (if present)
  var tabs=document.querySelectorAll('.svc-tabs [role="tab"]');
  tabs.forEach(function(tab){ tab.addEventListener('click', function(){
    tabs.forEach(function(t){ var s=t===tab; t.setAttribute('aria-selected', s); document.getElementById(t.getAttribute('aria-controls')).hidden=!s; });
  }); });

  // portal app nav (if present)
  var appBtns=document.querySelectorAll('.appnav button[data-view]'), appViews=document.querySelectorAll('.appview');
  appBtns.forEach(function(b){ b.addEventListener('click', function(){
    appBtns.forEach(function(x){ x.setAttribute('aria-current', x===b); });
    var v=b.getAttribute('data-view');
    appViews.forEach(function(view){ view.classList.toggle('active', view.getAttribute('data-view')===v); });
  }); });

  // booking form (if present)
  var form=document.getElementById('bookForm');
  if(form){ form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){ form.reportValidity(); return; }
    document.getElementById('formFields').style.display='none';
    document.getElementById('formOk').classList.add('show');
    document.getElementById('formOk').scrollIntoView({behavior:'smooth', block:'center'});
  }); }

  // product search (if present)
  var psearch=document.getElementById('prodSearch');
  if(psearch){
    var pbtn=document.getElementById('prodSearchBtn');
    var pchips=document.querySelectorAll('.search-chips button');
    var pno=document.getElementById('prodNoResult');
    var pcards=document.querySelectorAll('.prod');
    var psecs=[]; document.querySelectorAll('.prod-grid').forEach(function(g){ var s=g.closest('.section'); if(psecs.indexOf(s)<0) psecs.push(s); });
    var revealed=false;
    function runProdSearch(){
      var q=psearch.value.trim().toLowerCase();
      if(!revealed){ // ensure filtered cards are visible even before scroll-reveal
        psecs.forEach(function(s){ s.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(function(e){ e.classList.add('in'); }); });
        revealed=true;
      }
      var total=0;
      pcards.forEach(function(c){ var m=!q || c.textContent.toLowerCase().indexOf(q)>-1; c.style.display=m?'':'none'; if(m) total++; });
      psecs.forEach(function(s){ var c=0; s.querySelectorAll('.prod').forEach(function(p){ if(p.style.display!=='none') c++; }); s.hidden=(c===0); });
      if(pno){ var sp=pno.querySelector('span'); if(sp) sp.textContent=psearch.value; pno.hidden=(total>0); }
      pchips.forEach(function(ch){ ch.setAttribute('aria-pressed', (ch.getAttribute('data-q')||'').toLowerCase()===q && q!==''); });
    }
    psearch.addEventListener('input', runProdSearch);
    psearch.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); runProdSearch(); } });
    if(pbtn) pbtn.addEventListener('click', runProdSearch);
    pchips.forEach(function(ch){ ch.addEventListener('click', function(){
      psearch.value = (ch.getAttribute('aria-pressed')==='true') ? '' : (ch.getAttribute('data-q')||'');
      runProdSearch(); psearch.focus();
    }); });
  }

  // reveal on scroll
  var reveals=document.querySelectorAll('[data-reveal],[data-reveal-stagger]');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){
        var el=en.target;
        if(el.hasAttribute('data-reveal-stagger')){ Array.prototype.forEach.call(el.children, function(c,i){ c.style.transitionDelay=(i*70)+'ms'; }); }
        el.classList.add('in'); io.unobserve(el);
      }});
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add('in'); }); }
})();
