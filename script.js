// ========================================
// SNAP GOLD
// ========================================


// WhatsApp Number
const whatsappNumber = "919381443855";


// Jewellery Images
const categories = {

    earrings: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1617038260897-41a0c9a1d9c8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80"
    ],

    rings: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512163143273-bde0e3cc7408?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598560917807-1bae44bdcbe7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
    ],

    chains: [
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
    ],

    bangles: [
        "https://images.unsplash.com/photo-1617038260897-41a0c9a1d9c8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    ],

    necklaces: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
    ]

};


// ========================================
// SHOW CATEGORY
// ========================================

function showCategory(category) {

    const products =
        document.getElementById("products");

    const title =
        document.getElementById("categoryTitle");


    title.innerText =
        category.charAt(0).toUpperCase()
        + category.slice(1);


    products.innerHTML = "";


    categories[category].forEach(
        (image) => {

            const card =
                document.createElement("div");

            card.className = "product";


            card.innerHTML = `

                <img
                    src="${image}"
                    alt="Snap Gold ${category}"
                >

                <button
                    class="info-btn"
                    onclick="getMoreInfo('${category}', '${image}')"
                >
                    💬 Get More Info
                </button>

            `;


            products.appendChild(card);

        }
    );

}


// ========================================
// WHATSAPP ENQUIRY
// ========================================

function getMoreInfo(category, image) {

    const message =
        `Hi, I am interested in this ${category} design from Snap Gold. Can I get more information?\n\nDesign Image: ${image}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );
}


// ========================================
// FOOTER WHATSAPP
// ========================================

function openWhatsApp() {

    const message =
        "Hi Snap Gold, I would like to know more about your jewellery designs.";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );
}


// ========================================
// SCROLL TO COLLECTION
// ========================================

function scrollToCollection() {

    document
        .getElementById("collection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ========================================
// DEFAULT CATEGORY
// ========================================

showCategory("earrings");