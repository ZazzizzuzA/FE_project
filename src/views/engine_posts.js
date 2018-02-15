export default {
    render: function(data) {
        var body = document.getElementsByClassName("block__main_content")[0];
        data.forEach(function(el) {
            body.appendChild(el);

        });
    }
};