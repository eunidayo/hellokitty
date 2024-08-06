
const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const modal = document.getElementById('myModal');
const kittyImage = document.getElementById('kittyImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeButton = document.getElementById('closeButton');

const items = [
  {
    image: '/hellokitty/image/main/sec02/kitty1.png',
    title: '행복과 긍정적인 에너지',
    text: '"오늘은 헬로키티가 전하는 긍정 에너지가 가득한 하루가 될 거예요! 작은 기쁨이 큰 행복으로 이어지길 바래요."'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty2.png',
    title: '운의 흐름과 조언',
    text: '"오늘 하루는 기회가 가득한 날이에요. 헬로키티의 응원과 함께 자신감을 가지고 도전해 보세요!"'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty3.png',
    title: '기분 좋게 시작하는 하루',
    text: '"헬로키티와 함께하는 오늘은 사랑과 기쁨이 넘치는 하루가 될 거예요. 웃음이 가득한 하루를 보내세요!"'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty4.png',
    title: '좋은 기운과 희망',
    text: '"오늘은 행운이 당신을 찾는 날이에요. 헬로키티의 미소와 함께 하루를 시작해 보세요!"'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty5.png',
    title: '용기와 인내',
    text: '"오늘은 헬로키티가 당신에게 용기와 인내를 주는 날이에요. 어떤 도전도 잘 해낼 수 있을 거예요!"'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty6.png',
    title: '사랑과 행복',
    text: '"오늘 하루, 헬로키티의 사랑과 행복이 당신과 함께할 거예요. 작은 행복이 큰 기쁨으로 이어지길 바래요!"'
  },
  {
    image: '/hellokitty/image/main/sec02/kitty7.png',
    title: '행운과 기회',
    text: '"헬로키티와 함께하는 오늘은 행운과 기회가 가득할 날이에요. 자신감을 가지고 좋은 일을 시작해 보세요!"'
  }
];

let isSpinning = false;

spinButton.addEventListener('click', () => {
  if (isSpinning) return; // 현재 회전 중이라면 버튼 클릭 무시

  isSpinning = true; // 회전 시작

  // 랜덤 회전 각도 계산 (0~360도)
  const randomDegree = Math.floor(Math.random() * 360) + 3600; // 최소 10바퀴 회전

  // 회전 애니메이션 적용
  wheel.style.transition = 'transform 4s ease-out'; // 애니메이션 설정
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // 회전이 완료된 후 결과를 표시하는 함수
  wheel.addEventListener('transitionend', function handleTransitionEnd() {
    wheel.removeEventListener('transitionend', handleTransitionEnd); // 이벤트 리스너 제거

    if (!isSpinning) return; // 애니메이션이 아직 진행 중인 경우만 실행

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    kittyImage.src = randomItem.image;
    modalTitle.textContent = randomItem.title;
    modalText.textContent = randomItem.text;

    modal.style.display = 'flex'; // 모달 표시

    isSpinning = false; // 회전 완료 상태로 변경
  }, { once: true }); // 한 번만 실행
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




