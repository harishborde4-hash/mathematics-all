const subjects = document.querySelectorAll('.subject');
const iframeContainer = document.querySelector('.iframe-container');
const iframe = document.getElementById('contentFrame');
const backBtn = document.getElementById('backBtn');

// Click on subject → open iframe
subjects.forEach(subject => {
  subject.addEventListener('click', () => {
    const url = subject.dataset.url;

    iframeContainer.classList.add('active');
    iframe.classList.remove('loaded');
    iframe.src = url;

    backBtn.style.display = 'block';
    iframe.onload = () => iframe.classList.add('loaded');
  });
});

// Back button → return to main sections
backBtn.addEventListener('click', () => {
  iframeContainer.classList.remove('active');
  iframe.src = '';
  iframe.classList.remove('loaded');
  backBtn.style.display = 'none';
});
