document.addEventListener("DOMContentLoaded", function (event) {
    const images = document.querySelectorAll(".b-offer");
    images.forEach((image) => {
        image.addEventListener("mouseover", function (event) {
            this.style.boxShadow = "1px 8px 20px rgba(0, 0, 0, 0.5)";
        });
        image.addEventListener("mouseout", function (event) {
            this.style.boxShadow = "none";
        });
    });

    const greenLine = document.querySelector(".loading");
    const trigger = document.querySelectorAll(".trigger");
    trigger.forEach((clk) => {
        clk.addEventListener("click", function () {
            clearInterval(window.a);
            greenLine.classList.remove("shrink");
            window.a = setInterval(() => {
                greenLine.classList.toggle("shrink");
            }, 700);
            setTimeout(() => {
                clearInterval(window.a);
                greenLine.classList.remove("shrink");
            }, 4200);
        });
    });

    document
        .getElementById("search-input")
        .addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                clearInterval(window.x);
                greenLine.classList.remove("shrink");
                window.x = setInterval(func, 700);
                function func() {
                    greenLine.classList.toggle("shrink");
                }
                setTimeout(() => {
                    clearInterval(window.x);
                    greenLine.classList.remove("shrink");
                }, 4200);
            }
        });
});
