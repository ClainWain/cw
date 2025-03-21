// Функция для добавления комментария в список
function addComment(name, comment) {
    const commentsList = document.getElementById('comments-list');
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;
    commentsList.appendChild(commentElement);
}

// Отправка формы
document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Добавляем комментарий в список
    addComment(name, comment);

    // Очищаем форму
    this.reset();
});