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

const token = 'IGQWRNVlAxZATYwUmtBRGlJcWFxZAEhQejY5SHQwQ2xPTnR2OFQzWjRSUnZAmbHhLSFBvdmhvOVplczV0UUJOZA0pJXzVRdUt0UG1Halozckw1bE91UWNmeHo0TXNHWU4xbTBpTzZAZAZAHR2YUNzOTd3Mm1ZAaVh2akQxM3cZD' 

const url = 'https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(pam.alba08){followers_count,media_count}&access_token={IGQWRNVlAxZATYwUmtBRGlJcWFxZAEhQejY5SHQwQ2xPTnR2OFQzWjRSUnZAmbHhLSFBvdmhvOVplczV0UUJOZA0pJXzVRdUt0UG1Halozckw1bE91UWNmeHo0TXNHWU4xbTBpTzZAZAZAHR2YUNzOTd3Mm1ZAaVh2akQxM3cZD}'

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
