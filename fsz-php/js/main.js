// ─── Header Scroll ───
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ─── Mobile Menu ───
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ─── State ───
let activeId = null;

// ─── Render Category Cards ───
function renderCards() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;

  if (activeId) {
    const product = PRODUCT_DETAILS[activeId];
    if (!product) { activeId = null; renderCards(); return; }

    const cat = CATEGORIES.find(c => c.id === activeId);

    grid.innerHTML = `
      <div class="cat-detail fade-in">
        <div class="cat-detail-banner">
          <img src="${cat ? (cat.detailImage || cat.image) : ''}" alt="${product.title}">
          <button class="cat-detail-back" onclick="goBack()">
            ${ICONS_SVG['arrow-left']} Назад
          </button>
          <h2 class="cat-detail-title">${product.title}</h2>
        </div>
        <div class="cat-detail-body">
          <p class="cat-detail-desc">${product.desc}</p>
          <div class="price-header">
            ${ICONS_SVG['file-text']}
            <span>Прайс-лист</span>
          </div>
          <div class="price-list">
            ${product.items.map((item, idx) => {
              const cartItem = { catId: activeId, name: item.name, unit: item.unit, price: item.price, icon: item.icon };
              const inCart = typeof Cart !== 'undefined' && Cart.isInCart(cartItem);
              const qty = inCart ? Cart.getQty(cartItem) : 0;
              return `
              <div class="price-row slide-in" style="animation-delay: ${idx * 0.03}s">
                <div class="price-icon">
                  ${getPriceIcon(item.icon)}
                </div>
                <span class="price-name">${item.name}</span>
                <span class="price-unit">${item.unit}</span>
                <span class="price-value">${item.price === 0 ? '—' : item.price.toLocaleString('ru-RU') + ' ₽'}</span>
                <div class="price-cart-wrap" id="pc-${activeId}-${idx}">
                  ${inCart ? renderQtyControls(activeId, idx, qty) : renderAddButton(activeId, idx)}
                </div>
              </div>
            `;}).join('')}
          </div>
          <p class="price-note">Цены без НДС. Скидка 5% от 50 000 ₽, 10% от 100 000 ₽.</p>
          <a href="tel:+74951234567" class="btn-primary btn-full price-cta">
            ${ICONS_SVG['phone']} Уточнить цену
          </a>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = CATEGORIES.map((cat, idx) => `
    <button class="cat-card ${cat.cols === 2 ? 'col-span-2' : ''} fade-in" 
            style="animation-delay: ${idx * 0.03}s"
            onclick="openCard(${cat.id})">
      <span class="cat-card-title">${cat.title}</span>
      <div class="cat-card-image">
        <img src="${cat.image}" alt="${cat.title.replace(/\n/g, ' ')}">
      </div>
    </button>
  `).join('');
}

function openCard(id) {
  activeId = id;
  renderCards();
}

function goBack() {
  activeId = null;
  renderCards();
}

// ─── Cart Buttons ───
function renderAddButton(catId, idx) {
  return `<button class="price-add-btn" onclick="addToCartFromPrice(${catId}, ${idx})" title="Добавить в корзину">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    <span>Добавить</span>
  </button>`;
}

function renderQtyControls(catId, idx, qty) {
  return `<div class="price-qty-controls">
    <button class="price-qty-btn" onclick="changeCartQty(${catId}, ${idx}, -1)">−</button>
    <span class="price-qty-num">${qty}</span>
    <button class="price-qty-btn" onclick="changeCartQty(${catId}, ${idx}, 1)">+</button>
  </div>`;
}

function addToCartFromPrice(catId, idx) {
  const product = PRODUCT_DETAILS[catId];
  if (!product) return;
  const item = product.items[idx];
  if (!item) return;
  // Get category image
  let img = '';
  if (typeof CATEGORIES !== 'undefined') {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (cat) img = cat.image;
  }
  Cart.add({ catId: catId, name: item.name, unit: item.unit, price: item.price, icon: item.icon, image: img });
  const wrap = document.getElementById(`pc-${catId}-${idx}`);
  if (wrap) wrap.innerHTML = renderQtyControls(catId, idx, 1);
}

function changeCartQty(catId, idx, delta) {
  const product = PRODUCT_DETAILS[catId];
  if (!product) return;
  const item = product.items[idx];
  if (!item) return;
  const cartItem = { catId: catId, name: item.name, unit: item.unit, price: item.price, icon: item.icon };
  const currentQty = Cart.getQty(cartItem);
  const newQty = Cart.updateQty(cartItem, currentQty + delta);
  const wrap = document.getElementById(`pc-${catId}-${idx}`);
  if (wrap) {
    if (newQty <= 0) {
      wrap.innerHTML = renderAddButton(catId, idx);
    } else {
      wrap.innerHTML = renderQtyControls(catId, idx, newQty);
    }
  }
}

// ─── Render Calculators ───
function renderCalculators() {
  const grid = document.getElementById('calc-grid');
  if (!grid) return;

  grid.innerHTML = CALCULATORS.map(calc => `
    <a href="${calc.url || '#'}" class="calc-item">
      ${getCalcIcon(calc.icon)}
      <span>${calc.label}</span>
    </a>
  `).join('');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderCalculators();
});
