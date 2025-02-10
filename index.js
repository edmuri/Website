fetch('header.html')
                .then(response => response.text())
                .then(text=> document.getElementById('header').innerHTML = text);

fetch('home/photoPosts.html')
                .then(response => response.text())
                .then(text=> {
                    document.getElementById('photoPosts').innerHTML = text;

                    const script = document.createElement("script");
                    script.src = "home/photoPosts.js";
                    document.body.appendChild(script);
                });
