document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");
    const cartDropdown = document.getElementById("cart-dropdown"); // Added this line

    let itemCount = 0;
    let cartItems = [];

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            modalContent.innerHTML = card.innerHTML;
            modal.style.display = "block";
        });

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.1)";
            card.style.zIndex = "1";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.zIndex = "0";
        });

        const addButton = card.querySelector(".add-button"); // Changed this line
        if (addButton) {
            addButton.addEventListener("click", function () {
                // Get the image source from the card
                const imageSrc = card.querySelector("img").src;
                // Add the image to the cart
                addItemToCart(imageSrc);
            });
        }

        const buyButton = card.querySelector(".buy-button");
        if (buyButton) {
            buyButton.addEventListener("click", function () {
                openBuyModal();
                modalImage.classList.add("rotate-180");
                addItemToCart(); // You can customize this function based on your needs
            });
        }
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-180");
    });

    modalImage.addEventListener("click", function () {
        modalImage.classList.toggle("rotate-180");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImage.classList.remove("rotate-180");
        }
    });

    function openBuyModal() {
        var buyModal = document.getElementById('buyModal');
        buyModal.style.display = 'block';
    }

    function closeBuyModal() {
        var buyModal = document.getElementById('buyModal');
        buyModal.style.display = 'none';
    }

    function addItemToCart(imageSrc) {
        itemCount++;
        updateCartCount();
        // Add the image to the cart container
        addImageToCartContainer(imageSrc);
        showItemAddedMessage();
    }

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function addImageToCartContainer(imageSrc) {
        var cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        var cartImage = document.createElement('img');
        cartImage.src = imageSrc;
        cartItem.appendChild(cartImage);
        cartDropdown.appendChild(cartItem);
    }

    function showItemAddedMessage() {
        alert('Item added to cart!');
    }

    function buyViaWhatsApp() {
        alert('You selected WhatsApp as your buy option.');
        closeBuyModal();
    }

    function buyViaWebsite() {
        alert('You selected Website as your buy option.');
        closeBuyModal();
    }

    function buyViaOthers() {
        alert('You selected Others as your buy option.');
        closeBuyModal();
    }

    $(document).ready(function() {
        // Function to toggle classes based on screen size
        function toggleClasses() {
            var screenWidth = $(window).width();
    
            // Check if the screen width is less than or equal to 767px (small screens)
            if (screenWidth <= 767) {
                // Add or remove classes for small screens
                $("header").addClass("small-screen-header").removeClass("large-screen-header");
                $(".horizontal-menu").addClass("small-screen-menu").removeClass("large-screen-menu");
                $(".horizontal-menu li").addClass("small-screen-menu-item").removeClass("large-screen-menu-item");
            } else {
                // Add or remove classes for large screens
                $("header").addClass("large-screen-header").removeClass("small-screen-header");
                $(".horizontal-menu").addClass("large-screen-menu").removeClass("small-screen-menu");
                $(".horizontal-menu li").addClass("large-screen-menu-item").removeClass("small-screen-menu-item");
            }
        }
    
        // Initial toggle on page load
        toggleClasses();
    
        // Re-run toggleClasses on window resize
        $(window).resize(function() {
            toggleClasses();
        });
    });
    
});
