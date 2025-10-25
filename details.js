document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = parseInt(params.get("id"));

    const booksData = JSON.parse(localStorage.getItem('booksData'));
    
    if (!booksData || !bookId) {
        window.location.href = '404.html';
        return;
    }

    const book = booksData.find(b => b.id === bookId);
    
    if (!book) {
        window.location.href = '404.html';
        return;
    }

    document.querySelector(".book-title").textContent = book.title;
    document.querySelector(".book-author").textContent = book.author;
    document.querySelector(".book-cover").style.backgroundImage = `url(public/assets/capas/${book.image})`;
    document.querySelector(".book-description").textContent = book.description;

    const ageBadge = document.querySelector(".age-rating-two .age-badge-two");
    ageBadge.textContent = book.age;
    ageBadge.classList.add(`age-${book.age}`);

    document.title = `${book.title} - Bookeeper`;
});