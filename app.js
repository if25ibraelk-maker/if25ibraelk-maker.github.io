"use strict";
/* ===== CONFIGURACIÓN: edita solo este bloque ===== */
const SITE={nombre:"[IBRAHIM EL KADDOURI]",nif:"[Y5599318M]",domicilio:"[03330]",email:"[if25.ibraelk@gmail.com]"};
// AdSense: déjalo en false hasta que Google apruebe tu sitio y te dé tu ID real
// (formato "ca-pub-" + 16 dígitos) y el ID de un bloque de anuncios.
const ADS={enabled:false,client:"",slot:""};
/* ================================================= */

document.querySelectorAll("[data-site]").forEach(e=>{const k=e.dataset.site;e.textContent=SITE[k];if(k==="email"&&e.tagName==="A")e.href="mailto:"+SITE.email});
(function(){const c=document.createElement("link");c.rel="canonical";c.href=location.origin+location.pathname;document.head.appendChild(c);
 const b=document.querySelector(".menu"),n=document.getElementById("nv");
 if(b)b.onclick=()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)}})();

/* ===== Consentimiento y anuncios ===== */
(function(){
 const K="hf-consent";
 const get=()=>{try{return localStorage.getItem(K)}catch(e){return null}};
 const set=v=>{try{localStorage.setItem(K,v)}catch(e){}};
 function loadAds(){
  if(!ADS.enabled||!ADS.client||!ADS.slot||get()!=="yes")return;
  const s=document.createElement("script");s.async=true;s.crossOrigin="anonymous";
  s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(ADS.client);
  document.head.appendChild(s);
  document.querySelectorAll(".ad").forEach(a=>{a.classList.add("on");const i=document.createElement("ins");
   i.className="adsbygoogle";i.style.display="block";i.dataset.adClient=ADS.client;i.dataset.adSlot=ADS.slot;
   i.dataset.adFormat="auto";i.dataset.fullWidthResponsive="true";a.appendChild(i);(window.adsbygoogle=window.adsbygoogle||[]).push({})});
 }
 function banner(){
  if(document.getElementById("cb"))return;
  const d=document.createElement("div");d.id="cb";d.setAttribute("role","dialog");d.setAttribute("aria-label","Aviso de cookies");
  d.innerHTML='<p>Usamos almacenamiento técnico necesario y, solo si lo aceptas, cookies publicitarias de terceros (Google AdSense). <a href="cookies.html">Más información</a></p><button class="btn" data-c="yes">Aceptar</button><button class="btn sec" data-c="no">Rechazar</button>';
  d.onclick=e=>{const c=e.target.dataset.c;if(!c)return;set(c);d.remove();if(c==="yes")loadAds()};
  document.body.appendChild(d);
 }
 window.resetConsent=()=>{try{localStorage.removeItem(K)}catch(e){}banner()};
 if(get()===null)banner();else loadAds();
})();

