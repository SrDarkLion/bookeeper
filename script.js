document.addEventListener("DOMContentLoaded", () => {
    const library = document.querySelector(".library");

    const books = [
        { age: "L", image: "livro1.jpg" },
        { age: "10", image: "livro2.jpg" },
        { age: "14", image: "livro3.jpg" },
        { age: "L", image: "livro4.jpg" },
        { age: "14", image: "livro5.jpg" },
        { age: "10", image: "livro6.jpg" },
        { age: "14", image: "livro7.jpg" },
        { age: "12", image: "livro8.jpg" },
        { age: "14", image: "livro9.jpg" },
        { age: "18", image: "livro10.jpg" },
        { age: "14", image: "livro11.jpg" },
        { age: "14", image: "livro12.jpg" },
        { age: "12", image: "livro13.jpg" },
        { age: "16", image: "livro14.jpg" },
        { age: "14", image: "livro15.jpg" },
        { age: "14", image: "livro16.jpg" },
        { age: "18", image: "livro17.jpg" },
        { age: "14", image: "livro18.jpg" },
        { age: "L", image: "livro19.jpg" },
        { age: "14", image: "livro20.jpg" },
        { age: "18", image: "livro21.jpg" },
        { age: "L", image: "livro22.jpg" },
        { age: "14", image: "livro23.jpg" },
        { age: "12", image: "livro24.jpg" },
        { age: "18", image: "livro25.jpg" },
        { age: "L", image: "livro26.jpg" },
        { age: "12", image: "livro27.jpg" },
        { age: "14", image: "livro28.jpg" },
        { age: "L", image: "livro29.jpg" },
        { age: "18", image: "livro30.jpg" },
        { age: "14", image: "livro31.jpg" },
        { age: "L", image: "livro32.jpg" },
        { age: "L", image: "livro33.jpg" },
        { age: "18", image: "livro34.jpg" },
        { age: "16", image: "livro35.jpg" },
        { age: "14", image: "livro36.jpg" },
        { age: "14", image: "livro37.jpg" },
        { age: "12", image: "livro38.jpg" },
        { age: "14", image: "livro39.jpg" },
        { age: "12", image: "livro40.jpg" },
    ];

    const ageColors = {
        "L": "age-livre",
        "10": "age-10",
        "12": "age-12",
        "14": "age-14",
        "16": "age-16",
        "18": "age-18"
    };

    const booksPerPage = 16;
    let currentPage = 1;
    const totalPages = Math.ceil(books.length / booksPerPage);

    function renderBooks(page) {
        library.innerHTML = "";
        const start = (page - 1) * booksPerPage;
        const end = start + booksPerPage;
        const booksToRender = books.slice(start, end);

        booksToRender.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.style.backgroundImage = `url(assets/capas/${book.image})`;

            bookElement.innerHTML = `
                <div class="overlay"></div>
                <div class="age-rating ${ageColors[book.age]}">${book.age}</div>
            `;

            library.appendChild(bookElement);
        });

        renderPagination();
    }

    function renderPagination() {
        const pagination = document.querySelector(".pagination");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.add("page-button");
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
            pageButton.addEventListener("click", () => {
                currentPage = i;
                renderBooks(currentPage);
            });
            pagination.appendChild(pageButton);
        }
    }

    renderBooks(currentPage);
});
