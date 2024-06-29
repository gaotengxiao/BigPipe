document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const showModalBtn = document.getElementById('showModalBtn');
    const closeModalBtn = document.querySelector('.modal .close');
    const toggleImagesBtn = document.getElementById('toggleImagesBtn');
    const imageList = document.querySelector('.image-list');
    const imageSelector = document.getElementById('imageSelector');
  
    showModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    toggleImagesBtn.addEventListener('click', () => {
      if (imageList.style.display === 'none') {
        imageList.style.display = 'flex';
      } else {
        imageList.style.display = 'none';
      }
    });
  
    imageSelector.addEventListener('change', (event) => {
      const selectedImage = event.target.value;
      const imgElement = document.createElement('img');
      imgElement.src = `images/${selectedImage}`;
      imgElement.alt = selectedImage;
      imgElement.style.width = '300px';
      imgElement.style.height = '300px';
      document.body.appendChild(imgElement);
    });
  });
  