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





function calculateCalories() {
  const weight = parseFloat(document.getElementById('weight').value);
  const intensity = parseInt(document.getElementById('intensity').value);
  const duration = parseFloat(document.getElementById('duration').value);

  if (isNaN(weight) || isNaN(intensity) || isNaN(duration) || weight <= 0 || intensity < 1 || intensity > 10 || duration <= 0) {
    alert('모든 필드를 올바르게 입력해 주세요.');
    return;
  }

  // 칼로리 계산: 대략적인 칼로리 소모 계산
  const MET = 6 + (intensity - 1); // MET (Metabolic Equivalent of Task) 값
  const caloriesPerMinute = (MET * 3.5 * weight) / 200;
  const caloriesPerSecond = caloriesPerMinute / 60;
  const totalCalories = caloriesPerSecond * duration;

  document.getElementById('result').textContent = `데드리프트 1회당 소모된 칼로리는 약 ${totalCalories.toFixed(2)} 칼로리입니다.`;
}