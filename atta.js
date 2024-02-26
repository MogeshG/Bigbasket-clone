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
    //Loading Green Line
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

    //add items button
    const addItemsButton = document.querySelectorAll(".add-items");
    const additionalButtonContainer =
        document.querySelectorAll(".count-container");
    addItemsButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            btn.style.display = "none";
            additionalButtonContainer[index].classList.remove(
                "additional-button-container"
            );
            additionalButtonContainer[index].classList.add(
                "additional-button-container-new"
            );
        });
    });

    //bookmark
    const wishlistButton = document.querySelectorAll(".wishlist i");
    wishlistButton.forEach((btn) => {
        let clicked = 0;
        btn.addEventListener("click", () => {
            if (!clicked) {
                btn.classList.remove("fa-regular");
                btn.classList.add("fa-solid");
            } else {
                btn.classList.remove("fa-solid");
                btn.classList.add("fa-regular");
            }
            clicked = !clicked;
        });
    });

    //count-items
    const increaseItem = document.querySelectorAll(".add-product");
    const decreaseItem = document.querySelectorAll(".remove-product");
    const countOfItem = document.querySelectorAll(".count-of-item");
    decreaseItem.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            countOfItem[index].innerHTML = countOfItem[index].innerHTML - 1;
            if (countOfItem[index].innerHTML <= 0) {
                additionalButtonContainer[index].classList.remove(
                    "additional-button-container-new"
                );
                additionalButtonContainer[index].classList.add(
                    "additional-button-container"
                );
                addItemsButton[index].style.display = "block";
                countOfItem[index].innerHTML = 1;
            }
        });
    });
    increaseItem.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            countOfItem[index].innerHTML =
                1 + parseInt(countOfItem[index].innerHTML);
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

    //

    //Filter eye image
    document.querySelector(".info-nav-filter").addEventListener("click", () => {
        if (
            document
                .querySelector(".info-nav-filter i")
                .classList.contains("fa-eye")
        ) {
            document
                .querySelector(".info-nav-filter i")
                .classList.remove("fa-eye");
            document
                .querySelector(".info-nav-filter i")
                .classList.add("fa-eye-slash");

            document.querySelector(".info-nav-filter").style.color = "";
            document.querySelector(".info-nav-filter").style.backgroundColor =
                "";

            document.querySelector(".info-nav-filter p").innerHTML =
                "Hide Filter";

            document.querySelector(".filter-menu").style.display = "";
            document.querySelector(".product-menu").style.width = "";
        } else {
            document
                .querySelector(".info-nav-filter i")
                .classList.remove("fa-eye-slash");
            document
                .querySelector(".info-nav-filter i")
                .classList.add("fa-eye");

            document.querySelector(".info-nav-filter").style.color = "#ffffff";
            document.querySelector(".info-nav-filter").style.backgroundColor =
                "#303030";

            document.querySelector(".filter-menu").style.display = "none";
            document.querySelector(".product-menu").style.width = "100%";
            document.querySelector(".info-nav-filter p").innerHTML =
                "Show Filter";
        }
    });
    //supersaver button toggle
    let clicked = 0;
    const supersaverButton = document.querySelector(".supersaver-button");
    supersaverButton.addEventListener("click", () => {
        if (!clicked) {
            supersaverButton.innerHTML = `
        <path
            fill="#f21c1c"
            d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
        />`;
        } else {
            supersaverButton.innerHTML = `<path
            d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
        />`;
        }
        clicked = !clicked;
    });

    //filter menu scroll
    // window.addEventListener("scroll", () => {
    //     const scrollY = window.scrollY;
    //     if (document.querySelector(".filter-menu").offsetTop <= scrollY)
    //         document.querySelector(".filter-menu").style.position = "fixed";
    //     else document.querySelector(".filter-menu").style.position = "";
    // });

    //filter-container-toggle
    const filterContainerButton = document.querySelectorAll(
        ".filter-container-button"
    );
    const filterContainer = document.querySelectorAll(".filter-container");
    const filterContainerButtonArrow = document.querySelectorAll(
        ".filter-container-button i"
    );
    filterContainerButton.forEach((btn, index) => {
        let clicked = 0;
        btn.addEventListener("click", () => {
            if (!clicked) {
                filterContainer[index].style.display = "none";
                filterContainerButtonArrow[index].classList.remove(
                    "fa-angle-up"
                );
                filterContainerButtonArrow[index].classList.add(
                    "fa-angle-down"
                );
            } else {
                filterContainer[index].style.display = "block";
                filterContainerButtonArrow[index].classList.remove(
                    "fa-angle-down"
                );
                filterContainerButtonArrow[index].classList.add("fa-angle-up");
            }
            clicked = !clicked;
        });
    });

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
    const basketItemScrollContainer = document.querySelectorAll(
        ".basket-item-scroll-detail"
    );
    scrollContainerButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let div = basketItem[index];
            let supersaver = supersaverAnimation[index];
            div.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            supersaver.classList.remove("supersaverAnimationWidth");
            setTimeout(() => {
                basketItemScrollContainer[index].style.display = "none";
            }, 500);
        });
    });
    basketItemOfferButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            basketItem.forEach((item, val) => {
                item.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                supersaverAnimation[val].classList.remove(
                    "supersaverAnimationWidth"
                );
                if (val != index) {
                    setTimeout(() => {
                        basketItemScrollContainer[val].style.display = "none";
                    }, 500);
                }
            });
            basketItemScrollContainer[index].style.display = "block";

            let div = basketItem[index];
            let supersaver = supersaverAnimation[index];
            div.scrollTo({
                top: 5000,
                behavior: "smooth",
            });
            supersaver.classList.add("supersaverAnimationWidth");
        });
    });

    const prevBtn = document.querySelectorAll(".prev-btn");
    const nextBtn = document.querySelectorAll(".next-btn");

    let container;
    prevBtn.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            if (index === 0)
                container = document.querySelector(".basket-cntr-main");
            else container = document.querySelector(".best-seller-container");

            container.scrollTo({
                left: container.scrollLeft - container.offsetWidth,
                behavior: "smooth",
            });
            prevBtn[index].disabled = "true";
            nextBtn[index].disabled = "";
            prevBtn[index].style.cursor = "not-allowed";
            nextBtn[index].style.cursor = "";
            prevBtn[index].style.boxShadow = "none";
            nextBtn[index].style.boxShadow = "";
        });
    });
    container = "";
    nextBtn.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            if (index === 0)
                container = document.querySelector(".basket-cntr-main");
            else container = document.querySelector(".best-seller-container");
            container.scrollTo({
                left: container.scrollLeft + container.offsetWidth,
                behavior: "smooth",
            });
            nextBtn[index].style.cursor = "not-allowed";
            prevBtn[index].style.cursor = "";
            nextBtn[index].disabled = "true";
            prevBtn[index].disabled = "";
            nextBtn[index].style.boxShadow = "none";
            prevBtn[index].style.boxShadow = "";
        });
    });

    //Category Button Container
    const categoryButton = document.querySelector(".category");
    const categoryContainer = document.querySelector(".category-container");

    categoryButton.addEventListener("click", () => {
        categoryContainer.style.display = "block";
        firstElements();
        const blackOverlay = document.createElement("div");
        blackOverlay.classList.add("black-background");
        document.body.appendChild(blackOverlay);
        function handleClickOutside(event) {
            if (!categoryContainer.contains(event.target)) {
                categoryContainer.style.display = "none";
                blackOverlay.remove();
                document.body.removeEventListener("click", handleClickOutside);
            }
        }
        setTimeout(() => {
            document.body.addEventListener("click", handleClickOutside);
        }, 500);
        // function handleEscapeKey(event) {
        //     if (event.key === "Escape") {
        //         categoryContainer.style.display = "none";
        //         // blackOverlay.remove();
        //         document.body.removeEventListener("keydown", handleEscapeKey);
        //     }
        // }
        // setTimeout(() => {
        //     document.body.addEventListener("click", handleEscapeKey);
        // }, 500);
    });

    //Initial Active Container item
    const categoryMain = document.querySelector(".category-main");
    const categoryMainContainer = document.querySelector(".category-main-item");
    const categorySub1 = document.querySelector(".category-sub-1");
    const categorySub2 = document.querySelector(".category-sub-2");
    const categoryMainItems = document.querySelectorAll(
        ".category-main-item li"
    );
    const categorySub1Item = document.querySelectorAll(".category-sub-1 li");
    const categorySub2Item = document.querySelectorAll(".category-sub-2 li");

    function firstElements() {
        document.querySelector(".category-main-item li").style.backgroundColor =
            "#404040";
        document.querySelector(".category-main-item li").style.fontWeight =
            "bold";
        document.querySelector(".category-sub-1 li").style.backgroundColor =
            "#ffffff";
        document.querySelector(".category-sub-1 li").style.fontWeight = "bold";
        document.querySelector(".category-sub-2 li").style.backgroundColor =
            "#eeeeee";
        document.querySelector(".category-sub-2 li").style.fontWeight = "bold";
    }

    categoryMainContainer.addEventListener("mouseover", () => {
        document.querySelector(".category-main-item li").style.backgroundColor =
            "";
        document.querySelector(".category-main-item li").style.fontWeight = "";
    });
    categoryMainContainer.addEventListener("mouseout", () => {
        document.querySelector(".category-main-item li").style.backgroundColor =
            "#404040";
        document.querySelector(".category-main-item li").style.fontWeight =
            "bold";
    });
    categorySub1.addEventListener("mouseover", () => {
        document.querySelector(".category-sub-1 li").style.backgroundColor = "";
        document.querySelector(".category-sub-1 li").style.fontWeight = "";
    });
    categorySub1.addEventListener("mouseout", () => {
        document.querySelector(".category-sub-1 li").style.backgroundColor =
            "#ffffff";
        document.querySelector(".category-sub-1 li").style.fontWeight = "bold";
    });
    categorySub2.addEventListener("mouseover", () => {
        document.querySelector(".category-sub-2 li").style.backgroundColor = "";
        document.querySelector(".category-sub-2 li").style.fontWeight = "";
    });
    categorySub2.addEventListener("mouseout", () => {
        document.querySelector(".category-sub-2 li").style.backgroundColor =
            "#eeeeee";
        document.querySelector(".category-sub-2 li").style.fontWeight = "bold";
    });
    let sub1Items = [
        [
            "Cuts & Sprouts",
            "Exotic Fruits & Veggies",
            "Flower Bouquets, Bunches",
            "Fresh Fruits",
            "Fresh Vegetables",
            "Herbs & Seasoning",
            "Organic Fruits & Vegetables",
        ],
        [
            "Atta, Flours & Sooji",
            "Dals & Pulses",
            "Dry Fruits",
            "Edible Oils & Ghee",
            "Masalas & Spices",
            "Organic Staples",
            "Rice & Rice Products",
            "Salt, Sugar & Jaggery",
        ],
        [
            "Bakery Snacks",
            "Breads & Buns",
            "Cakes & Pastries",
            "Cookies, Rusk 7 Khari",
            "Diary",
            "Gourmet Breads",
            "Ice Creams & Desserts",
            "Non Diary",
        ],
        [
            "Coffee",
            "Energy & Soft Drinks",
            "Fruit Juices & Drinks",
            "Health Drink, Supplements",
            "Tea",
            "Water",
        ],
    ];
    let sub2Items = [
        [
            "<li>Cut & Peeled Veggies</li><li>Cut Fruit, Tender Coconut</li><li>Fresh Juices & Milkshakes</li><li>Fresh Salads & Sprouts</li><li>Recipe Packs</li>",
            "<li>Exotic Fruits</li><li>Exotic Vegetables</li>",
            "<li>Bouquets</li><li>Marigold</li><li>Other Flowers</li><li>Roses</li>",
            "<li>Apples & Pomegranate</li><li>Banana, Sapota & Papaya</li><li>Fruit Baskets</li><li>Kiwi, Melon, Citrus Fruit</li><li>Mangoes</li><li>Seasonal Fruits</li>",
            "<li>Beans, Brinjals & Okra</li><li>Cabbage & Cauliflower</li><li>Cucumber & Capsicum</li><li>Gourd, Pumpkin, Drumstick</li><li>Leafy Vegetables</li><li>Potato, Onion & Tomato</li><li>Root Vegetables</li><li>Speciality</li>",
            "<li>Indian & Exotic Herbs</li><li>Lemon, Ginger & Garlic</li>",
            "<li>Organic Fruits</li><li>Organic Vegetables</li>",
        ],
        [
            "<li>Cut & Peeled Veggies</li><li>Cut Fruit, Tender Coconut</li><li>Fresh Juices & Milkshakes</li><li>Fresh Salads & Sprouts</li><li>Recipe Packs</li>",
            "<li>Exotic Fruits</li><li>Exotic Vegetables</li>",
            "<li>Bouquets</li><li>Marigold</li><li>Other Flowers</li><li>Roses</li>",
            "<li>Apples & Pomegranate</li><li>Banana, Sapota & Papaya</li><li>Fruit Baskets</li><li>Kiwi, Melon, Citrus Fruit</li><li>Mangoes</li><li>Seasonal Fruits</li>",
            "<li>Beans, Brinjals & Okra</li><li>Cabbage & Cauliflower</li><li>Cucumber & Capsicum</li><li>Gourd, Pumpkin, Drumstick</li><li>Leafy Vegetables</li><li>Potato, Onion & Tomato</li><li>Root Vegetables</li><li>Speciality</li>",
            "<li>Indian & Exotic Herbs</li><li>Lemon, Ginger & Garlic</li>",
            "<li>Organic Fruits</li><li>Organic Vegetables</li>",
        ],
        [
            "<li>Cut & Peeled Veggies</li><li>Cut Fruit, Tender Coconut</li><li>Fresh Juices & Milkshakes</li><li>Fresh Salads & Sprouts</li><li>Recipe Packs</li>",
            "<li>Exotic Fruits</li><li>Exotic Vegetables</li>",
            "<li>Bouquets</li><li>Marigold</li><li>Other Flowers</li><li>Roses</li>",
            "<li>Apples & Pomegranate</li><li>Banana, Sapota & Papaya</li><li>Fruit Baskets</li><li>Kiwi, Melon, Citrus Fruit</li><li>Mangoes</li><li>Seasonal Fruits</li>",
            "<li>Beans, Brinjals & Okra</li><li>Cabbage & Cauliflower</li><li>Cucumber & Capsicum</li><li>Gourd, Pumpkin, Drumstick</li><li>Leafy Vegetables</li><li>Potato, Onion & Tomato</li><li>Root Vegetables</li><li>Speciality</li>",
            "<li>Indian & Exotic Herbs</li><li>Lemon, Ginger & Garlic</li>",
            "<li>Organic Fruits</li><li>Organic Vegetables</li>",
        ],
        [
            "<li>Cut & Peeled Veggies</li><li>Cut Fruit, Tender Coconut</li><li>Fresh Juices & Milkshakes</li><li>Fresh Salads & Sprouts</li><li>Recipe Packs</li>",
            "<li>Exotic Fruits</li><li>Exotic Vegetables</li>",
            "<li>Bouquets</li><li>Marigold</li><li>Other Flowers</li><li>Roses</li>",
            "<li>Apples & Pomegranate</li><li>Banana, Sapota & Papaya</li><li>Fruit Baskets</li><li>Kiwi, Melon, Citrus Fruit</li><li>Mangoes</li><li>Seasonal Fruits</li>",
            "<li>Beans, Brinjals & Okra</li><li>Cabbage & Cauliflower</li><li>Cucumber & Capsicum</li><li>Gourd, Pumpkin, Drumstick</li><li>Leafy Vegetables</li><li>Potato, Onion & Tomato</li><li>Root Vegetables</li><li>Speciality</li>",
            "<li>Indian & Exotic Herbs</li><li>Lemon, Ginger & Garlic</li>",
            "<li>Organic Fruits</li><li>Organic Vegetables</li>",
        ],
    ];

    var inx = 0;
    categoryMainItems.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            inx = index;
            let sub1data = ``;
            for (let i = 0; i < sub1Items[index].length; i++) {
                sub1data += `<li>${sub1Items[index][i]}</li>`;
            }
            categorySub1.innerHTML = sub1data;
            firstElements();

            let sub2data = sub2Items[inx][0];
            categorySub2.innerHTML = sub2data;
            firstElements();
        });
    });
    categorySub1Item.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            let sub2data = sub2Items[inx][index];
            categorySub2.innerHTML = sub2data;
            firstElements();
        });
    });

    //Selective GetIt Button
    (() => {
        const basketItemOfferButton = document.querySelectorAll(
            ".basket-item-offer-button"
        );
        let getIt = [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1];
        basketItemOfferButton.forEach((btn, index) => {
            if (getIt[index] === 0) btn.style.visibility = "hidden";
        });
    })();
});

