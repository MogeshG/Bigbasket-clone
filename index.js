document.addEventListener("DOMContentLoaded", function (event) {
    const images = document.querySelectorAll(".offer-eff");
    images.forEach((image) => {
        image.addEventListener("mouseover", function (event) {
            this.style.boxShadow = ".1rem 1rem 1.5rem rgba(0, 0, 0, 0.2)";
        });
        image.addEventListener("mouseout", function (event) {
            this.style.boxShadow = "";
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

    //carousel button opacity
    const carouselButton = document.querySelectorAll(".carousel-arrow");
    carouselButton.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
            btn.style.opacity = 100;
        });
        btn.addEventListener("mouseout", () => {
            btn.style.opacity = "";
        });
    });

    //carousel-image change
    var currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    document.querySelector(".prev-button").addEventListener("click", () => {
        moveToIndex(currentIndex - 1);
    });

    document.querySelector(".next-button").addEventListener("click", () => {
        moveToIndex(currentIndex + 1);
    });

    function moveToIndex(index) {
        items[currentIndex].classList.remove("active");
        currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        items[currentIndex].classList.add("active");
    }
    setInterval(() => {
        let x = currentIndex;
        x++;
        if (x >= 4) {
            x = 0;
        }
        moveToIndex(x);
    }, 2000);

    // JavaScript to hide menu while scrolling downwards
    let lastScrollTop = 0;
    const menu = document.getElementById("menu");
    window.addEventListener("scroll", function (window) {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            menu.classList.add("hidden");
        } else {
            menu.classList.remove("hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    //Basket item scroll
    const basketItem = document.querySelectorAll(".basket-item");
    const basketItemOfferButton = document.querySelectorAll(
        ".basket-item-offer-button"
    );
    const supersaverAnimation = document.querySelectorAll(
        ".supersaverAnimation"
    );
    const scrollContainerButton = document.querySelectorAll(
        ".basket-item-scroll-container-back"
    );
    scrollContainerButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let div = basketItem[index];
            let supersaver = supersaverAnimation[index];
            div.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            supersaver.style = "";
        });
    });
    basketItemOfferButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let div = basketItem[index];
            let supersaver = supersaverAnimation[index];
            div.scrollTo({
                top: 480,
                behavior: "smooth",
            });
            supersaver.classList.add("supersaverAnimationWidth");
        });
    });

    const container = document.querySelector(".basket-cntr-main");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prevBtn.addEventListener("click", function () {
        container.scrollTo({
            left: container.scrollLeft - container.offsetWidth,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", function () {
        container.scrollTo({
            left: container.scrollLeft + container.offsetWidth,
            behavior: "smooth",
        });
    });
});

const basketContainer = document.querySelector(".basket-cntr-main");
(() => {
    populateBasketContainer();
})();

function populateBasketContainer() {
    let basketSubDiv = "";
    basketContainer.innerHTML = " ";
    for (let i = 0; i < 8; i++) {
        basketSubDiv += loadBasketItem(i);
    }
    basketContainer.innerHTML += basketSubDiv;
    // basketSubDiv="";
    // for (let i = 4; i < 8; i++) {
    //     basketSubDiv += loadBasketItem(i);
    // }
    // basketContainer.innerHTML += `<div class="basket-cntr">${basketSubDiv}</div>`;
}

function loadBasketItem(i) {
    let name = [
        "Capsicum Green (Loose)",
        "Carrot Orange (Loose)",
        "Cauliflower",
        "Corainder leaves",
    ];
    let quantity = ["1Kg", "1Kg", "1Pc - ()"];

    const basketItemHtml = `<div class="basket-item">
                    <div class="basket-item-image-container">
                    <img src="./images/sb${
                        i + 1
                    }.jpg" alt="basket Item Image" class="basket-item-image">
                    <p class="basket-item-discount">54% OFF</p>
                    <div class="basket-item-image-type-cntr">
                    <div class="basket-item-image-type"></div>
                    </div>
                    </div>
                    <div class="basket-item-detail-container">
                    <p class="basket-item-detail-brand">Fresho</p>
                    <p class="basket-item-detail-name">${name[i]}</p>
            <select name="basket-item-quantity" id="basket-item-detail-quantity-select" class="basket-item-detail-quantity">
            <option value="250g" class="basket-item-quantity-select-option">
            1 kg
            <!-- <div class="basket-item-quantity-value-cntr">
            <p class="basket-item-quantity-value">250g</p>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="basket-item-quantity-detail">
                        <div class="basket-item-quantity-discount">27% OFF</div>
                        <p class="basket-item-quantity-price">$21.5</p>
                        <p class="basket-item-quantity-discount-price">$29.45</p>
                        <button class="basket-item-quantity-button">Add</button>
                        </div> -->
                        </option>
                        </select>
                        <div class="basket-item-detail-price-cntr">
                        <p></p>
                        <p></p>
                        </div>
                        </div>
                        <div class="basket-item-offer-button">
                        <i></i>
                        <p>Get it for $62.70</p>
                        </div>
                        <br />
                        <div class="basket-item-scroll-detail">
                        <p>Fresho</p>
                        <p>Capsicum-Green (Loose)</p>
                        <div class="basket-item-scroll-price-container d-flex">
                <p>$50</p>
                <p>$108.22</p>
                </div>
                <div class="basket-item-scroll-container">
                <div class="basket-item-scroll-function">
                <img class="basket-item-scroll-container-img" src="./images/getIt.png" alt="" style="width: 30px;height: 30px;">
                <button class="basket-item-scroll-container-back">X</button></div>
                <div class="supersaverAnimation"><p>supersaver!</p></div>
                <div class="getItem"><p><b>Get it for $62.70</b></p>
                <p>Buy items worth <b>$1500</b> to get this product at a supersaver
                price for <b>$62.70</b></p>
                </div>
                </div>
                </div>
                <div class="">

        </div>
    </div>`;
    return basketItemHtml;
    // basketContainer.innerHTML += basketItemHtml;
    // basketContainer.innerHTML += basketItemHtml;
}
