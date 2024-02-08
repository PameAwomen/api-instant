import { render } from 'react-dom';
import App from './App.jsx';

render(<App />, document.getElementById('root'));




export default function API() {
    return (

        <div>
          
<h1>API INSTAGRAM</h1>

<button>
    <a href='/'>Inicio</a>
</button>

<section id="feed-contenedor">
<div className="main-galery">
  <div className="chevron">
  
  <span id="prev" className="material-icons">
      &#xe5bc;
  </span>
  </div>

<div className="contenedor-galery">
  <div className="galery">

    <div>
        <div>
          <a>
            <p>Hola como estas?</p>
          </a>
        </div>
    </div>

  </div>
</div>


<div className="chevron">
  <span id="next" className="material-icons">
      &#xe5cc;
  </span>
  </div>
</div>
</section>

<script src="main.jsx"></script>


        </div>
  );
}
