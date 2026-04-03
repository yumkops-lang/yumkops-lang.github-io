const blurCircle = document.querySelector('.cursor-blur');
const card = document.querySelector('.gui-card');

document.addEventListener('mousemove', (e) => {
    // 1. Двигаем круг размытия
    if (blurCircle) {
        blurCircle.style.left = e.clientX + 'px';
        blurCircle.style.top = e.clientY + 'px';
    }

    // 2. Поворачиваем карточку
    if (card) {
        const xAxis = (window.innerWidth / 2 - e.clientX) / 20;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 20;
        
        // Проверяем, наведен ли курсор для эффекта увеличения
        const isHovered = card.matches(':hover');
        const scale = isHovered ? 1.05 : 1;
        
        card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) scale(${scale})`;
    }
});

// Сброс при уходе мыши со страницы
document.addEventListener('mouseleave', () => {
    if (card) card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
});
