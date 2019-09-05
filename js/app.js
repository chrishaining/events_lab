document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const readingList = document.querySelector('#reading-list');

  const formSubmission = function(event) {
    event.preventDefault();
    console.log(event.target);
    newReadingListItem = document.createElement('li');
    newReadingListItem.classList.add('list-item');
    readingList.appendChild(newReadingListItem);

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    newItemTitle = document.createElement('p');
    newItemTitle.classList.add('list-item-property-title');
    newItemAuthor = document.createElement('p');
    newItemAuthor.classList.add('list-item-property-author');
    newItemCategory = document.createElement('p');

    newReadingListItem.appendChild(newItemTitle);
    newReadingListItem.appendChild(newItemAuthor);
    newReadingListItem.appendChild(newItemCategory);

    newItemTitle.textContent = title;
    newItemAuthor.textContent = author;
    newItemCategory.textContent = category;
    newItemForm.reset();
  };

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', formSubmission);

  const destoryEverything = function(event) {
    readingList.innerHTML = '';
  };

  const deleteAll = document.querySelector('body > input[type=button]');
  deleteAll.addEventListener('click', destoryEverything);
});
