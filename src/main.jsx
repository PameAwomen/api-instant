import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQWRQNkxNQW1lU1RhdW9kVUZAnN1ZAfQlF2QV9PQ1dNNnpUb3VEeV9uSVZAPNDdqbDRad2FsT3RIWTk2Tzhwb2UzN3lSVktpZAkVuNmY5M2xLeHNZATkhzUmlnU082SzdJNGM3b3Q5dktacTBnN2xHdUJYbm5tRW1yRFEZD' 

const url = 'https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(pam.alba08){followers_count,media_count}&access_token={IGQWRQNkxNQW1lU1RhdW9kVUZAnN1ZAfQlF2QV9PQ1dNNnpUb3VEeV9uSVZAPNDdqbDRad2FsT3RIWTk2Tzhwb2UzN3lSVktpZAkVuNmY5M2xLeHNZATkhzUmlnU082SzdJNGM3b3Q5dktacTBnN2xHdUJYbm5tRW1yRFEZD}';

fetch(url)
.then(rest => rest.json())
.then(data => CrearHtml(data.data))

function CrearHtml(data){
    for(const img of data)
        galery.innerHTML +=  `
          <div class="image overflow">
          <img loading="lazy" src="${img.media_url}" alt="">
          <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
              <p>
                ${img.caption.slice(0,100)}
              </p>
            </a>
        </div>
        </div>
    
    `;
} 
