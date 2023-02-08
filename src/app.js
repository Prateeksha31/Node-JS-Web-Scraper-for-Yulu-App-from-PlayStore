const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const item  =`<div id="item"><h3>` +article.name +`</h3><p>`+ article.review +`</p></div><br>`
            feedDisplay.insertAdjacentHTML("beforeend", item)

            
        });
    })
    .catch (err => console.log(err))