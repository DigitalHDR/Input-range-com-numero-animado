const valorDentroDoInput = document.querySelector('input')

const divValorinterno = document.querySelector('.value')

divValorinterno.innerHTML = valorDentroDoInput.value

function alteraNumero() {
  divValorinterno.innerHTML = valorDentroDoInput.value
}

valorDentroDoInput.oninput = alteraNumero
