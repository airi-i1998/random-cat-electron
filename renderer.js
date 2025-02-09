document.getElementById('fetchButton').addEventListener('click', async() => {
  const imageUrl = await window.api.fetchCat()
  console.log('get image url:', imageUrl)

  const catImage = document.getElementById('catImage')
  catImage.src = imageUrl
  catImage.style.display = "block"
})