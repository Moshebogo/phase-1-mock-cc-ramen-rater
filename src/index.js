// write your code here
fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => renderRamen(data))


function renderRamen(data) {
    for (const item of data) {
        const div = document.querySelector('#ramen-menu')
        const img = document.createElement('img')
        div.appendChild(img)
        img.src = item.image

        img.addEventListener('click', e => {
            
          const mainImg = document.querySelector('#main-img')
          mainImg.src = img.src

          const name = document.querySelector('#name')
          name.innerHTML = item.name

          const resName = document.querySelector('#resName')
          resName.innerHTML = item.restaurant

          const rating = document.querySelector('#rating-display')
          rating.innerHTML = item.rating

          const comment = document.querySelector('#comment-display')
          comment.innerHTML = item.comment
        })



    const form = document.querySelector('#new-ramen')
       form.addEventListener('submit', e => {
        
       const topNewImg = document.createElement('img')
       const userImg = document.querySelector('#new-image').value
       topNewImg.src = userImg
       div.appendChild(topNewImg)

      const userName = document.querySelector('#new-name').value
      const userRestaurant = document.querySelector("#new-restaurant").value
      const userRating = document.querySelector('#new-rating').value
      const userComment = document.querySelector('#new-comment').value


      topNewImg.addEventListener('click', e => {
        document.querySelector('#main-img').src = userImg
        document.querySelector('#name').innerHTML = userName
        document.querySelector('#resName').innerHTML = userRestaurant
        document.querySelector('#rating-display').innerHTML = userRating
        document.querySelector('#comment-display').innerHTML = userComment

        


      })


       e.preventDefault()
       form.reset()
      })
    }
    }


    




   
    
    