import React from "react";

import './create-todo.style.scss';

const CreateTodo = () => {
    return (
        <div className="create-todo-container">
            <h2 className="title">CreateTodo</h2>
            <div></div>
            <textarea>
                Задача: Требуется сделать рерайт текста.
                Объем текста: 2500-3000 символов.
                Ключевые слова:
                «Купить товар» — употребить 2 раза, можно склонять;
                «Заказать товар» — употребить 2 раза, можно склонять.
                Требуемая уникальность: 100% по text.ru
                Исходник: в прикрепленном файле.
                Дополнительная информация:
                Текст должен быть разделен на абзацы, обязательны подзаголовки.
            </textarea>
            <div className="footer">
                <button>123</button>
                <button>123</button>
                <button>123</button>
            </div>
        </div>
    )
}

export default CreateTodo;