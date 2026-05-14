const menuData = {
    cafes: [
        { nome: "Expresso Italiano", desc: "Grãos selecionados com torra média.", preco: "R$ 7,00", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=500" },
        { nome: "Cappuccino Cremoso", desc: "Equilíbrio perfeito entre café, leite e espuma.", preco: "R$ 12,50", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500" }
    ],
    especial: [
        { nome: "Avelã Sky", desc: "Café gelado com xarope de avelã e chantilly.", preco: "R$ 18,90", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500" }
    ],
    bebidas: [
        { nome: "Soda Italiana Morango", desc: "Refrescante com água gaseificada e xarope.", preco: "R$ 11,00", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500" }
    ],
    doces: [
        { nome: "Slice de Chocolate", desc: "Bolo artesanal com 70% cacau.", preco: "R$ 15,00", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500" }
    ],
    salgados: [
        { nome: "Croissant de Presunto", desc: "Massa folhada amanteigada francesa.", preco: "R$ 14,00", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500" }
    ]
};

const labels = {
    cafes: "Cafés",
    especial: "Especial da Casa",
    bebidas: "Bebidas",
    doces: "Doces",
    salgados: "Salgados"
};

function renderMenu() {
    const container = document.getElementById('menu-container');
    
    for (const key in menuData) {
        const section = document.createElement('section');
        section.id = key;
        section.className = 'category-section';

        section.innerHTML = `
            <h2 class="category-title">${labels[key]}</h2>
            <div class="products-grid">
                ${menuData[key].map(item => `
                    <div class="product-card">
                        <img src="${item.img}" alt="${item.nome}" class="product-image">
                        <div class="product-info">
                            <h3>${item.nome}</h3>
                            <p>${item.desc}</p>
                            <span class="price">${item.preco}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(section);
    }
}

// Inicializa o cardápio ao carregar a página
document.addEventListener('DOMContentLoaded', renderMenu);