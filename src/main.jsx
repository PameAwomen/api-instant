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

const token = 'IGQWRNbDEzWkVKYjdEcEtJcjhhNjg4Q1JmOFpHUGNiN2F1RlFNN0drdlFBS0F3bEpSR2xIM3M5eGNzSzJUVHBYWTA4empBaDB4YmcwNDVZAdGlQdUpJUzRKakdqVncxYmItZATA4VEFmOXl1THUwUmtIaEJDckptcVUZD' 

const url = 'https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(pam.alba08){followers_count,media_count}&access_token={access-token}'

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
