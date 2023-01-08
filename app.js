const title = document.querySelector(".hello h1")

const handleTitleClick = () => {

    title.style.color = "blue"

}

title.onclick = handleTitleClick;