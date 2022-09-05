window.onload = () => {
    document.querySelectorAll('.card').forEach(a => {
        // data properties
        (a.dataset?.logo === 'full-size') && (a.querySelector('.title img').style.width = '150px');
        (a.dataset?.theme === "white") && (a.querySelector('.desc').style.color = '#fff');
        (a.dataset?.title) && (a.querySelector('.title').style.color = a.dataset.title);

        // click event
        a.addEventListener('click', () => window.location.replace(`/web/${a.dataset?.id || 'index'}.html`));
    });
};
