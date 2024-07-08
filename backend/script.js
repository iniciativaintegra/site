 function toggleMenu() {
                const menuIcon = document.querySelector('.menu-icon');
                const mobileMenu = document.getElementById('mobileMenu');
                const overlay = document.getElementById('overlay');
                const body = document.getElementById('body');
                menuIcon.classList.toggle('open');
                mobileMenu.classList.toggle('open');
                overlay.classList.toggle('open');
                body.classList.toggle('open');
            }

            document.addEventListener("DOMContentLoaded", function () {
                const carouselInner = document.querySelector(".carousel-inner");
                const prevBtn = document.querySelector(".carousel-prev");
                const nextBtn = document.querySelector(".carousel-next");
                const articles = document.querySelectorAll(".artigo");
                const articlesPerPage = 3;
                let currentIndex = 0;
            
                function goToSlide(index) {
                    currentIndex = index;
                    if (currentIndex < 1) {
                        currentIndex = 0;
                    } else if (currentIndex > articles.length - articlesPerPage) {
                        currentIndex = articles.length - articlesPerPage;
                    }
                    const translateX = -currentIndex * (100 / articlesPerPage);
                    carouselInner.style.transform = `translateX(${translateX}%)`;
                }
            
                prevBtn.addEventListener("click", function () {
                    goToSlide(currentIndex - articlesPerPage);
                });
            
                nextBtn.addEventListener("click", function () {
                    goToSlide(currentIndex + articlesPerPage);
                });
            
                // Inicialização do carrossel
                goToSlide(0);
            });