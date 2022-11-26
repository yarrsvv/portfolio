const insert = document.getElementById('insert')
const body = document.querySelector('body');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
	  <div class="key">
		  ${event.key === ' ' ? 'Space' : event.key} 
		  <small>event.key</small>
		</div>

		<div class="key">
		  ${event.keyCode}
		  <small>event.keyCode</small>
		</div>

		<div class="key">
		  ${event.code}
		  <small>event.code</small>
		</div>
  `;
  if(event.key == 'r') {
    body.style.background = "#f00";
  }
  else if(event.key == 'g') {
    body.style.background = "#0f0";
  }
  else if(event.key == 'b') {
    body.style.background = "#00f";
  }
  else {
    body.style.background = '#f8f8f8';
  }
});