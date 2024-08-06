// script.js
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('draggableImage');
  let offsetX = 0, offsetY = 0, isDragging = false;

  image.addEventListener('mousedown', (e) => {
    isDragging = true;
    // 이미지의 현재 위치와 마우스의 상대 위치 계산
    const rect = image.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});

