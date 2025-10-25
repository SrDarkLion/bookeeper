document.addEventListener("DOMContentLoaded", () => {
    const library = document.querySelector(".library");
    const searchInput = document.getElementById("searchInput");
    const ageFilters = document.querySelectorAll(".age-filter");
    const resultsCount = document.getElementById("resultsCount");
    const noResults = document.querySelector(".no-results");

    const books = [
        { id: 1, title: "Pai Rico, Pai Pobre", author: "Robert Kiyosaki", description: "Um dos livros mais influentes sobre educação financeira, ensinando a importância do mindset certo para alcançar a independência financeira e construir riqueza.", age: "14", image: "livro1.jpg" },
        { id: 2, title: "Café Com Deus Pai", author: "Junior Rostirola", description: "Uma coletânea de reflexões e mensagens inspiradoras para fortalecer a fé e guiar o leitor em sua jornada espiritual.", age: "L", image: "livro2.jpg" },
        { id: 3, title: "O Homem Mais Rico da Babilônia", author: "George S. Clason", description: "Através de parábolas ambientadas na antiga Babilônia, este livro ensina princípios financeiros valiosos que ainda são relevantes nos dias de hoje.", age: "12", image: "livro3.jpg" },
        { id: 4, title: "JavaScript: O Guia Definitivo", author: "David Flanagan", description: "A bíblia do JavaScript para programadores de todos os níveis, abordando desde conceitos básicos até técnicas avançadas para desenvolvimento web.", age: "14", image: "livro4.jpg" },
        { id: 5, title: "A Sutil Arte De Ligar O F*dase", author: "Mark Manson", description: "Uma abordagem honesta e sem rodeios sobre como aceitar os desafios da vida e focar no que realmente importa para ser mais feliz e realizado.", age: "18", image: "livro5.jpg" },
        { id: 6, title: "Diário De Um Banana", author: "Jeff Kinney", description: "As aventuras e desventuras de Greg Heffley, um garoto que tenta sobreviver à escola e às trapalhadas do dia a dia com muito humor.", age: "10", image: "livro6.jpg" },
        { id: 7, title: "Assistente do Vilão", author: "C. M. Costa", description: "Um jovem é recrutado para trabalhar para um vilão carismático, embarcando em uma jornada cheia de surpresas, perigos e momentos hilários.", age: "14", image: "livro7.jpg" },
        { id: 8, title: "Como Fazer Amigos e Influenciar Pessoas", author: "Dale Carnegie", description: "O clássico atemporal sobre comunicação, carisma e relacionamentos interpessoais, ensinando como criar conexões genuínas e influenciar positivamente as pessoas ao seu redor.", age: "12", image: "livro8.jpg" },
        { id: 9, title: "Em Nome do Povo", author: "Kenan Malik", description: "Uma análise provocativa sobre política, populismo e identidade social no mundo moderno, explorando o impacto das ideologias no comportamento das sociedades.", age: "16", image: "livro9.jpg" },
        { id: 10, title: "48 Leis do Poder", author: "Robert Greene", description: "Um estudo detalhado sobre o poder e suas estratégias, baseado na história e filosofia, para quem deseja entender as dinâmicas da influência e liderança.", age: "18", image: "livro10.jpg" },
        { id: 11, title: "O Programador Pragmático", author: "Andrew Hunt & David Thomas", description: "Um guia essencial para desenvolvedores que desejam aprimorar suas habilidades, escrever código mais eficiente e se destacar no mundo da programação.", age: "16", image: "livro11.jpg" },
        { id: 12, title: "Entendendo Algoritmos", author: "Aditya Y. Bhargava", description: "Uma abordagem visual e intuitiva para explicar os principais algoritmos, tornando o aprendizado de programação mais acessível e prático.", age: "14", image: "livro12.jpg" },
        { id: 13, title: "Os Segredos da Mente Milionária", author: "T. Harv Eker", description: "Descubra como sua mentalidade pode influenciar suas finanças e aprenda a reprogramar sua forma de pensar para alcançar a prosperidade.", age: "16", image: "livro13.jpg" },
        { id: 14, title: "A Empregada Está de Olho", author: "Freida McFadden", description: "Um thriller psicológico eletrizante que acompanha uma empregada com um passado sombrio e segredos perturbadores escondidos na casa onde trabalha.", age: "18", image: "livro14.jpg" },
        { id: 15, title: "É Assim Que Começa", author: "Colleen Hoover", description: "O aguardado desdobramento de 'É Assim Que Acaba', explorando temas como amor, redenção e as escolhas que moldam nossos destinos.", age: "16", image: "livro15.jpg" },
        { id: 16, title: "É Assim Que Acaba", author: "Colleen Hoover", description: "Uma história emocionante sobre relacionamentos, resiliência e a força necessária para quebrar ciclos tóxicos e recomeçar.", age: "16", image: "livro16.jpg" },
        { id: 17, title: "A Contadora", author: "Jane Harper", description: "Suspense intrigante sobre mistérios financeiros e assassinatos.", age: "18", image: "livro17.jpg" },
        { id: 18, title: "Manual de Persuasão do FBI", author: "Jack Schafer", description: "Técnicas usadas pelo FBI para influenciar e persuadir pessoas.", age: "16", image: "livro18.jpg" },
        { id: 19, title: "O Livro Que Você Gostaria Que Seus Pais Tivessem Lido", author: "Philippa Perry", description: "Reflexões sobre relações familiares e educação dos filhos.", age: "12", image: "livro19.jpg" },
        { id: 20, title: "Como Convencer Alguém Em 90 Segundos", author: "Nicholas Boothman", description: "Técnicas de comunicação eficazes para causar uma boa impressão rapidamente.", age: "14", image: "livro20.jpg" },
        { id: 21, title: "Três", author: "Dror Mishani", description: "Suspense psicológico envolvente sobre três mulheres e um segredo mortal.", age: "18", image: "livro21.jpg" },
        { id: 22, title: "Um Tempo Pra Mim", author: "Flavia Melissa", description: "Dicas para autocuidado e equilíbrio emocional.", age: "L", image: "livro22.jpg" },
        { id: 23, title: "Desperta", author: "Erin Morgenstern", description: "Um romance mágico ambientado em um circo misterioso.", age: "14", image: "livro23.jpg" },
        { id: 24, title: "The Egg", author: "Andy Weir", description: "Uma reflexão filosófica sobre a vida e a reencarnação.", age: "12", image: "livro24.jpg" },
        { id: 25, title: "Véspera", author: "Carla Madeira", description: "Um drama envolvente sobre amor, perda e família.", age: "16", image: "livro25.jpg" },
        { id: 26, title: "Ei, Ei, Ei, Vanderlei", author: "Pedro Rhuas", description: "Um romance juvenil cheio de humor e referências à cultura pop.", age: "12", image: "livro26.jpg" },
        { id: 27, title: "Agente Mira No Amor E Acerta Na Solidão", author: "Elayne Baeta", description: "Uma comédia romântica LGBTQ+ sobre amizade e amor próprio.", age: "16", image: "livro27.jpg" },
        { id: 28, title: "Não É Como Nos Filmes", author: "Holly Bourne", description: "Uma jovem descobre que o amor na vida real não é como nos filmes.", age: "14", image: "livro28.jpg" },
        { id: 29, title: "Nada Pode Me Ferir", author: "David Goggins", description: "A impressionante jornada de superação de um dos homens mais resilientes do mundo, que enfrentou desafios extremos para se tornar um atleta de elite.", age: "16", image: "livro29.jpg" },
        { id: 30, title: "Não Começou Com Você", author: "Mark Wolynn", description: "Um estudo sobre traumas familiares e sua influência na vida.", age: "18", image: "livro30.jpg" },
        { id: 31, title: "O Ego é Seu Inimigo", author: "Ryan Holiday", description: "Um guia inspirador sobre como superar o ego para alcançar o verdadeiro sucesso e desenvolver humildade e disciplina.", age: "16", image: "livro31.jpg" },
        { id: 32, title: "As Aventuras De Mike", author: "Gabriel Dearo e Manu Digilio", description: "Uma história divertida cheia de confusões e humor, inspirada no canal de YouTube 'Falaidearo'.", age: "L", image: "livro32.jpg" }
    ];

    const ageColors = {
        "L": "age-livre",
        "10": "age-10",
        "12": "age-12",
        "14": "age-14",
        "16": "age-16",
        "18": "age-18"
    };

    const booksPerPage = 12;
    let currentPage = 1;
    let filteredBooks = [...books];
    let currentAgeFilter = "all";
    let currentSearchTerm = "";
    
    localStorage.setItem('booksData', JSON.stringify(books));

    function filterBooks() {
        filteredBooks = books.filter(book => {
            const matchesAge = currentAgeFilter === "all" || book.age === currentAgeFilter;
            const matchesSearch = currentSearchTerm === "" ||
                book.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(currentSearchTerm.toLowerCase());

            return matchesAge && matchesSearch;
        });

        currentPage = 1;
        updateResultsCount();
        renderBooks();
    }

    function updateResultsCount() {
        const count = filteredBooks.length;
        const total = books.length;

        if (currentAgeFilter === "all" && currentSearchTerm === "") {
            resultsCount.textContent = `${total} livros disponíveis`;
        } else {
            resultsCount.textContent = `${count} ${count === 1 ? 'livro encontrado' : 'livros encontrados'}`;
        }

        if (count === 0) {
            library.style.display = "none";
            noResults.style.display = "flex";
            document.querySelector(".pagination").style.display = "none";
        } else {
            library.style.display = "grid";
            noResults.style.display = "none";
            document.querySelector(".pagination").style.display = "flex";
        }
    }

    function renderBooks() {
        library.innerHTML = "";
        const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
        const start = (currentPage - 1) * booksPerPage;
        const end = start + booksPerPage;
        const booksToRender = filteredBooks.slice(start, end);

        booksToRender.forEach((book, index) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.style.backgroundImage = `url(public/assets/capas/${book.image})`;
            bookElement.style.animationDelay = `${index * 0.05}s`;

            bookElement.innerHTML = `
                <div class="overlay"></div>
                <div class="age-rating ${ageColors[book.age]}">${book.age}</div>
            `;

            bookElement.addEventListener("click", () => {
                window.location.href = `details.html?id=${book.id}`;
            });

            library.appendChild(bookElement);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        const pagination = document.querySelector(".pagination");
        pagination.innerHTML = "";

        if (totalPages <= 1) return;

        if (currentPage > 1) {
            const prevButton = document.createElement("button");
            prevButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
            prevButton.classList.add("page-button", "nav-button");
            prevButton.addEventListener("click", () => {
                currentPage--;
                renderBooks();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(prevButton);
        }

        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        if (startPage > 1) {
            const firstButton = createPageButton(1);
            pagination.appendChild(firstButton);

            if (startPage > 2) {
                const dots = document.createElement("span");
                dots.textContent = "...";
                dots.classList.add("pagination-dots");
                pagination.appendChild(dots);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = createPageButton(i);
            pagination.appendChild(pageButton);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const dots = document.createElement("span");
                dots.textContent = "...";
                dots.classList.add("pagination-dots");
                pagination.appendChild(dots);
            }

            const lastButton = createPageButton(totalPages);
            pagination.appendChild(lastButton);
        }

        if (currentPage < totalPages) {
            const nextButton = document.createElement("button");
            nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
            nextButton.classList.add("page-button", "nav-button");
            nextButton.addEventListener("click", () => {
                currentPage++;
                renderBooks();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(nextButton);
        }
    }

    function createPageButton(pageNum) {
        const pageButton = document.createElement("button");
        pageButton.textContent = pageNum;
        pageButton.classList.add("page-button");
        if (pageNum === currentPage) {
            pageButton.classList.add("active");
        }
        pageButton.addEventListener("click", () => {
            currentPage = pageNum;
            renderBooks();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return pageButton;
    }

    ageFilters.forEach(filter => {
        filter.addEventListener("click", () => {
            ageFilters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");
            currentAgeFilter = filter.dataset.age;
            filterBooks();
        });
    });

    searchInput.addEventListener("input", (e) => {
        currentSearchTerm = e.target.value;
        filterBooks();
    });

    updateResultsCount();
    renderBooks();
});