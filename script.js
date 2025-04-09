document.addEventListener("DOMContentLoaded", () => {
    const library = document.querySelector(".library");

    const books = [
        { title: "Pai Rico, Pai Pobre", author: "Robert Kiyosaki", description: "Um dos livros mais influentes sobre educação financeira, ensinando a importância do mindset certo para alcançar a independência financeira e construir riqueza.", age: "14", image: "livro1.jpg" },
        { title: "Café Com Deus Pai", author: "Junior Rostirola", description: "Uma coletânea de reflexões e mensagens inspiradoras para fortalecer a fé e guiar o leitor em sua jornada espiritual.", age: "L", image: "livro2.jpg" },
        { title: "O Homem Mais Rico da Babilônia", author: "George S. Clason", description: "Através de parábolas ambientadas na antiga Babilônia, este livro ensina princípios financeiros valiosos que ainda são relevantes nos dias de hoje.", age: "12", image: "livro3.jpg" },
        { title: "JavaScript: O Guia Definitivo", author: "David Flanagan", description: "A bíblia do JavaScript para programadores de todos os níveis, abordando desde conceitos básicos até técnicas avançadas para desenvolvimento web.", age: "14", image: "livro4.jpg" },
        { title: "A Sutil Arte De Ligar O F*dase", author: "Mark Manson", description: "Uma abordagem honesta e sem rodeios sobre como aceitar os desafios da vida e focar no que realmente importa para ser mais feliz e realizado.", age: "18", image: "livro5.jpg" },
        { title: "Diário De Um Banana", author: "Jeff Kinney", description: "As aventuras e desventuras de Greg Heffley, um garoto que tenta sobreviver à escola e às trapalhadas do dia a dia com muito humor.", age: "10", image: "livro6.jpg" },
        { title: "Assistente do Vilão", author: "C. M. Costa", description: "Um jovem é recrutado para trabalhar para um vilão carismático, embarcando em uma jornada cheia de surpresas, perigos e momentos hilários.", age: "14", image: "livro7.jpg" },
        { title: "Como Fazer Amigos e Influenciar Pessoas", author: "Dale Carnegie", description: "O clássico atemporal sobre comunicação, carisma e relacionamentos interpessoais, ensinando como criar conexões genuínas e influenciar positivamente as pessoas ao seu redor.", age: "12", image: "livro8.jpg" },
        { title: "Em Nome do Povo", author: "Kenan Malik", description: "Uma análise provocativa sobre política, populismo e identidade social no mundo moderno, explorando o impacto das ideologias no comportamento das sociedades.", age: "16", image: "livro9.jpg" },
        { title: "48 Leis do Poder", author: "Robert Greene", description: "Um estudo detalhado sobre o poder e suas estratégias, baseado na história e filosofia, para quem deseja entender as dinâmicas da influência e liderança.", age: "18", image: "livro10.jpg" },
        { title: "O Programador Pragmático", author: "Andrew Hunt & David Thomas", description: "Um guia essencial para desenvolvedores que desejam aprimorar suas habilidades, escrever código mais eficiente e se destacar no mundo da programação.", age: "16", image: "livro11.jpg" },
        { title: "Entendendo Algoritmos", author: "Aditya Y. Bhargava", description: "Uma abordagem visual e intuitiva para explicar os principais algoritmos, tornando o aprendizado de programação mais acessível e prático.", age: "14", image: "livro12.jpg" },
        { title: "Os Segredos da Mente Milionária", author: "T. Harv Eker", description: "Descubra como sua mentalidade pode influenciar suas finanças e aprenda a reprogramar sua forma de pensar para alcançar a prosperidade.", age: "16", image: "livro13.jpg" },
        { title: "A Empregada Está de Olho", author: "Freida McFadden", description: "Um thriller psicológico eletrizante que acompanha uma empregada com um passado sombrio e segredos perturbadores escondidos na casa onde trabalha.", age: "18", image: "livro14.jpg" },
        { title: "É Assim Que Começa", author: "Colleen Hoover", description: "O aguardado desdobramento de 'É Assim Que Acaba', explorando temas como amor, redenção e as escolhas que moldam nossos destinos.", age: "16", image: "livro15.jpg" },
        { title: "É Assim Que Acaba", author: "Colleen Hoover", description: "Uma história emocionante sobre relacionamentos, resiliência e a força necessária para quebrar ciclos tóxicos e recomeçar.", age: "16", image: "livro16.jpg" },
        { title: "A Contadora", author: "Jane Harper", description: "Suspense intrigante sobre mistérios financeiros e assassinatos.", age: "18", image: "livro17.jpg" },
        { title: "Manual de Persuasão do FBI", author: "Jack Schafer", description: "Técnicas usadas pelo FBI para influenciar e persuadir pessoas.", age: "16", image: "livro18.jpg" },
        { title: "O Livro Que Você Gostaria Que Seus Pais Tivessem Lido", author: "Philippa Perry", description: "Reflexões sobre relações familiares e educação dos filhos.", age: "12", image: "livro19.jpg" },
        { title: "Como Convencer Alguém Em 90 Segundos", author: "Nicholas Boothman", description: "Técnicas de comunicação eficazes para causar uma boa impressão rapidamente.", age: "14", image: "livro20.jpg" },
        { title: "Três", author: "Dror Mishani", description: "Suspense psicológico envolvente sobre três mulheres e um segredo mortal.", age: "18", image: "livro21.jpg" },
        { title: "Um Tempo Pra Mim", author: "Flavia Melissa", description: "Dicas para autocuidado e equilíbrio emocional.", age: "L", image: "livro22.jpg" },
        { title: "Desperta", author: "Erin Morgenstern", description: "Um romance mágico ambientado em um circo misterioso.", age: "14", image: "livro23.jpg" },
        { title: "The Egg", author: "Andy Weir", description: "Uma reflexão filosófica sobre a vida e a reencarnação.", age: "12", image: "livro24.jpg" },
        { title: "Véspera", author: "Carla Madeira", description: "Um drama envolvente sobre amor, perda e família.", age: "16", image: "livro25.jpg" },
        { title: "Ei, Ei, Ei, Vanderlei", author: "Pedro Rhuas", description: "Um romance juvenil cheio de humor e referências à cultura pop.", age: "12", image: "livro26.jpg" },
        { title: "Agente Mira No Amor E Acerta Na Solidão", author: "Elayne Baeta", description: "Uma comédia romântica LGBTQ+ sobre amizade e amor próprio.", age: "16", image: "livro27.jpg" },
        { title: "Não É Como Nos Filmes", author: "Holly Bourne", description: "Uma jovem descobre que o amor na vida real não é como nos filmes.", age: "14", image: "livro28.jpg" },
        { title: "Nada Pode Me Ferir", author: "David Goggins", description: "A impressionante jornada de superação de um dos homens mais resilientes do mundo, que enfrentou desafios extremos para se tornar um atleta de elite.", age: "16", image: "livro29.jpg" },
        { title: "Não Começou Com Você", author: "Mark Wolynn", description: "Um estudo sobre traumas familiares e sua influência na vida.", age: "18", image: "livro30.jpg" },
        { title: "O Ego é Seu Inimigo", author: "Ryan Holiday", description: "Um guia inspirador sobre como superar o ego para alcançar o verdadeiro sucesso e desenvolver humildade e disciplina.", age: "16", image: "livro31.jpg" },
        { title: "As Aventuras De Mike", author: "Gabriel Dearo e Manu Digilio", description: "Uma história divertida cheia de confusões e humor, inspirada no canal de YouTube 'Falaidearo'.", age: "L", image: "livro32.jpg" }
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
            bookElement.addEventListener("click", () => {
                window.location.href = `details.html?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&image=${encodeURIComponent(book.image)}&age=${book.age}&desc=${encodeURIComponent(book.description)}`;
            });         
            

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
