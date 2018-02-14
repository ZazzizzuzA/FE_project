export default {
    render: function(data) {
        var body = document.getElementsByTagName("body")[0];
        data.forEach(function(el) {
            body.appendChild(el);
        });
        console.log(data);
    }
};