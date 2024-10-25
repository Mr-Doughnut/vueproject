document.getElementById('fetchDataButton').addEventListener('click', fetchData);

function fetchData() {
    const imageUrl = `https://picsum.photos/400/300?random=${Math.random()}`;

    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';


    const img = document.createElement('img');
    img.src = imageUrl;

    dataContainer.appendChild(img);
        dataContainer.classList.add('show');
        dataContainer.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
