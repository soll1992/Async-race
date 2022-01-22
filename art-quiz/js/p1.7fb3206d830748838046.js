(()=>{"use strict";var s={216:(s,e,a)=>{a.d(e,{Z:()=>t});const t='<div class="settings"> <div class="settings-wrap"> <div class="settings-header"> <button class="back settings-nav-buttons">Settings</button> </div> <div class="volume"> <h2 class="title">Volume</h2> <div class="volume-slider"> <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </div> <div class="mute mute-off"> </div> </div> <div class="time-game"> <h2 class="title">Time game</h2> <div class="toggle-container"> <label for="toggle-button" class="text">On</label> <input type="checkbox" id="toggle-button" class="toggle-button"> </div> </div> <div class="time-answer"> <h2 class="title">Time to answer</h2> <div class="time-input-body"> <button class="plus time-button">+</button> <input class="time-input" type="number" value="20" readonly="readonly"> <button class="minus time-button">-</button> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'},699:(s,e,a)=>{a.d(e,{Z:()=>i});var t=a(216);class i{constructor(){}async render(){return t.Z}async after_render(){}}}},e={};function a(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={exports:{}};return s[t](r,r.exports,a),r.exports}a.d=(s,e)=>{for(var t in e)a.o(e,t)&&!a.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},a.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),(()=>{var s=a(699);const e=()=>{const s=(location.hash.slice(1).toLowerCase()||"/").split("/"),e={resource:null,id:null,verb:null};return e.resource=s[1],e.id=s[2],e.verb=s[3],e},t=new class{constructor(){}async render(){return'<div class="main"> <div class="main-body"> <div class="home-header"> <a href="#/settings" class="settings-button"></a> </div> <div class="logo"></div> <div class="categories-main-buttons"> <div class="artist"> <a class="categori-link artist-link" href="#/categories_artist">Artist quiz</a> </div> <div class="pictures"> <a class="categori-link pictures-link" href="#/categories_pictures">Pictures quiz</a> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div> '}async after_render(){}},i=new s.Z,r=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav picture-link link" href="#/categories_pictures">Pictures quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="portrait card-title">Portrait <span class="score portrait"></span></div> <img class="portrait grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/0.webp" alt="art"> </a> <a href="#/result" class="portrait result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="landscape card-title">Landscape <span class="score landscape"></span></div> <img class="landscape grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/10.webp" alt="art"> </a> <a href="#/result" class="landscape result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="stillLife card-title">Still life <span class="score stillLife"></span></div> <img class="stillLife grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/20.webp" alt="art"> </a> <a href="#/result" class="stillLife result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="impressionism card-title">Impressionism <span class="score impressionism"></span></div> <img class="impressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/30.webp" alt="art"> </a> <a href="#/result" class="impressionism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="expressionism card-title">Expressionism <span class="score expressionism"></span></div> <img class="expressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/40.webp" alt="art"> </a> <a href="#/result" class="expressionism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="avantGarde card-title">Avant-garde <span class="score avantGarde"></span></div> <img class="avantGarde grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/50.webp" alt="art"> </a> <a href="#/result" class="avantGarde result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="renaissance card-title">Renaissance <span class="score renaissance"></span></div> <img class="renaissance grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/60.webp" alt="art"> </a> <a href="#/result" class="renaissance result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="surrealism card-title">Surrealism <span class="score surrealism"></span></div> <img class="surrealism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/70.webp" alt="art"> </a> <a href="#/result" class="surrealism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="kitsch card-title">Kitsch <span class="score kitsch"></span></div> <img class="kitsch grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/80.webp" alt="art"> </a> <a href="#/result" class="kitsch result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="minimalism card-title">Minimalism <span class="score minimalism"></span></div> <img class="minimalism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/90.webp" alt="art"> </a> <a href="#/result" class="minimalism result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="interior card-title">Interior <span class="score interior"></span></div> <img class="interior grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/100.webp" alt="art"> </a> <a href="#/result" class="interior result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions" class="categori-card"> <div class="nude card-title">Nude <span class="score nude"></span></div> <img class="nude grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/110.webp" alt="art"> </a> <a href="#/result" class="nude result-link">Score</a> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},n=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav artist-link link" href="#/categories_artist"> Artist quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="portraitP card-title">Portrait <span class="score portraitP"></span></div> <img class="portraitP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/120.webp" alt="art"> </a> <a href="#/result" class="portraitP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="landscapeP card-title">Landscape <span class="score landscapeP"></span></div> <img class="landscapeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/130.webp" alt="art"> </a> <a href="#/result" class="landscapeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="stillLifeP card-title">Still life <span class="score stillLifeP"></span></div> <img class="stillLifeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/140.webp" alt="art"> </a> <a href="#/result" class="stillLifeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="impressionismP card-title">Impressionism <span class="score impressionismP"></span></div> <img class="impressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/150.webp" alt="art"> </a> <a href="#/result" class="impressionismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="expressionismP card-title">Expressionism <span class="score expressionismP"></span></div> <img class="expressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/160.webp" alt="art"> </a> <a href="#/result" class="expressionismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="avantGardeP card-title">Avant-garde <span class="score avantGardeP"></span></div> <img class="avantGardeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/170.webp" alt="art"> </a> <a href="#/result" class="avantGardeP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="renaissanceP card-title">Renaissance <span class="score renaissanceP"></span></div> <img class="renaissanceP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/180.webp" alt="art"> </a> <a href="#/result" class="renaissanceP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="surrealismP card-title">Surrealism <span class="score surrealismP"></span></div> <img class="surrealismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/190.webp" alt="art"> </a> <a href="#/result" class="surrealismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="kitschP card-title">Kitsch <span class="score kitschP"></span></div> <img class="kitschP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/200.webp" alt="art"> </a> <a href="#/result" class="kitschP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="minimalismP card-title">Minimalism <span class="score minimalismP"></span></div> <img class="minimalismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/210.webp" alt="art"> </a> <a href="#/result" class="minimalismP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="interiorP card-title">Interior <span class="score interiorP"></span></div> <img class="interiorP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/220.webp" alt="art"> </a> <a href="#/result" class="interiorP result-link">Score</a> </div> <div class="links-wrap"> <a href="#/questions_pictures" class="categori-card"> <div class="nudeP card-title">Nude <span class="score nudeP"></span></div> <img class="nudeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/230.webp" alt="art"> </a> <a href="#/result" class="nudeP result-link">Score</a> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},l=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_artist">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question">Who is the author of this picture?</div> <div class="painting"> <div class="painting-img"></div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_artist">Categories</a> </div> </div> </div> <div class="answer"> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}wrap(s,e,a){function t(s){for(let e=s.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[s[e],s[a]]=[s[a],s[e]]}}a?function(){let a=new Set;const i=s[e].author,r=document.querySelector(".question"),n=document.querySelectorAll(".answer-option");r.textContent=`Which is ${i} picture?`,a.add(s[e].imageNum);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].imageNum)}let l=[...a];t(l);for(let s=0;s<l.length;s++)n[s].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${l[s]}.webp')`}():function(){let a=new Set;!function(){let a=s[e].imageNum;const t=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp`,i.onload=()=>{t.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp')`}}(),a.add(s[e].author);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].author)}let i=[...a];t(i);const r=document.querySelectorAll(".answer-option");for(let s=0;s<i.length;s++)r[s].innerHTML=i[s]}()}},c=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_pictures">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question"></div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_pictures">Categories</a> </div> </div> </div> <div class="answer answer-pic"> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}async wrap(s,e){!async function(){let a=new Set;!function(){let a=s[e].imageNum;const t=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp`,i.onload=()=>{t.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${a}.webp')`}}(),console.log(e),a.add(s[e].author);for(let e=0;a.size<4;e++){let e=Math.round(9*Math.random());a.add(s[e].author)}let t,i=[...a];!function(s){for(let e=s.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[s[e],s[a]]=[s[a],s[e]]}}(i),void 0!==document.querySelectorAll(".answer-option")[0]&&(t=document.querySelectorAll(".answer-option"));for(let s=0;s<i.length;s++)t[s].innerHTML=i[s]}()}},o=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <button class="result-nav questions-nav-buttons link">Categories </button></div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="result-body"> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> <div class="result-painting grey"> <div class="result-mask"> <div class="author-name bold"></div> <div class="painting-year"></div> <div class="painting-name bold"></div> </div> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},d=new class{constructor(){}async render(){return'<section class="section"> <h1> 404 Error </h1> </section> '}async after_render(){}},u=[],m=[],v=[],g=[],p=[],h=[],f=[],k=[],y=[],b=[],P=[],w=[],L=[],S=[],q=[],x=[],N=[],E=[],_=[],A=[],G=[],I=[],C=[],$=[];let M,O,H,z,T={portrait:[],landscape:[],stillLife:[],impressionism:[],expressionism:[],avantGarde:[],renaissance:[],surrealism:[],kitsch:[],minimalism:[],interior:[],nude:[],portraitP:[],landscapeP:[],stillLifeP:[],impressionismP:[],expressionismP:[],avantGardeP:[],renaissanceP:[],surrealismP:[],kitschP:[],minimalismP:[],interiorP:[],nudeP:[]},R={},J=[],j=!1,Z=0,V=0,F=!0,K=!1,Q=[],U=[];function W(){const s=new Audio;s.src="./assets/sound/true.mp3",s.volume=O/100,s.muted=!!j,s.play()}async function B(){const s=new Audio;s.src="./assets/sound/false.mp3",s.volume=O/100,s.muted=!!j,s.play()}function D(s){const e=document.querySelector(".fixed-overlay-falls"),a=document.querySelector(".time-line"),t=document.querySelectorAll(".answer-option"),i=document.querySelectorAll(".questions-nav-buttons"),r=document.querySelector(".answer"),n=document.querySelectorAll(".true-painting-conteiner"),l=document.querySelectorAll(".true-author"),c=document.querySelectorAll(".true-year"),o=document.querySelectorAll(".true-name");let d=s,u=setInterval((function(){a.textContent=d,d--,d<0&&(e.classList.add("fixed-overlay-active"),"portrait"===M?T.portrait.push(0):"landscape"===M?T.landscape.push(0):"stillLife"===M?T.stillLife.push(0):"impressionism"===M?T.impressionism.push(0):"expressionism"===M?T.expressionism.push(0):"avantGarde"===M?T.avantGarde.push(0):"renaissance"===M?T.renaissance.push(0):"surrealism"===M?T.surrealism.push(0):"kitsch"===M?T.kitsch.push(0):"minimalism"===M?T.minimalism.push(0):"interior"===M?T.interior.push(0):"nude"===M?T.nude.push(0):"portraitP"===M?T.portraitP.push(0):"landscapeP"===M?T.landscapeP.push(0):"stillLifeP"===M?T.stillLifeP.push(0):"impressionismP"===M?T.impressionismP.push(0):"expressionismP"===M?T.expressionismP.push(0):"avantGardeP"===M?T.avantGardeP.push(0):"renaissanceP"===M?T.renaissanceP.push(0):"surrealismP"===M?T.surrealismP.push(0):"kitschP"===M?T.kitschP.push(0):"minimalismP"===M?T.minimalismP.push(0):"interiorP"===M?T.interiorP.push(0):"nudeP"===M&&T.nudeP.push(0),r.classList.remove("answer-active"),B(),l.forEach((s=>{s.textContent=J[Z].author})),c.forEach((s=>{s.textContent=J[Z].year})),o.forEach((s=>{s.textContent=J[Z].name})),n.forEach((s=>s.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${J[Z].imageNum}.webp')`)),clearInterval(u))}),1e3);t.forEach((s=>s.addEventListener("click",(function(){clearInterval(u)})))),i.forEach((s=>s.addEventListener("click",(function(){clearInterval(u),Z=0}))))}const X={"/":t,"/settings":i,"/categories_artist":r,"/categories_pictures":n,"/questions":l,"/questions_pictures":c,"/result":o},Y=async()=>{const s=document.getElementById("page_container"),a=e(),Y=(a.resource?`/${a.resource}`:"/")+(a.id?"/:id":"")+(a.verb?`/${a.verb}`:""),ss=X[Y]?X[Y]:d;if(s.innerHTML=await ss.render(),await ss.after_render(),await async function(){const s=await fetch("data.json");(await s.json()).map((s=>{s.imageNum<10&&u.length<10?u.push(s):s.imageNum>=10&&s.imageNum<20&&m.length<10?m.push(s):s.imageNum>=20&&s.imageNum<30&&v.length<10?v.push(s):s.imageNum>=30&&s.imageNum<40&&g.length<10?g.push(s):s.imageNum>=40&&s.imageNum<50&&p.length<10?p.push(s):s.imageNum>=50&&s.imageNum<60&&h.length<10?h.push(s):s.imageNum>=60&&s.imageNum<70&&f.length<10?f.push(s):s.imageNum>=70&&s.imageNum<80&&k.length<10?k.push(s):s.imageNum>=80&&s.imageNum<90&&y.length<10?y.push(s):s.imageNum>=90&&s.imageNum<100&&b.length<10?b.push(s):s.imageNum>=100&&s.imageNum<110&&P.length<10?P.push(s):s.imageNum>=110&&s.imageNum<120&&w.length<10?w.push(s):s.imageNum>=120&&s.imageNum<130&&L.length<10?L.push(s):s.imageNum>=130&&s.imageNum<140&&S.length<10?S.push(s):s.imageNum>=140&&s.imageNum<150&&q.length<10?q.push(s):s.imageNum>=150&&s.imageNum<160&&x.length<10?x.push(s):s.imageNum>=160&&s.imageNum<170&&N.length<10?N.push(s):s.imageNum>=170&&s.imageNum<180&&E.length<10?E.push(s):s.imageNum>=180&&s.imageNum<190&&_.length<10?_.push(s):s.imageNum>=190&&s.imageNum<200&&A.length<10?A.push(s):s.imageNum>=200&&s.imageNum<210&&G.length<10?G.push(s):s.imageNum>=210&&s.imageNum<220&&I.length<10?I.push(s):s.imageNum>=220&&s.imageNum<230&&C.length<10?C.push(s):$.length<10&&$.push(s)}))}(),ss===l||ss===c){const s=document.querySelectorAll(".answer-option"),e=document.querySelectorAll(".continue"),a=document.querySelector(".answer");l.wrap(J,Z,K),F&&D(H),a.classList.add("answer-active"),s.forEach((s=>s.addEventListener("click",(s=>{const e=document.querySelector(".fixed-overlay-true"),t=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),r=document.querySelectorAll(".true-author"),n=document.querySelectorAll(".true-year"),l=document.querySelectorAll(".true-name");z=J[Z].author,a.classList.remove("answer-active"),K?(z=J[Z].imageNum,s.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${z}.webp")`?(e.classList.add("fixed-overlay-active"),"portraitP"===M?T.portraitP.push(1):"landscapeP"===M?T.landscapeP.push(1):"stillLifeP"===M?T.stillLifeP.push(1):"impressionismP"===M?T.impressionismP.push(1):"expressionismP"===M?T.expressionismP.push(1):"avantGardeP"===M?T.avantGardeP.push(1):"renaissanceP"===M?T.renaissanceP.push(1):"surrealismP"===M?T.surrealismP.push(1):"kitschP"===M?T.kitschP.push(1):"minimalismP"===M?T.minimalismP.push(1):"interiorP"===M?T.interiorP.push(1):"nudeP"===M&&T.nudeP.push(1),W(),V++):s.target.style.backgroundImage!=`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${z}.webp")`&&(t.classList.add("fixed-overlay-active"),"portraitP"===M?T.portraitP.push(0):"landscapeP"===M?T.landscapeP.push(0):"stillLifeP"===M?T.stillLifeP.push(0):"impressionismP"===M?T.impressionismP.push(0):"expressionismP"===M?T.expressionismP.push(0):"avantGardeP"===M?T.avantGardeP.push(0):"renaissanceP"===M?T.renaissanceP.push(0):"surrealismP"===M?T.surrealismP.push(0):"kitschP"===M?T.kitschP.push(0):"minimalismP"===M?T.minimalismP.push(0):"interiorP"===M?T.interiorP.push(0):"nudeP"===M&&T.nudeP.push(0),B())):s.target.textContent==z?(e.classList.add("fixed-overlay-active"),"portrait"===M?T.portrait.push(1):"landscape"===M?T.landscape.push(1):"stillLife"===M?T.stillLife.push(1):"impressionism"===M?T.impressionism.push(1):"expressionism"===M?T.expressionism.push(1):"avantGarde"===M?T.avantGarde.push(1):"renaissance"===M?T.renaissance.push(1):"surrealism"===M?T.surrealism.push(1):"kitsch"===M?T.kitsch.push(1):"minimalism"===M?T.minimalism.push(1):"interior"===M?T.interior.push(1):"landscape"===M&&T.nude.push(1),W(),V++):s.target.textContent!=z&&(t.classList.add("fixed-overlay-active"),"portrait"===M?T.portrait.push(0):"landscape"===M?T.landscape.push(0):"stillLife"===M?T.stillLife.push(0):"impressionism"===M?T.impressionism.push(0):"expressionism"===M?T.expressionism.push(0):"avantGarde"===M?T.avantGarde.push(0):"renaissance"===M?T.renaissance.push(0):"surrealism"===M?T.surrealism.push(0):"kitsch"===M?T.kitsch.push(0):"minimalism"===M?T.minimalism.push(0):"interior"===M?T.interior.push(0):"landscape"===M&&T.nude.push(0),B()),r.forEach((s=>{s.textContent=J[Z].author})),n.forEach((s=>{s.textContent=J[Z].year})),l.forEach((s=>{s.textContent=J[Z].name})),i.forEach((s=>s.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${J[Z].imageNum}.webp')`))})))),e.forEach((s=>s.addEventListener("click",(function(){const s=document.querySelector(".fixed-overlay-true"),e=document.querySelector(".fixed-overlay-falls"),t=document.querySelector(".fixed-overlay-result"),i=document.querySelector(".test");9!=Z?(Z++,s.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),a.classList.add("answer-active"),l.wrap(J,Z,K),F&&D(H)):(s.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),t.classList.add("fixed-overlay-active"),Z=0,async function(){const s=new Audio;s.src="./assets/sound/result.mp3",s.volume=O/100,s.muted=!!j,s.play()}(),i.textContent=`Result: ${V}/10`)}))))}else if(ss===r){const s=document.querySelectorAll(".categori-card"),e=document.querySelectorAll(".result-link"),a=document.querySelectorAll(".score"),t=document.querySelector(".picture-link"),i=document.querySelectorAll(".categori-img");void 0!==M&&(R[M]=`${V}/10`);for(let s in R)a.forEach((e=>{e.classList.contains(s)&&(e.textContent=R[s])})),i.forEach((e=>{e.classList.contains(s)&&e.classList.remove("grey")})),e.forEach((e=>{e.classList.contains(s)&&e.classList.add("result-link-active")}));s.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portrait")?(J=u,K=!1,M="portrait",T.portrait=[]):s.target.classList.contains("landscape")?(J=m,K=!1,M="landscape",T.landscape=[]):s.target.classList.contains("stillLife")?(J=v,K=!1,M="stillLife",T.stillLife=[]):s.target.classList.contains("impressionism")?(J=g,K=!1,M="impressionism",T.impressionism=[]):s.target.classList.contains("expressionism")?(J=p,K=!1,M="expressionism",T.expressionism=[]):s.target.classList.contains("avantGarde")?(J=h,K=!1,M="avantGarde",T.avantGarde=[]):s.target.classList.contains("renaissance")?(J=f,K=!1,M="renaissance",T.renaissance=[]):s.target.classList.contains("surrealism")?(J=k,K=!1,M="surrealism",T.surrealism=[]):s.target.classList.contains("kitsch")?(J=y,K=!1,M="kitsch",T.kitsch=[]):s.target.classList.contains("minimalism")?(J=b,K=!1,M="minimalism",T.minimalism=[]):s.target.classList.contains("interior")?(J=P,K=!1,M="interior",T.interior=[]):s.target.classList.contains("nude")&&(J=w,K=!1,M="nude",T.nude=[]),Z=0,V=0})))),e.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portrait")?(Q=u,U=T.portrait):s.target.classList.contains("landscape")?(Q=m,U=T.landscape):s.target.classList.contains("stillLife")?(Q=v,U=T.stillLife):s.target.classList.contains("impressionism")?(Q=g,U=T.impressionism):s.target.classList.contains("expressionism")?(Q=p,U=T.expressionism):s.target.classList.contains("avantGarde")?(Q=h,U=T.avantGarde):s.target.classList.contains("renaissance")?(Q=f,U=T.renaissance):s.target.classList.contains("surrealism")?(Q=k,U=T.surrealism):s.target.classList.contains("kitsch")?(Q=y,U=T.kitsch):s.target.classList.contains("minimalism")?(Q=b,U=T.minimalism):s.target.classList.contains("interior")?(Q=P,U=T.interior):s.target.classList.contains("nude")&&(Q=w,U=T.nude)})))),t.addEventListener("click",(function(){K=!0}))}else if(ss===n){const s=document.querySelectorAll(".categori-card"),e=document.querySelector(".artist-link"),a=document.querySelectorAll(".result-link"),t=document.querySelectorAll(".score"),i=document.querySelectorAll(".categori-img");void 0!==M&&(R[M]=`${V}/10`);for(let s in R)t.forEach((e=>{e.classList.contains(s)&&(e.textContent=R[s])})),i.forEach((e=>{e.classList.contains(s)&&e.classList.remove("grey")})),a.forEach((e=>{e.classList.contains(s)&&e.classList.add("result-link-active")}));s.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portraitP")?(J=L,K=!0,M="portraitP"):s.target.classList.contains("landscapeP")?(J=S,K=!0,M="landscapeP"):s.target.classList.contains("stillLifeP")?(J=q,K=!0,M="stillLifeP"):s.target.classList.contains("impressionismP")?(J=x,K=!0,M="impressionismP"):s.target.classList.contains("expressionismP")?(J=N,K=!0,M="expressionismP"):s.target.classList.contains("avantGardeP")?(J=E,K=!0,M="avantGardeP"):s.target.classList.contains("renaissanceP")?(J=_,K=!0,M="renaissanceP"):s.target.classList.contains("surrealismP")?(J=A,K=!0,M="surrealismP"):s.target.classList.contains("kitschP")?(J=G,K=!0,M="kitschP"):s.target.classList.contains("minimalismP")?(J=I,K=!0,M="minimalismP"):s.target.classList.contains("interiorP")?(J=C,K=!0,M="interiorP"):s.target.classList.contains("nudeP")&&(J=$,K=!0,M="nudeP"),V=0,Z=0})))),a.forEach((s=>s.addEventListener("click",(s=>{s.target.classList.contains("portraitP")?(Q=L,U=T.portraitP):s.target.classList.contains("landscapeP")?(Q=S,U=T.landscapeP):s.target.classList.contains("stillLifeP")?(Q=q,U=T.stillLifeP):s.target.classList.contains("impressionismP")?(Q=x,U=T.impressionism):s.target.classList.contains("expressionismP")?(Q=N,U=T.expressionismP):s.target.classList.contains("avantGardeP")?(Q=E,U=T.avantGardeP):s.target.classList.contains("renaissanceP")?(Q=_,U=T.renaissanceP):s.target.classList.contains("surrealismP")?(Q=A,U=T.surrealismP):s.target.classList.contains("kitschP")?(Q=G,U=T.kitschP):s.target.classList.contains("minimalismP")?(Q=I,U=T.minimalismP):s.target.classList.contains("interiorP")?(Q=C,U=T.interiorP):s.target.classList.contains("nudeP")&&(Q=$,U=T.nudeP)})))),e.addEventListener("click",(function(){K=!1}))}else if(ss===i){const s=document.querySelector(".slider"),e=document.querySelector(".mute"),a=document.querySelector(".toggle-button"),t=document.querySelector(".plus"),i=document.querySelector(".time-input"),r=document.querySelector(".minus"),n=document.querySelectorAll(".settings-nav-buttons");function l(){j?(j=!1,e.classList.toggle("mute-off")):(j=!0,e.classList.toggle("mute-off"))}i.value=H,a.checked=F,j?e.classList.remove("mute-off"):e.classList.add("mute-off"),e.addEventListener("click",l),s.value=O,s.addEventListener("input",(s=>{O=s.target.value})),s.addEventListener("mouseup",W),a.addEventListener("click",(function(){F=a.checked})),t.addEventListener("click",(function(){i.value>=30?i.value=30:i.value=+i.value+5,H=i.value})),r.addEventListener("click",(function(){i.value<=5?i.value=5:i.value=+i.value-5,H=i.value})),n.forEach((s=>s.addEventListener("click",(function(){history.back()}))))}else if(ss===t){const s=document.querySelector(".pictures"),e=document.querySelector(".artist");s.addEventListener("click",(function(){K=!0})),e.addEventListener("click",(function(){K=!1}))}else if(ss===o){const s=document.querySelectorAll(".result-painting"),e=document.querySelectorAll(".result-mask"),a=document.querySelectorAll(".author-name"),t=document.querySelectorAll(".painting-year"),i=document.querySelectorAll(".painting-name");document.querySelector(".result-nav").addEventListener("click",(function(){history.back()}));for(let r=0;r<Q.length;r++)s[r].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${Q[r].imageNum}.webp')`,a[r].textContent=Q[r].author,t[r].textContent=Q[r].year,i[r].textContent=Q[r].name,s[r].addEventListener("click",(function(){e[r].classList.toggle("result-mask-active")}));for(let e=0;e<U.length;e++)1===U[e]&&s[e].classList.remove("grey")}};window.addEventListener("beforeunload",(function(){localStorage.setItem("currentArr",JSON.stringify(J)),localStorage.setItem("volumeValue",O),localStorage.setItem("muted",j),localStorage.setItem("time",H),localStorage.setItem("timerOption",F),localStorage.setItem("pictureQuiz",K)})),window.addEventListener("load",(function(){J=JSON.parse(localStorage.getItem("currentArr")),O=localStorage.getItem("volumeValue"),O&&"undefined"!==O||(O=50),H=localStorage.getItem("time"),H&&"undefined"!==H||(H=20),j=JSON.parse(localStorage.getItem("muted")),F=JSON.parse(localStorage.getItem("timerOption")),K=JSON.parse(localStorage.getItem("pictureQuiz"))})),window.addEventListener("hashchange",Y),window.addEventListener("load",Y)})()})();