// Products insertion
(() => {
    insertProducts();
})();

function insertProducts() {
    const productMenu = document.querySelector(".product-menu");

    let productMenuData = "";
    for (let i = 0; i < 12; i++) {
        productMenuData += productItem(i);
    }
    productMenu.innerHTML += productMenuData;
}

function productItem(i) {
    let name = [
        "Atta/Gogihittu - Whole Wheat",
        "Select Sharbati Atta",
        "Sooji Ordinary/Bombay Rava",
        "Atta with Multigrains",
        "Bansi Sooji",
        "Rice Flour",
        "Fine Besan/Kadale Hittu",
        "Superior-Mp-Sharbati-Atta",
        "Maida",
        "Chiroti/Baik Sooji",
        "Chakki Fresh Atta",
        "Organic Whole Wheat Atta",
    ];
    let quantity = [
        "5kg",
        "10kg",
        "5x1 kg - Multipack",
        "10kg",
        "500g - Pouch",
        "500g - Pouch",
        "1kg",
        "10kg - Pouch",
        "5x1 kg - Multipack",
        "500 g - Pouch",
        "1kg - Pouch",
        "1kg",
    ];
    let brand = [
        "Aashirvaad",
        "Aashirvaad",
        "BB Royal",
        "Aashirvaad",
        "BB Royal",
        "BB Royal",
        "Tata Sampann",
        "BB Royal",
        "BB Royal",
        "BB Royal",
        "Fortune",
        "Aashirvaad",
    ];
    let discount = [18, 16, 30, 16, 16, 17, 26, 21, 29, 9, 33, 13];
    let price = [
        240.34, 504, 295, 546, 32, 25, 111, 514.58, 230.55, 30, 57.36, 65,
    ];
    let itemTemplate = `<div class="basket-item-container">
    <div class="basket-item">
        <div class="basket-item-image-container">
            <img
                src="./images/pm${i + 1}.jpeg"
                alt="basket Item Image"
                class="basket-item-image"
            />
            <p class="basket-item-discount">${discount[i]}% OFF</p>
            <div class="basket-item-image-type-cntr">
                <div class="basket-item-image-type"></div>
            </div>
        </div>
        <div class="basket-item-detail-container">
            <p class="basket-item-detail-brand">${brand[i]}</p>
            <p class="basket-item-detail-name">${name[i]}</p>
            <select
                name="basket-item-quantity"
                id="basket-item-detail-quantity-select"
                class="basket-item-detail-quantity"
            >
                <option
                    value="250g"
                    class="basket-item-quantity-select-option"
                >
                    ${quantity[i]}
                    <!-- <div class="basket-item-quantity-value-cntr">
                <p class="basket-item-quantity-value">250g</p>
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="basket-item-quantity-detail">
                            <div class="basket-item-quantity-discount">{
                                discount[i]
                            }% OFF</div>
                            <p class="basket-item-quantity-price">{
                                price[i]
                            }</p>
                            <p class="basket-item-quantity-discount-price">80</p>
                            <button class="basket-item-quantity-button">Add</button>
                            </div> -->
                </option>
            </select>
            <div
                class="basket-item-detail-price-cntr d-flex flex-row"
                style="align-items: center"
            >
                <p
                    class="basket-item-quantity-price"
                    style="padding: 0.2rem; margin: 0"
                >
                    &#8377;${price[i]}
                </p>
                <p
                    class="basket-item-quantity-discount-price"
                    style="margin: 0"
                >
                    &#8377;${parseFloat(
                        (price[i] * 100) / (100 - discount[i])
                    ).toFixed(2)}
                </p>
            </div>
        </div>
        <div class="basket-item-offer-button">
            <img src="/images/discount.gif" />
            <p>Get it for &#8377;${parseFloat(price[i] - 100 / 20).toFixed(
                2
            )}</p>
        </div>
        <br />
        <div class="basket-item-scroll-detail">
            <p>${brand[i]}</p>
            <p>${name[i]}</p>
            <div
                class="basket-item-scroll-price-container d-flex align-items-center"
            >
                <p
                    class="basket-item-quantity-price"
                    style="padding: 0.2rem; margin: 0"
                >
                    &#8377;${price[i]}
                </p>
                <p
                    class="basket-item-quantity-discount-price"
                    style="margin: 0"
                >
                    &#8377;${parseFloat((price[i] / discount[i]) * 100).toFixed(
                        2
                    )}
                </p>
            </div>
            <div class="basket-item-scroll-container">
                <div class="basket-item-scroll-function">
                    <img
                        class="basket-item-scroll-container-img"
                        src="./images/getIt.png"
                        alt=""
                        style="width: 30px; height: 30px"
                    />
                    <button
                        class="basket-item-scroll-container-back"
                    >
                        X
                    </button>
                </div>
                <div class="supersaverAnimation">
                    <p>supersaver!</p>
                </div>
                <div class="getItem">
                    <p>
                        <b>Get it for &#8377;${parseFloat(
                            price[i] - 100 / 20
                        ).toFixed(2)}</b>
                    </p>
                    <p>
                        Buy items worth
                        <b>&#8377;1500</b> to get this
                        product at a supersaver price for
                        <b>&#8377;${parseFloat(price[i] - 100 / 20).toFixed(
                            2
                        )}</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="item-count-button">
        <button class="wishlist">
            <i
                class="fa-regular fa-bookmark"
                style="color: #010409"
            ></i>
        </button>
        <div class="add-items-button-container">
            <button class="add-items">Add</button>
            <div class="count-container additional-button-container">
                <button class="remove-product">-</button>
                <p class="count-of-item">1</p>
                <button class="add-product">+</button>
            </div>
        </div>
    </div>
</div>`;
    return itemTemplate;
}

// const basketItemOfferButton = document.querySelectorAll(
//     ".basket-item-offer-button"
// );
// basketItemOfferButton.forEach((btn, index) => {
//     if (index % 3 === 0) btn.style.display = "none";
// });
