document.addEventListener('DOMContentLoaded', () => {
  const loadAllPartials = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data.header;
        console.log('Header loaded');

        document.getElementById('content1').innerHTML = data.content1;
        console.log('Content1 loaded');

        document.getElementById('content2').innerHTML = data.content2;
        console.log('Content2 loaded');

        document.getElementById('content3').innerHTML = data.content3;
        console.log('Content3 loaded');

        document.getElementById('content4').innerHTML = data.content4;
        console.log('Content4 loaded');
        
        document.getElementById('footer').innerHTML = data.footer;
        console.log('Footer loaded');
      })
      .catch(error => console.error('Error fetching partials:', error));
  };

  // 只通过一次请求得到所有的模块
  loadAllPartials('http://localhost:3002/partials/all'); // 使用正确的服务器URL
});
