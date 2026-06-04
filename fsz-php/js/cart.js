// ─── Cart Module ───
(function() {
  const CART_KEY = 'fsz_cart';

  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch(e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
  }

  function makeKey(item) {
    return (item.catId || item.category || '') + '::' + (item.name || '');
  }

  window.Cart = {
    items: loadCart(),

    add(item) {
      const key = makeKey(item);
      const existing = this.items.find(i => makeKey(i) === key);
      // Try to get category image
      if (typeof CATEGORIES !== 'undefined' && item.catId && !item.image) {
        const cat = CATEGORIES.find(c => c.id === item.catId);
        if (cat) item.image = cat.image;
      }
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        this.items.push({ ...item, qty: 1, checked: true });
      }
      saveCart(this.items);
    },

    remove(item) {
      const key = makeKey(item);
      this.items = this.items.filter(i => makeKey(i) !== key);
      saveCart(this.items);
    },

    updateQty(item, qty) {
      const key = makeKey(item);
      const existing = this.items.find(i => makeKey(i) === key);
      if (existing) {
        if (qty <= 0) {
          this.remove(item);
          return 0;
        }
        existing.qty = qty;
        saveCart(this.items);
        return qty;
      }
      return 0;
    },

    getQty(item) {
      const key = makeKey(item);
      const existing = this.items.find(i => makeKey(i) === key);
      return existing ? (existing.qty || 1) : 0;
    },

    isInCart(item) {
      return this.getQty(item) > 0;
    },

    getCheckedItems() {
      return this.items.filter(i => i.checked !== false);
    },

    getTotal() {
      return this.getCheckedItems().reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
    },

    getCount() {
      return this.items.reduce((s, i) => s + (i.qty || 1), 0);
    },

    clear() {
      this.items = [];
      saveCart(this.items);
    },

    toggleChecked(item) {
      const key = makeKey(item);
      const existing = this.items.find(i => makeKey(i) === key);
      if (existing) {
        existing.checked = existing.checked === false ? true : false;
        saveCart(this.items);
      }
    }
  };

  function updateCartBadge() {
    const cart = loadCart();
    const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
    const badges = document.querySelectorAll('#cartBadge');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  window.updateCartBadge = updateCartBadge;

  document.addEventListener('DOMContentLoaded', updateCartBadge);
})();
