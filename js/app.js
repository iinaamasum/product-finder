const getProduct = (id) => {
  let url = '';
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

const updateCard = (data) => {
  console.log(data);
  document.getElementById('api__card__row').textContent = '';
  data.forEach((info) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
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
};
getProduct('electronics');
