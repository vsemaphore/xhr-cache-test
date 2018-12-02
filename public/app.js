(function(){
    function fetchApi() {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.responseText);

                console.log('API response', response);
            } else {
                console.error('ERROR',xhr.responseText);
            }

        };

        xhr.open('GET', '/api');
        xhr.send();

    }

    setInterval(fetchApi, 5000);
    fetchApi();
})();