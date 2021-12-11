export function startLoader() {
    document.getElementById('loader').style.display= 'block';
    document.getElementById('table').style.display = 'none';
};

export function stopLoader() {
    document.getElementById('loader').style.display= 'none';
    document.getElementById('table').style.display = 'block';
}