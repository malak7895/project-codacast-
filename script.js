/* =====================================================
   VELORA - JAVASCRIPT
===================================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Classic Blazer",
        category: "Women",
        type: "blazer",
        price: 89,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=90",
        badge: "NEW"
    },

    {
        id: 2,
        name: "Elegant Dress",
        category: "Women",
        type: "dress",
        price: 120,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=90",
        badge: "NEW"
    },

    {
        id: 3,
        name: "Silk Scarf",
        category: "Women",
        type: "accessories",
        price: 45,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=90",
        badge: "TRENDING"
    },

    {
        id: 4,
        name: "Luxury Bag",
        category: "Women",
        type: "accessories",
        price: 130,
        oldPrice: 180,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=90",
        badge: "SALE"
    },

    {
        id: 5,
        name: "Pajama Set",
        category: "Women",
        type: "dress",
        price: 55,
        oldPrice: 80,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=90",
        badge: "SALE"
    },

    {
        id: 6,
        name: "High Heels",
        category: "Women",
        type: "accessories",
        price: 75,
        oldPrice: 110,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=90",
        badge: "SALE"
    },

    {
        id: 7,
        name: "Oversized Shirt",
        category: "Men",
        type: "shirt",
        price: 65,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=90",
        badge: "NEW"
    },

    {
        id: 8,
        name: "Premium Suit",
        category: "Men",
        type: "suit",
        price: 220,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=90",
        badge: "PREMIUM"
    },

    {
        id: 9,
        name: "Minimal Sneakers",
        category: "Men",
        type: "shoes",
        price: 95,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",
        badge: "TRENDING"
    },

    {
        id: 10,
        name: "Classic Watch",
        category: "Men",
        type: "accessories",
        price: 180,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=90",
        badge: "LIMITED"
    },

    {
        id: 11,
        name: "Leather Jacket",
        category: "Men",
        type: "jacket",
        price: 140,
        oldPrice: 190,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
        badge: "SALE"
    },

    {
        id: 12,
        name: "Classic Shirt",
        category: "Men",
        type: "shirt",
        price: 70,
        oldPrice: 95,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=90",
        badge: "SALE"
    }

];


/* ================= PRODUCT CARD ================= */

function productCard(product) {

    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="badge">
                    ${product.badge}
                </span>


                <div class="product-actions">

                    <button
                        class="wishlist"
                        data-id="${product.id}"
                        title="Wishlist">

                        <i class="fa-regular fa-heart"></i>

                    </button>

                </div>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.category}
                </p>


                <div class="price">

                    ${
                        product.oldPrice
                        ?
                        `<span class="old-price">
                            $${product.oldPrice}
                        </span>`
                        :
                        ""
                    }

                    $${product.price}

                </div>


                <button
                    class="add-cart"
                    data-id="${product.id}">

                    ADD TO BAG

                </button>

            </div>

        </article>

    `;
}


/* ================= DISPLAY ================= */

const homeProducts =
    document.getElementById("homeProducts");

const womenProducts =
    document.getElementById("womenProducts");

const menProducts =
    document.getElementById("menProducts");

const collectionProducts =
    document.getElementById("collectionProducts");

const saleProducts =
    document.getElementById("saleProducts");


if (homeProducts) {

    homeProducts.innerHTML =
        products
        .slice(0,4)
        .map(productCard)
        .join("");

}


if (womenProducts) {

    womenProducts.innerHTML =
        products
        .filter(product => product.category === "Women")
        .map(productCard)
        .join("");

}


if (menProducts) {

    menProducts.innerHTML =
        products
        .filter(product => product.category === "Men")
        .map(productCard)
        .join("");

}


if (collectionProducts) {

    collectionProducts.innerHTML =
        products
        .slice(0,8)
        .map(productCard)
        .join("");

}


if (saleProducts) {

    saleProducts.innerHTML =
        products
        .filter(product => product.oldPrice)
        .map(productCard)
        .join("");

}


/* ================= CART ================= */

let cart =
    JSON.parse(
        localStorage.getItem("veloraCart")
    ) || [];


function saveCart() {

    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );

}


function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    cart.push(product);

    saveCart();

    updateCart();

    showToast(
        `${product.name} added to your bag 🛍️`
    );

}


function removeFromCart(index) {

    cart.splice(index,1);

    saveCart();

    updateCart();

}


function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cartCount) {

        cartCount.textContent =
            cart.length;

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your bag is empty.
            </p>
        `;

        if (cartTotal) {

            cartTotal.textContent = "$0";

        }

        return;

    }


    cartItems.innerHTML =
        cart.map(
            (product,index) => `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            $${product.price}
                        </p>

                        <button
                            class="remove-item"
                            data-index="${index}">

                            REMOVE

                        </button>

                    </div>

                </div>

            `
        ).join("");


    const total =
        cart.reduce(
            (sum,product) =>
                sum + product.price,
            0
        );


    if (cartTotal) {

        cartTotal.textContent =
            `$${total}`;

    }

}


