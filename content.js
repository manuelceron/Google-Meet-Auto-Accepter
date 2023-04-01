setInterval(function () {
    for (let span of document.getElementsByTagName("span")) {
        if (span.innerHTML === "Ver todos") {
            span.click();
        }
        if (span.innerHTML === "Permirir") {
            span.click();
        }
        if (span.innerHTML === "Admitir") {
            span.click();
        }
        if (span.innerHTML === "Admitir a todos") {
            span.click();
        }
        if (span.innerHTML === "Ver todos") {
            span.click();
        }
        if (span.innerHTML === "Permirir a todos") {
            span.click();
        }
    }
}, 2000);
