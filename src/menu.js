import firstProductImage from './assets/first-product.png';
import secondProductImage from './assets/second-product.png';
import thirdProductImage from './assets/third-product.png';
import fourthProductImage from './assets/fourth-product.png';

function createMenuPage() {
  // Create a container to append all the products for the menu
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-div';

  menuContainer.append(
    createProduct(
      'Samurai Bacon',
      firstProductImage,
      'Testing Description Lorem Ipsum',
      '5.70$'
    )
  );

  menuContainer.append(
    createProduct(
      'Fuji sensation',
      secondProductImage,
      'Testing Description Lorem Ipsum',
      '7.50$'
    )
  );

  menuContainer.append(
    createProduct(
      'Ninja way',
      thirdProductImage,
      'Testing Description Lorem Ipsum',
      '6.90$'
    )
  );

  menuContainer.append(
    createProduct(
      'Shrimp eruption',
      fourthProductImage,
      'Testing Description Lorem Ipsum',
      '9.60$'
    )
  );

  return menuContainer;
}

function createProduct(productTitle, productImagePath, description, price) {
  const productCard = document.createElement('div');
  productCard.id = 'product-card';

  const productImage = document.createElement('img');
  productImage.id = 'product-img';
  productImage.src = productImagePath;
  productImage.alt = productTitle;

  const productName = document.createElement('h2');
  productName.id = 'product-title';
  productName.textContent = productTitle;

  const productDescription = document.createElement('p');
  productDescription.id = 'product-description';
  productDescription.textContent = description;

  const productPrice = document.createElement('p');
  productPrice.id = 'product-price';
  productPrice.textContent = price;

  productCard.append(productImage);
  productCard.append(productName);
  productCard.append(productDescription);
  productCard.append(productPrice);

  return productCard;
}

export function loadMenuPage() {
  const main = document.querySelector('#main');

  main.append(createMenuPage());
}