updateCart();


/* ================= CLICK EVENTS ================= */

document.addEventListener(
    "click",
    function(event) {


        /* ADD CART */

        const addButton =
            event.target.closest(".add-cart");


        if (addButton) {

            const id =
                Number(addButton.dataset.id);

            addToCart(id);

        }


        /* REMOVE */

        const removeButton =
            event.target.closest(".remove-item");


        if (removeButton) {

            const index =
                Number(removeButton.dataset.index);

            removeFromCart(index);

        }


        /* WISHLIST */

        const wishlistButton =
            event.target.closest(".wishlist");


        if (wishlistButton) {

            const icon =
                wishlistButton.querySelector("i");

            icon.classList.toggle("fa-regular");

            icon.classList.toggle("fa-solid");

            updateWishlist();

        }

    }
);


/* ================= WISHLIST ================= */

function updateWishlist() {

    const count =
        document.querySelectorAll(
            ".wishlist .fa-solid"
        ).length;

    const counter =
        document.getElementById(
            "wishlistCount"
        );

    if (counter) {

        counter.textContent =
            count;

    }

}


/* ================= CART OPEN ================= */

const cartBtn =
    document.getElementById("cartBtn");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");


function openCart() {

    if (!cartSidebar) return;

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

}


function closeCartFunction() {

    if (!cartSidebar) return;

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

}


if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        openCart
    );

}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartFunction
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartFunction
    );

}


/* ================= DARK MODE ================= */

const themeBtn =
    document.getElementById("themeBtn");


let savedTheme =
    localStorage.getItem(
        "veloraDarkMode"
    );


function updateThemeIcon() {

    if (!themeBtn) return;

    const dark =
        document.body.classList.contains(
            "dark"
        );

    themeBtn.innerHTML =
        dark
        ?
        `<i class="fa-solid fa-sun"></i>`
        :
        `<i class="fa-solid fa-moon"></i>`;

}


if (savedTheme === "true") {

    document.body.classList.add("dark");

}


updateThemeIcon();


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

            const dark =
                document.body.classList.contains(
                    "dark"
                );

            localStorage.setItem(
                "veloraDarkMode",
                dark
            );

            updateThemeIcon();

        }
    );

}


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener(
        "click",
        () => {

            navbar.classList.toggle(
                "active"
            );

            menuBtn.innerHTML =
                navbar.classList.contains("active")
                ?
                `<i class="fa-solid fa-xmark"></i>`
                :
                `<i class="fa-solid fa-bars"></i>`;

        }
    );

}


/* ================= SEARCH ================= */

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        () => {

            searchBox.classList.add(
                "active"
            );

            searchInput.focus();

        }
    );

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        () => {

            searchBox.classList.remove(
                "active"
            );

            searchInput.value = "";

            searchResults.innerHTML = "";

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const value =
                searchInput.value
                .toLowerCase()
                .trim();


            if (!value) {

                searchResults.innerHTML = "";

                return;

            }


            const results =
                products.filter(
                    product =>
                        product.name
                            .toLowerCase()
                            .includes(value)
                        ||
                        product.category
                            .toLowerCase()
                            .includes(value)
                );


            if (results.length === 0) {

                searchResults.innerHTML =
                    "<p>No products found.</p>";

                return;

            }


            searchResults.innerHTML =
                results.map(
                    product => `

                    <div class="search-result">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                        <div>

                            <strong>
                                ${product.name}
                            </strong>

                            <p>
                                $${product.price}
                            </p>

                        </div>

                    </div>

                    `
                ).join("");

        }
    );

}


/* ================= FILTER ================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active-filter"
                    )
            );

            button.classList.add(
                "active-filter"
            );


            const filter =
                button.dataset.filter;


            const filtered =
                filter === "all"
                ?
                products.filter(
                    p => p.category === "Women"
                )
                :
                products.filter(
                    p =>
                        p.category === "Women" &&
                        p.type === filter
                );


            if (womenProducts) {

                womenProducts.innerHTML =
                    filtered
                    .map(productCard)
                    .join("");

            }

        }
    );

});


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Welcome to VELORA ✨"
            );

            newsletterForm.reset();

        }
    );

}


/* ================= CONTACT ================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Your message has been sent ✨"
            );

            contactForm.reset();

        }
    );

}


/* ================= CHECKOUT ================= */

const checkoutBtn =
    document.getElementById(
        "checkoutBtn"
    );


if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your bag is empty!"
                );

                return;

            }

            showToast(
                "Checkout coming soon 🚀"
            );

        }
    );

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}