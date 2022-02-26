const getProduct = (id) => {
  document.getElementById(id).addEventListener('click', () => {
    // const input = document.getElementById('input__feild');
    fetch(`http://fakestoreapi.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
};

getProduct('electronics');
