const imageUrls = [
    'pic/cs1.jpeg',
    'pic/cs2.jpeg',
    'pic/cs3.jpeg',
    'pic/cs4.jpeg',
    'pic/cs5.jpeg',
      // Add more image URLs as needed
    ];
    let currentIndex = 0;

    function changeImage() {
      const img = document.getElementById('img');
      img.src = imageUrls[currentIndex];
      currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds

		
    