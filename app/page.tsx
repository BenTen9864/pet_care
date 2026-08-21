import EnvironmentCarousel from './environment-carousel';

const services = [
  { icon: '泡', title: '舒緩洗澡', text: '溫和清潔、護毛潤絲、吹整與基礎修剪', price: 'NT$ 750 起', tone: 'mint' },
  { icon: '剪', title: '造型美容', text: '依毛況與臉型設計，打造輕盈好整理的造型', price: 'NT$ 1,350 起', tone: 'coral' },
  { icon: '泥', title: '深層護理', text: '天然礦泥與保濕 SPA，照顧乾癢敏感肌膚', price: 'NT$ 980 起', tone: 'yellow' },
];
const steps = [['01','入店諮詢','了解毛孩個性、皮膚與毛況'],['02','安心洗護','一對一照護，不趕場、不綁架'],['03','香香回家','完成照回報，附上居家照護建議']];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="主要導覽">
      <a className="brand" href="#top" aria-label="毛日子首頁"><span className="brand-mark">M</span><span>毛日子<br/><small>MAO DAY</small></span></a>
      <div className="nav-links"><a href="#services">洗護服務</a><a href="#about">關於我們</a><a href="#environment">店内環境</a><a href="#prices">服務流程</a><a href="#contact">聯絡資訊</a></div>
      <a className="button button-small" href="#booking">立即預約 <span>↗</span></a>
    </nav>
    <section className="hero" id="top">
      <div className="hero-copy"><div className="eyebrow"><span>✦</span> 為毛孩留一段舒服的時光</div><h1>洗得乾淨，<br/>更要<span>被溫柔對待。</span></h1><p>毛日子是一間慢節奏的寵物洗護店。從入店到回家，一對一細心陪伴，讓每次洗澡都少一點緊張，多一點安心。</p><div className="hero-actions"><a className="button" href="#booking">預約洗香香 <span>↗</span></a><a className="text-link" href="#services">看看服務內容 <span>↓</span></a></div><div className="trust"><span className="avatars"><b>🐶</b><b>🐾</b><b>🐱</b></span><span><strong>4.9</strong> <i>★★★★★</i><br/><small>超過 320 位毛爸媽的安心選擇</small></span></div></div>
      <div className="hero-art" aria-label="一隻享受洗澡的可愛狗狗插畫"><span className="spark s1">✦</span><span className="spark s2">✦</span><span className="spark s3">●</span><div className="arch"><div className="bubble b1"/><div className="bubble b2"/><div className="bubble b3"/><div className="dog"><div className="ear left"/><div className="ear right"/><div className="head"><span className="eye e1"/><span className="eye e2"/><span className="muzzle"><b/></span></div><div className="body"/></div></div><div className="note-card"><span>♡</span><div><b>今日洗護完成</b><small>小米今天超級乖！</small></div></div></div>
    </section>
    <section className="marquee" aria-label="服務特色"><span>✦ 溫和洗護</span><span>✦ 一對一照護</span><span>✦ 全程透明</span><span>✦ 不關籠等待</span><span>✦ 低敏用品</span></section>
    <section className="section services" id="services"><div className="section-head"><div><span className="kicker">OUR SERVICES</span><h2>讓每根毛，都被好好照顧</h2></div><p>依照毛孩的膚況、毛質與生活習慣，找到最適合的洗護方式。</p></div><div className="service-grid">{services.map(item=><article className="service-card" key={item.title}><div className={`service-icon ${item.tone}`}>{item.icon}<span>✦</span></div><h3>{item.title}</h3><p>{item.text}</p><div><strong>{item.price}</strong><a href="#booking" aria-label={`預約${item.title}`}>→</a></div></article>)}</div></section>
    <section className="care" id="about"><div className="care-art"><div className="window"><span className="sun">☀</span><span className="plant">♧</span><div className="cat"><i/><b>• ᴥ •</b></div></div><div className="tag">NO RUSH<br/><small>慢慢來，也沒關係</small></div></div><div className="care-copy"><span className="kicker">OUR PROMISE</span><h2>不只是洗乾淨，<br/>是理解牠的每個小情緒。</h2><p>我們知道，不是每隻毛孩都喜歡洗澡。毛日子堅持預留充足時間，觀察牠的反應、尊重牠的節奏，讓洗護不再是一場硬仗。</p><ul><li><b>✓</b><span><strong>全預約制，一對一服務</strong><small>不趕時間、不交叉接觸</small></span></li><li><b>✓</b><span><strong>透明可視的洗護空間</strong><small>看得見，更放心</small></span></li><li><b>✓</b><span><strong>嚴選低敏、無刺激用品</strong><small>敏感肌毛孩也能安心使用</small></span></li></ul></div></section>
    <section className="section environment" id="environment"><div className="section-head environment-head"><div><span className="kicker">OUR SPACE</span><h2>让安心，看得见</h2></div><p>从接待、洗护到等候，每个区域都为毛孩的安全与舒适认真设计。</p></div><EnvironmentCarousel /></section>
    <section className="section process" id="prices"><div className="center-head"><span className="kicker">HOW IT WORKS</span><h2>第一次來，也很簡單</h2></div><div className="steps">{steps.map(([n,t,d])=><div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="booking" id="booking"><div><span className="kicker light">BOOK A SPA DAY</span><h2>今天，也讓毛孩<br/>享受一場舒服的洗護吧。</h2><p>加入 LINE 告訴我們毛孩的品種、體重與想預約的服務，我們會為你安排合適時段。</p><div className="booking-actions"><a className="button cream" href="https://line.me" target="_blank" rel="noreferrer">LINE 線上預約 <span>↗</span></a><span>或來電 <a href="tel:0223456789">02 2345 6789</a></span></div></div><div className="booking-paw">🐾<span>READY<br/>FOR A<br/>SPA DAY?</span></div></section>
    <footer id="contact"><a className="brand footer-brand" href="#top"><span className="brand-mark">M</span><span>毛日子<br/><small>MAO DAY</small></span></a><p>台北市大安區暖暖路 28 號<br/>週二至週日 10:00–19:00・週一公休</p><div><a href="#services">服務項目</a><a href="#about">關於我們</a><a href="#booking">預約方式</a></div><small>© 2026 MAO DAY PET GROOMING</small></footer>
  </main>;
}
