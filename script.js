// Ждем загрузки DOM структуры
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Проверяем, была ли сохранена темная тема ранее
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Обработчик клика по кнопке
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Сохраняем выбор пользователя в браузере
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});