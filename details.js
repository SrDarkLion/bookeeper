document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const currentAge = params.get("age");

    const ageColors = {
        "L": "age-livre",
        "10": "age-10",
        "12": "age-12",
        "14": "age-14",
        "16": "age-16",
        "18": "age-18"
    };
    
    document.querySelector(".book-title").textContent = params.get("title");
    document.querySelector(".book-author").textContent = params.get("author");
    document.querySelector(".book-cover").style.backgroundImage = `url(public/assets/capas/${params.get("image")})`;
    document.querySelector(".book-description").textContent = params.get("desc");

    const age = params.get("age");
    const ageBadge = document.querySelector(".age-rating-two .age-badge-two");
    ageBadge.textContent = age;
    ageBadge.classList.add(`age-${age}`);
}
);
