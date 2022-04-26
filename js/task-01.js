const categoriesEl = document.querySelector('#categories');
console.log('Numbers of categories: ', categoriesEl.children.length);

const categoriesItemEl = document.querySelectorAll('.item');
categoriesItemEl.forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