/* ===== Utilidades de cálculo ===== */
const nf=new Intl.NumberFormat("es-ES",{maximumFractionDigits:6});
const nf2=new Intl.NumberFormat("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2});
const n=v=>{const x=parseFloat(String(v).trim().replace(/\s/g,"").replace(",","."));return isFinite(x)?x:NaN};
const fmt=x=>(x!==0&&(Math.abs(x)<1e-6||Math.abs(x)>=1e15))?x.toExponential(4).replace(".",","):nf.format(x);
const pl=(k,a,b)=>k+" "+(k===1?a:b);
const pd=s=>{if(!s)return null;const[a,b,c]=s.split("-").map(Number);return new Date(Date.UTC(a,b-1,c))};
const dim=(y,m)=>new Date(Date.UTC(y,m+1,0)).getUTCDate();
const hm=m=>{const s=m<0?"-":"",a=Math.abs(Math.round(m));return s+Math.floor(a/60)+":"+String(a%60).padStart(2,"0")};

const U={
 "Longitud":{m:["Metro (m)",1],km:["Kilómetro (km)",1000],cm:["Centímetro (cm)",.01],mm:["Milímetro (mm)",.001],mi:["Milla (mi)",1609.344],yd:["Yarda (yd)",.9144],ft:["Pie (ft)",.3048],in:["Pulgada (in)",.0254]},
 "Masa":{kg:["Kilogramo (kg)",1],g:["Gramo (g)",.001],mg:["Miligramo (mg)",1e-6],t:["Tonelada (t)",1000],lb:["Libra (lb)",.45359237],oz:["Onza (oz)",.028349523125],st:["Stone (st)",6.35029318]},
 "Volumen":{l:["Litro (l)",1],ml:["Mililitro (ml)",.001],m3:["Metro cúbico (m³)",1000],galus:["Galón EE. UU.",3.785411784],galuk:["Galón Reino Unido",4.54609],cup:["Taza EE. UU.",.2365882365],floz:["Onza líquida EE. UU.",.0295735295625],tbsp:["Cucharada EE. UU.",.01478676478125],tsp:["Cucharadita EE. UU.",.00492892159375]},
 "Área":{m2:["Metro cuadrado (m²)",1],km2:["Kilómetro cuadrado (km²)",1e6],ha:["Hectárea (ha)",1e4],cm2:["Centímetro cuadrado (cm²)",1e-4],ac:["Acre",4046.8564224],ft2:["Pie cuadrado (ft²)",.09290304],in2:["Pulgada cuadrada (in²)",.00064516],mi2:["Milla cuadrada (mi²)",2589988.110336]},
 "Velocidad":{ms:["Metro/segundo (m/s)",1],kmh:["Kilómetro/hora (km/h)",1/3.6],mph:["Milla/hora (mph)",.44704],kn:["Nudo (kn)",1852/3600]},
 "Tiempo":{s:["Segundo",1],min:["Minuto",60],h:["Hora",3600],d:["Día",86400],w:["Semana",604800]},
 "Datos":{B:["Byte (B)",1],KB:["Kilobyte (KB)",1e3],MB:["Megabyte (MB)",1e6],GB:["Gigabyte (GB)",1e9],TB:["Terabyte (TB)",1e12]},
 "Temperatura":{C:["Celsius (°C)"],F:["Fahrenheit (°F)"],K:["Kelvin (K)"]}
};
const toC={C:x=>x,F:x=>(x-32)*5/9,K:x=>x-273.15},fromC={C:c=>c,F:c=>c*9/5+32,K:c=>c+273.15};

const H={
 pct1:(f,v)=>{const a=n(v("a")),b=n(v("b"));if(isNaN(a)||isNaN(b))return null;return[[fmt(a)+" % de "+fmt(b),fmt(a/100*b)]]},
 pct2:(f,v)=>{const a=n(v("a")),b=n(v("b"));if(isNaN(a)||isNaN(b))return null;if(b===0)return"El total no puede ser 0.";return[[fmt(a)+" es el … de "+fmt(b),fmt(a/b*100)+" %"]]},
 pct3:(f,v)=>{const a=n(v("a")),b=n(v("b"));if(isNaN(a)||isNaN(b))return null;if(a===0)return"El valor inicial no puede ser 0.";const p=(b-a)/a*100;return[[p>=0?"Aumento":"Disminución",(p>0?"+":"")+fmt(p)+" %"],["Diferencia",fmt(b-a)]]},
 pct4:(f,v)=>{const a=n(v("a")),b=n(v("b"));if(isNaN(a)||isNaN(b))return null;const s=v("m")==="sub"?-1:1;return[["Resultado",fmt(a*(1+s*b/100))],["Diferencia",fmt(a*b/100*s)]]},
 desc1:(f,v)=>{const p=n(v("p")),d1=n(v("d1")),d2=v("d2").trim()===""?0:n(v("d2")),iva=v("iva").trim()===""?0:n(v("iva"));
  if(isNaN(p)||isNaN(d1))return null;if(isNaN(d2)||isNaN(iva))return"Revisa el segundo descuento y el IVA.";
  if(p<0||d1<0||d1>100||d2<0||d2>100)return"Los descuentos deben estar entre 0 y 100 %.";
  const fin=p*(1-d1/100)*(1-d2/100),r=[["Precio final",nf2.format(fin)],["Ahorras",nf2.format(p-fin)]];
  if(d2>0&&p>0)r.push(["Descuento total equivalente",fmt((p-fin)/p*100)+" %"]);
  if(iva>0)r.push(["Precio final con "+fmt(iva)+" % de IVA",nf2.format(fin*(1+iva/100))]);return r},
 desc2:(f,v)=>{const o=n(v("o")),x=n(v("x"));if(isNaN(o)||isNaN(x))return null;if(o<=0)return"El precio original debe ser mayor que 0.";
  const p=(o-x)/o*100;return[[p>=0?"Descuento aplicado":"Subida de precio",fmt(Math.abs(p))+" %"],["Diferencia",nf2.format(o-x)]]},
 date1:(f,v)=>{let a=pd(v("d1")),b=pd(v("d2"));if(!a||!b)return null;if(a>b)[a,b]=[b,a];
  let y=b.getUTCFullYear()-a.getUTCFullYear(),m=b.getUTCMonth()-a.getUTCMonth(),d=b.getUTCDate()-a.getUTCDate();
  if(d<0){m--;const pm=b.getUTCMonth()-1;d+=dim(pm<0?b.getUTCFullYear()-1:b.getUTCFullYear(),(pm+12)%12)}
  if(m<0){y--;m+=12}
  const inc=f.elements.inc.checked?1:0,t=Math.round((b-a)/864e5)+inc;let w=0;
  for(let i=a.getTime();i<b.getTime()+inc*864e5;i+=864e5){const k=new Date(i).getUTCDay();if(k&&k!==6)w++}
  return[["Diferencia",pl(y,"año","años")+", "+pl(m,"mes","meses")+" y "+pl(d,"día","días")],["Total de días",nf.format(t)],["En semanas",pl(Math.floor(t/7),"semana","semanas")+" y "+pl(t%7,"día","días")],["Días laborables (lun-vie)",nf.format(w)]]},
 date2:(f,v)=>{const a=pd(v("d")),k=n(v("k"));if(!a||isNaN(k))return null;
  const r=new Date(a.getTime()+(v("op")==="sub"?-k:k)*864e5);
  return[["Fecha resultante",r.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})]]},
 hrs1:(f,v)=>{const L=v("t").split("\n").map(s=>s.trim()).filter(Boolean);if(!L.length)return null;let tot=0;
  for(const l of L){const m=l.match(/^([+-]?)\s*(\d+(?:[.,]\d+)?|\d+:\d{1,2})$/);
   if(!m)return"No entiendo la línea «"+l+"». Usa 2:30, +1:15, -0:45 o 1,5.";
   let x;if(m[2].includes(":")){const[h,mm]=m[2].split(":").map(Number);if(mm>59)return"Los minutos deben ser menores que 60 en «"+l+"».";x=h*60+mm}else x=n(m[2])*60;
   tot+=m[1]==="-"?-x:x}
  return[["Total (horas:minutos)",hm(tot)],["En horas decimales",fmt(tot/60)],["En minutos",fmt(Math.round(tot))],["Líneas sumadas",String(L.length)]]},
 hrs2:(f,v)=>{const a=v("s"),b=v("e");if(!a||!b)return null;const t=x=>{const[h,m]=x.split(":").map(Number);return h*60+m};
  let d=t(b)-t(a);if(d<0)d+=1440;const br=n(v("br"))||0;d-=br;if(d<0)return"El descanso es mayor que la jornada.";
  return[["Tiempo trabajado",hm(d)],["En horas decimales",fmt(d/60)],["En minutos",fmt(d)]]},
 units:(f,v)=>{const cs=f.elements.cat,fr=f.elements.fr,to=f.elements.to;
  if(!cs.options.length)Object.keys(U).forEach(k=>cs.add(new Option(k,k)));
  const c=cs.value,u=U[c];
  if(f.dataset.cur!==c){f.dataset.cur=c;[fr,to].forEach(s=>{s.innerHTML="";Object.keys(u).forEach(k=>s.add(new Option(u[k][0],k)))});fr.selectedIndex=0;to.selectedIndex=1}
  const x=n(v("v"));if(isNaN(x))return null;const a=fr.value,b=to.value;
  const conv=k=>c==="Temperatura"?fromC[k](toC[a](x)):x*u[a][1]/u[k][1];
  const r=[[fmt(x)+" "+u[a][0]+" =",fmt(conv(b))+" "+u[b][0].replace(/^.*\(|\)$/g,"")]];
  Object.keys(u).forEach(k=>{if(k!==a&&k!==b)r.push([u[k][0],fmt(conv(k))])});return r},
 words:(f,v)=>{const t=v("t"),w=(t.trim().match(/\S+/g)||[]).length,sec=s=>{s=Math.round(s);return s<60?s+" s":Math.floor(s/60)+" min "+s%60+" s"};
  return[["Palabras",nf.format(w)],["Caracteres (con espacios)",nf.format([...t].length)],["Caracteres (sin espacios)",nf.format([...t.replace(/\s/g,"")].length)],
   ["Frases",nf.format(t.split(/[.!?…]+/).filter(s=>s.trim()).length)],["Párrafos",nf.format(t.split(/\n\s*\n/).filter(s=>s.trim()).length)],
   ["Tiempo de lectura (220 pal./min)",sec(w/220*60)],["Tiempo de locución (130 pal./min)",sec(w/130*60)]]}
};

document.querySelectorAll("form[data-calc]").forEach(f=>{
 const h=H[f.dataset.calc],o=f.querySelector("output"),v=k=>f.elements[k].value;
 const run=()=>{o.textContent="";const r=h(f,v);const p=document.createElement("p");
  if(r==null){p.className="hint";p.textContent="Introduce los datos para ver el resultado.";o.appendChild(p);return}
  if(typeof r==="string"){p.className="err";p.textContent=r;o.appendChild(p);return}
  const dl=document.createElement("dl");r.forEach(([k,x])=>{const d=document.createElement("div"),a=document.createElement("dt"),b=document.createElement("dd");a.textContent=k;b.textContent=x;d.append(a,b);dl.appendChild(d)});o.appendChild(dl)};
 f.addEventListener("input",run);f.addEventListener("change",run);
 f.addEventListener("submit",e=>e.preventDefault());f.addEventListener("reset",()=>setTimeout(run));run();
});
