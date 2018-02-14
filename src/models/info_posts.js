export default {
    // First variation

    data: [
        { tag: "div", body: "Все примеры, которые мы приводили выше, были построены с учетом однострочного (одностолбцового) расположения блоков. Надо сказать, что по умолчанию flex-контейнер всегда будет располагать блоки внутри себя в одну линию. Однако, спецификацией также поддерживается многострочный режим. За многострочность внутри flex-контейнера отвечает CSS свойство flex-wrap.", class: "block__small" },
        { tag: "div", body: "Block 2", class: "block__small" },
        { tag: "div", body: "Block 3", class: "block__small" },
        { tag: "div", body: "Block 4", class: "block__small" },
        { tag: "div", body: "Я думаю, что flexbox, конечно же, не вытеснит все остальные способы верстки, но, безусловно, в ближайшее время займет достойную нишу при решении огромного количества задач. И уж точно, пробовать работать с ним нужно уже сейчас. Одна из следующих статей будет посвящена конкретным примерам работы с flex-версткой. Подписывайтесь на новости ;)", class: "block__small" },
        { tag: "div", body: "Block 6", class: "block__small" },
        { tag: "div", body: "Block 7", class: "block__small" },
        { tag: "div", body: "Block 8", class: "block__small" },
        { tag: "div", body: "Block 9", class: "block__small" },
        { tag: "div", body: "Задает изначальный размер по главной оси для flex-блока до того, как к нему будут применены преобразования, основанные на других flex-факторах. Может быть задан в любых единицах измерения длинны (px, em, %, …) или auto(по умолчанию). Если задан как auto – за основу берутся размеры блока (width, height), которые, в свою очередь, могут зависеть от размера контента, если не указанны явно.", class: "block__long" },
        { tag: "div", body: "Block 11", class: "block__long" },
    ]

    // Second varition
    // data: [
    //         { tag: "div", body: "<div><div>Block 1</div><div>Block 2</div><div>Block 3</div></div><div><div>Block 4</div><div>Block 5</div><div>Block 6</div></div><div><div>Block 7</div><div>Block 8</div><div>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit</div></div>", class: "block__small-flex" },
    //         { tag: "div", body: "<div>Block 10</div><div>Block 11</div>", class: "block__long-flex" },

    //     ]
    // // Третий вариант, который я хочу использовать

    // data: [{
    //         tag: "div",
    //         body: [
    //             { tag: "div", body: "Block 1", class: "block__item" },
    //             { tag: "div", body: "Block 2", class: "block__item" },
    //             { tag: "div", body: "Block 3", class: "block__item" },
    //             { tag: "div", body: "Block 4", class: "block__item" },
    //             { tag: "div", body: "Block 5", class: "block__item" },
    //             { tag: "div", body: "Block 6", class: "block__item" },
    //             { tag: "div", body: "Block 7", class: "block__item" },
    //             { tag: "div", body: "Block 8", class: "block__item" },
    //             { tag: "div", body: "Block 9", class: "block__item" },
    //         ],
    //         class: "block__small-flex",
    //         id: "first",
    //     },
    //     {
    //         tag: "div",
    //         body: [
    //             { tag: "div", body: "Widther block 1", class: "block2__item" },
    //             { tag: "div", body: "Widther block 2", class: "block2__item" },
    //         ],
    //         class: "block__long-flex",
    //         id: "second",
    //     }
    // ]
}