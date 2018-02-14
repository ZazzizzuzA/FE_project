export default {
    render: function(data) {
        var body = document.getElementById("content");
        data.forEach(function(el) {
            body.appendChild(el);

        });
    }
};