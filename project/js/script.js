/* =========================================================
   TELAGA MADU PLAYSTATION
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   AMBIL SEMUA HALAMAN
========================================================= */

const pages = document.querySelectorAll(".page");


/* =========================================================
   SEMBUNYIKAN SEMUA HALAMAN
========================================================= */

function hidePages() {

    pages.forEach(function(page) {

        page.classList.remove("active");

    });

}


/* =========================================================
   TAMPILKAN HALAMAN
========================================================= */

function showPage(pageId) {

    hidePages();

    const page = document.getElementById(pageId);

    if (!page) {
        console.error(
            "Halaman tidak ditemukan:",
            pageId
        );

        return;
    }

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   LIGHTBOX FOTO
========================================================= */

function openPhoto(element) {

    const image =
        element.querySelector("img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");


    if (!image) {
        return;
    }


    if (!lightbox || !lightboxImage) {
        return;
    }


    /* Masukkan gambar ke lightbox */

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;


    /* Tampilkan lightbox */

    lightbox.classList.add("show");


    /* Kunci scroll halaman */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   TUTUP LIGHTBOX
========================================================= */

function closePhoto() {

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");


    if (!lightbox) {
        return;
    }


    lightbox.classList.remove("show");


    /* Kembalikan scroll */

    document.body.style.overflow =
        "";


    /* Bersihkan gambar */

    if (lightboxImage) {

        setTimeout(function() {

            lightboxImage.src = "";
            lightboxImage.alt = "";

        }, 200);

    }

}


/* =========================================================
   KLIK DI LUAR GAMBAR = TUTUP LIGHTBOX
========================================================= */

const lightbox =
    document.getElementById("lightbox");


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function(event) {

            /*
             * Jika yang diklik adalah background,
             * tutup lightbox.
             */

            if (event.target === lightbox) {

                closePhoto();

            }

        }
    );

}


/* =========================================================
   TOMBOL ESCAPE = TUTUP LIGHTBOX
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);


/* =========================================================
   BLOKIR KLIK KANAN PADA FOTO
   OPSIONAL
========================================================= */

/*
document.addEventListener(
    "contextmenu",
    function(event) {

        if (
            event.target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);
*/


/* =========================================================
   ANIMASI SAAT HALAMAN DIBUKA
========================================================= */

window.addEventListener(
    "load",
    function() {

        const activePage =
            document.querySelector(".page.active");


        if (activePage) {

            activePage.classList.remove("active");


            setTimeout(function() {

                activePage.classList.add("active");

            }, 50);

        }

    }
);