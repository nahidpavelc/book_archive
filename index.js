const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
}
searchBook();

const displaySearchResult = data => {

    const books = data.docs;
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ''; //Clear search result

    for (const book of books) {
        console.log(data);
    }

    // Total-Search-Item 


    // Search-Result 
    books.forEach (book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick ="loadMealDetail()" class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." width="200" height="400">
            <div class="card-body">
                <h5 class="card-title">Name: ${book.title}</h5>
                <p>Author Name: ${book.author_name}</p></p>
                <p>Publisher: ${book.publisher}</p></p>
                <p>publish year: ${book.publish_year[0]}</p></p>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}