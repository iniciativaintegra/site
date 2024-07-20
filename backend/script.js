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

            document.addEventListener('DOMContentLoaded', (event) => {
                const prevButton = document.querySelector('.carousel-prev');
                const nextButton = document.querySelector('.carousel-next');
                const carouselInner = document.querySelector('.carousel-inner');
            
                let currentIndex = 0;
            
                function showArticle(index) {
                    const totalArticles = carouselInner.children.length;
                    const carouselWidth = carouselInner.getBoundingClientRect().width;
                    const articleWidth = carouselInner.children[0].getBoundingClientRect().width;
                    const offset = -index * articleWidth;
                    
                    if(index >= 0 && index < totalArticles){
                        carouselInner.style.transform = `translateX(${offset}px)`;
                        currentIndex = index;
                    }
                }
            
                prevButton.addEventListener('click', () => {
                    showArticle(currentIndex - 1);
                });
            
                nextButton.addEventListener('click', () => {
                    showArticle(currentIndex + 1);
                });
            });
            
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

            document.addEventListener('DOMContentLoaded', (event) => {
                const prevButton = document.querySelector('.carousel-prev');
                const nextButton = document.querySelector('.carousel-next');
                const carouselInner = document.querySelector('.carousel-inner');
            
                let currentIndex = 0;
            
                function showArticle(index) {
                    const totalArticles = carouselInner.children.length;
                    const carouselWidth = carouselInner.getBoundingClientRect().width;
                    const articleWidth = carouselInner.children[0].getBoundingClientRect().width;
                    const offset = -index * articleWidth;
                    
                    if(index >= 0 && index < totalArticles){
                        carouselInner.style.transform = `translateX(${offset}px)`;
                        currentIndex = index;
                    }
                }
            
                prevButton.addEventListener('click', () => {
                    showArticle(currentIndex - 1);
                });
            
                nextButton.addEventListener('click', () => {
                    showArticle(currentIndex + 1);
                });
            });
            