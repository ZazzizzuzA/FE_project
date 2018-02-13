export default {
    // First variation

    // data: [
    //     { tag: "div", body: "Block 1", class: "block__small" },
    //     { tag: "div", body: "Block 2", class: "block__small"},
    //     { tag: "div", body: "Block 3", class: "block__small"},
    //     { tag: "div", body: "Block 4", class: "block__small" },
    //     { tag: "div", body: "Block 5", class: "block__small" },
    //     { tag: "div", body: "Block 6", class: "block__small" },
    //     { tag: "div", body: "Block 7", class: "block__small"},
    //     { tag: "div", body: "Block 8", class: "block__small"},
    //     { tag: "div", body: "Block 9", class: "block__small"},
    //     { tag: "div", body: "Block 10", class: "block__long" },
    //     { tag: "div", body: "Block 11", class: "block__long" },
    // ]

    // Second varition
    // data: [
    //         { tag: "div", body: "<div><div>Block 1</div><div>Block 2</div><div>Block 3</div></div><div><div>Block 4</div><div>Block 5</div><div>Block 6</div></div><div><div>Block 7</div><div>Block 8</div><div>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit</div></div>", class: "block__small-flex" },
    //         { tag: "div", body: "<div>Block 10</div><div>Block 11</div>", class: "block__long-flex" },

    //     ]
        // Третий вариант, который я хочу использовать

    data: [{
            tag: "div",
            body: [
                { tag: "div", body: "Block 1", class: "block__item" },
                { tag: "div", body: "Block 2", class: "block__item" },
                { tag: "div", body: "Block 3", class: "block__item" },
                { tag: "div", body: "Block 4", class: "block__item" },
                { tag: "div", body: "Block 5", class: "block__item" },
                { tag: "div", body: "Block 6", class: "block__item" },
                { tag: "div", body: "Block 7", class: "block__item" },
                { tag: "div", body: "Block 8", class: "block__item" },
                { tag: "div", body: "Block 9", class: "block__item" },
            ],
            class: "block__small-flex"
        },
        {
            tag: "div",
            body: [
                { tag: "div", body: "Widther block 1", class: "block2__item" },
                { tag: "div", body: "Widther block 2", class: "block2__item" },
            ],
            class: "block__long-flex"
        }
    ]
}