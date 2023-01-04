function revealStats() {
    console.log(b)
    for (let i = 0; i < 5; i++){
        var b = document.getElementById('bfill' + String(i))
        var a = 'fill' + String(i)
        console.log(b, a)
        b.classList.add(a)
    }
}