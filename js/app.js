const getProduct = (id) => {
  document.getElementById('spinner').style.display = 'block';
  let url = `https://fakestoreapi.com/products`;
  if (id == 'jewe') {
    url = `https://fakestoreapi.com/products/category/jewelery`;
  } else if (id == 'elec') {
    url = `https://fakestoreapi.com/products/category/electronics`;
  } else if (id == 'women') {
    url = `https://fakestoreapi.com/products/category/women's%20clothing`;
  } else if (id == 'all') {
    url = `https://fakestoreapi.com/products`;
  } else if (id == 'man') {
    url = `https://fakestoreapi.com/products/category/men's%20clothing`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => updateCard(data));
};
getProduct(true);
const updateCard = (data) => {
  document.getElementById('spinner').style.display = 'none';
  console.log(data);
  document.getElementById('api__card__row').textContent = '';
  data.forEach((info) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 shadow">
    <img height='350' src="${info.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title text-primary">${info.title}</h5>
            <p class="card-text">${info.description.slice(0, 200)}...</p>
          </div>
          <div class="card-footer bg-white">
            <div class="row row-cols-2 g-4 mb-2">
              <div class="col">
                <button class="col-12 btn btn-outline-dark">Price: ${
                  info.price
                }</button>
              </div>
              <div class="col">
                <button class="col-12 btn btn-outline-success">Buy Now</button>
                </div>
                </div>
            <div class="d-flex justify-content-between">
              <small class="text-muted">Id: ${info.id}</small>
              <small class="text-muted">Price: ${info.price}</small>
              <small class="text-muted">Category: ${info.category}</small>
              </div>
              </div>
              </div>
              `;
    document.getElementById('api__card__row').appendChild(div);
  });
  document.getElementById('carousel__inner0').textContent = '';
  document.getElementById('carousel__inner1').textContent = '';
  document.getElementById('carousel__inner2').textContent = '';
  for (let i = 0; i < 3; i++) {
    carouselShow(data[i], i);
  }
};

/* carosel */

const carouselShow = (info, id) => {
  const div2 = document.createElement('div');
  // div2.classList.add('carousel-item');
  div2.innerHTML = `
    <img height="732" src="${info.image}" class="d-block w-100" alt="...">
    <div class="carousel-caption">
      <h5>${info.title}</h5>
      <p>${info.description.slice(0, 40)}</p>
    </div>
    `;
  console.log(div2);
  document.getElementById('carousel__inner' + id).appendChild(div2);
};
