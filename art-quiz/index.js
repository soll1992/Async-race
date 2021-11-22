"use strict";alert("Добрый день! Работу доделать не успел из-за неожиданных жизненных обстоятельств. Прошу проверить в четверг вечером, если это возможно или написать мне в discord(Антон92#7138) на какое время вы можете отложить проверку. Если можете проверить только сейчас, то жмите 'OK' и проверьте то что есть на данный момент. Заранее спасибо!");import"./styles/style.scss";import{Home}from"./pages/Home/index.js";import{Categories}from"./pages/Categories/index.js";import{Settings}from"./pages/Settings/index.js";import{Questions}from"./pages/Questions/index.js";import{Error404}from"./pages/Error404/index.js";import{Utils}from"./utils/Utils.js";const homeInstance=new Home,settingsSettings=new Settings,categoriesInstance=new Categories,questionsInstance=new Questions,error404Instance=new Error404,portrait=[],landscape=[],stillLife=[],impressionism=[],expressionism=[],avantGarde=[],renaissance=[],surrealism=[],kitsch=[],minimalism=[],interior=[],nude=[],portraitA=[],landscapeA=[],stillLifeA=[],impressionismA=[],expressionismA=[],avantGardeA=[],renaissanceA=[],surrealismA=[],kitschA=[],minimalismA=[],interiorA=[],nudeA=[];let currentArr,trueAns,volumeValue=50,muted=!1,time=20,n=0,numberOfTrueAnswers=0,timerOption=!0;function playTrueSound(){const e=new Audio;e.src="./assets/sound/true.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function playFallseSound(){const e=new Audio;e.src="./assets/sound/false.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function playResultSound(){const e=new Audio;e.src="./assets/sound/result.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function startTimer(e){const t=document.querySelector(".fixed-overlay-falls"),r=document.querySelector(".time-line"),s=document.querySelectorAll(".answer-option");let n=e,i=setInterval((function(){r.textContent=n,n--,n<0&&(t.classList.add("fixed-overlay-active"),playFallseSound(),clearInterval(i))}),1e3);s.forEach((e=>e.addEventListener("click",(function(){clearInterval(i)}))))}async function pushInArr(){const e=await fetch("data.json");(await e.json()).map((e=>{e.imageNum<10?portrait.push(e):e.imageNum>=10&&e.imageNum<20?landscape.push(e):e.imageNum>=20&&e.imageNum<30?stillLife.push(e):e.imageNum>=30&&e.imageNum<40?impressionism.push(e):e.imageNum>=40&&e.imageNum<50?expressionism.push(e):e.imageNum>=50&&e.imageNum<60?avantGarde.push(e):e.imageNum>=60&&e.imageNum<70?renaissance.push(e):e.imageNum>=70&&e.imageNum<80?surrealism.push(e):e.imageNum>=80&&e.imageNum<90?kitsch.push(e):e.imageNum>=90&&e.imageNum<100?minimalism.push(e):e.imageNum>=100&&e.imageNum<110?interior.push(e):e.imageNum>=110&&e.imageNum<120?nude.push(e):e.imageNum>=120&&e.imageNum<130?portraitA.push(e):e.imageNum>=130&&e.imageNum<140?landscapeA.push(e):e.imageNum>=140&&e.imageNum<150?stillLifeA.push(e):e.imageNum>=150&&e.imageNum<160?impressionismA.push(e):e.imageNum>=160&&e.imageNum<170?expressionismA.push(e):e.imageNum>=170&&e.imageNum<180?avantGardeA.push(e):e.imageNum>=180&&e.imageNum<190?renaissanceA.push(e):e.imageNum>=190&&e.imageNum<200?surrealismA.push(e):e.imageNum>=200&&e.imageNum<210?kitschA.push(e):e.imageNum>=210&&e.imageNum<220?minimalismA.push(e):e.imageNum>=220&&e.imageNum<230?interiorA.push(e):nudeA.push(e)}))}const routes={"/":homeInstance,"/settings":settingsSettings,"/categories":categoriesInstance,"/questions":questionsInstance},router=async()=>{const e=document.getElementById("page_container"),t=Utils.parseRequestURL(),r=(t.resource?`/${t.resource}`:"/")+(t.id?"/:id":"")+(t.verb?`/${t.verb}`:""),s=routes[r]?routes[r]:error404Instance;if(e.innerHTML=await s.render(),await s.after_render(),await pushInArr(),s===questionsInstance){const e=document.querySelectorAll(".answer-option"),t=document.querySelectorAll(".continue"),r=document.querySelector(".answer");await s.wrap(currentArr,n),timerOption&&startTimer(time),r.classList.add("answer-active"),e.forEach((e=>e.addEventListener("click",(e=>{const t=document.querySelector(".fixed-overlay-true"),s=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),a=document.querySelectorAll(".true-author"),u=document.querySelectorAll(".true-year"),o=document.querySelectorAll(".true-name");trueAns=currentArr[n].author,console.log(trueAns),r.classList.remove("answer-active"),e.target.textContent==trueAns?(t.classList.add("fixed-overlay-active"),playTrueSound(),numberOfTrueAnswers++,console.log(numberOfTrueAnswers)):e.target.textContent!=trueAns&&(s.classList.add("fixed-overlay-active"),playFallseSound()),a.forEach((e=>{e.textContent=currentArr[n].author})),u.forEach((e=>{e.textContent=currentArr[n].year})),o.forEach((e=>{e.textContent=currentArr[n].name})),i.forEach((e=>e.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`))})))),t.forEach((e=>e.addEventListener("click",(function(){const e=document.querySelector(".fixed-overlay-true"),t=document.querySelector(".fixed-overlay-falls"),i=document.querySelector(".fixed-overlay-result"),a=document.querySelector(".test");9!=n?(n++,e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),r.classList.add("answer-active"),s.wrap(currentArr,n),timerOption&&startTimer(time)):(e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),i.classList.add("fixed-overlay-active"),n=0,playResultSound(),a.textContent=`Result: ${numberOfTrueAnswers}/10`,numberOfTrueAnswers=0)}))))}else if(s===categoriesInstance)document.querySelectorAll(".categori-card").forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("portrait")?currentArr=portrait:e.target.classList.contains("landscape")?currentArr=landscape:e.target.classList.contains("stillLife")?currentArr=stillLife:e.target.classList.contains("impressionism")?currentArr=impressionism:e.target.classList.contains("expressionism")?currentArr=expressionism:e.target.classList.contains("avantGarde")?currentArr=avantGarde:e.target.classList.contains("renaissance")?currentArr=renaissance:e.target.classList.contains("surrealism")?currentArr=surrealism:e.target.classList.contains("kitsch")?currentArr=kitsch:e.target.classList.contains("minimalism")?currentArr=minimalism:e.target.classList.contains("interior")?currentArr=interior:e.target.classList.contains("nude")&&(currentArr=nude)}))));else if(s===settingsSettings){const e=document.querySelector(".slider"),t=document.querySelector(".mute"),r=document.querySelector(".toggle-button"),s=document.querySelector(".plus"),n=document.querySelector(".time-input"),i=document.querySelector(".minus");function a(){muted?(muted=!1,t.classList.toggle("mute-off")):(muted=!0,t.classList.toggle("mute-off")),console.log(muted)}n.value=time,r.checked=timerOption,muted?t.classList.remove("mute-off"):t.classList.add("mute-off"),t.addEventListener("click",a),e.value=volumeValue,e.addEventListener("input",(e=>{volumeValue=e.target.value})),e.addEventListener("mouseup",playTrueSound),r.addEventListener("click",(function(){timerOption=r.checked})),s.addEventListener("click",(function(){30==n.value?n.value=30:n.value=+n.value+5,time=n.value})),i.addEventListener("click",(function(){5==n.value?n.value=5:n.value=+n.value-5,time=n.value}))}};window.addEventListener("hashchange",router),window.addEventListener("load",router);