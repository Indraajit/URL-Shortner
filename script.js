const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');


shortBtn.addEventListener('click', shorturl)


function shorturl() {
    var originalURL = document.getElementById("URL").value;
    var tinyAPI = "http://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalURL);
    shortendURL = document.getElementById("shortendURL");

    fetch(tinyAPI).then(response => response.text()).then(data => {
        shortendURL.value = data
    }).catch(error => {
        shortendURL.value = "Error : Unable to Short URL"
    })
}

reloadBtn.addEventListener('click', () => {
    location.reload();
})