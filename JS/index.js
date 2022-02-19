
document.getElementById('input-field').addEventListener('keyup',
    function (event) {
        const num = event.target.value;
        const deletee = document.getElementById('delete-btn');
        if (num == 'delete') {
            deletee.removeAttribute('disabled')
        } else if (num != 'delete') {
            const deletee = document.getElementById('delete-btn');
            deletee.setAttribute('disabled', true)
        }
    });

document.getElementById('delete-btn').addEventListener('click', function () {
    const display = document.getElementById('head');
    display.style.display = "none";
});