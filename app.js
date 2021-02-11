const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", stickyNav)
function stickyNav() {
    navbar.classList.toggle("active", scrollY > 0)
}

$(".scroll").on("click", Scroll)

function Scroll() {
    let target = this.dataset.target
    $(".nav-link").removeClass("active")
    $(this).addClass("active")
    $("html, body").animate({
      scrollTop: $(target).offset().top -80
    }, 10, "swing")
  
}

let items = []

$("#cari").on("keyup", searchingData)

function searchingData() {
    let query = this.value.toLowerCase()
    let search = items.filter(item => {
        return (item.name.toLowerCase().includes(query))
    })
    renderData(search)
}

async function getData() {
    let data = await fetch("data.json")
    let vouchers = await data.json()
    items = vouchers.data
    renderData(vouchers.data)
    
}

getData()

function renderData(data) {
    let templates = data.map(voucher => {
        return `
            <div class="col-4 col-lg-3">
                <div class="overlay">
                    <img src="${voucher.image}" class="image">
                    <div class="mid"><p>${voucher.name}</p></div>
                </div>
            </div>        
        `
    }).join('')
    $(".vouchers").html(templates)

}