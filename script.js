
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Image list (replace with your real image URLs)
  const images = [
    "https://wencal.vercel.app/pictures/1.jpg",
    "https://wencal.vercel.app/pictures/2.jpg",
    "https://wencal.vercel.app/pictures/3.jpg",
    "https://wencal.vercel.app/pictures/4.jpg",
    "https://wencal.vercel.app/pictures/5.jpg",
    "https://wencal.vercel.app/pictures/6.jpg"

  ];

  let current = 0;
  const galleryModal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");

  document.getElementById("openGallery").onclick = () => {
    galleryModal.classList.remove("hidden");
    galleryImage.src = images[current];
  };

  document.getElementById("closeGallery").onclick = () => {
    galleryModal.classList.add("hidden");
  };

  document.getElementById("prevImage").onclick = () => {
    current = (current - 1 + images.length) % images.length;
    galleryImage.src = images[current];
  };

  document.getElementById("nextImage").onclick = () => {
    current = (current + 1) % images.length;
    galleryImage.src = images[current];
  };

        

        

        
        
