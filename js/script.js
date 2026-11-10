(function () {
  'use strict';

  /* =========================================================
     DATA  — prices, sizes and photos are placeholders.
     Replace PRODUCTS / BRANDS / GALLERY with real content.
     ========================================================= */

  const PRODUCTS = [
    // ---- Bricks (made on site) ----
    {
      id: 'brick-stock', category: 'bricks', brand: 'Bing Building', unitType: 'set1000',
      name: 'Cement Stock Brick', price: 1850,
      size: '222 × 106 × 73mm (placeholder — confirm exact size)',
      typicalUse: 'General walling, boundary walls, non-structural work',
      delivery: 'Delivered by the load, or collect at the yard',
      desc: 'Our standard cement stock brick, manufactured on site here in Radium. Reliable and affordable for everyday building.',
      photoLabel: 'Cement Stock Brick'
    },
    {
      id: 'brick-maxi', category: 'bricks', brand: 'Bing Building', unitType: 'set1000',
      name: 'Cement Maxi Brick', price: 2650,
      size: '290 × 140 × 90mm (placeholder — confirm exact size)',
      typicalUse: 'Faster wall-building where fewer, larger units save mortar and labour',
      delivery: 'Delivered by the load, or collect at the yard',
      desc: 'A larger-format cement brick that speeds up construction while keeping costs down.',
      photoLabel: 'Cement Maxi Brick'
    },
    {
      id: 'brick-block', category: 'bricks', brand: 'Bing Building', unitType: 'set1000',
      name: 'Cement Block', price: 3950,
      size: '390 × 190 × 140mm (placeholder — confirm exact size)',
      typicalUse: 'Load-bearing walls, retaining walls, foundations',
      delivery: 'Delivered by the load, or collect at the yard',
      desc: 'Solid cement block for structural and retaining work, manufactured on site.',
      photoLabel: 'Cement Block'
    },
    {
      id: 'brick-face', category: 'bricks', brand: 'Distributed range', unitType: 'set1000',
      name: 'Face & Semi-face Brick', price: 4200,
      size: 'Various sizes — distributed range, ask for current stock',
      typicalUse: 'Decorative exterior walls, feature walls, boundary walls',
      delivery: 'Delivered by the load, or collect at the yard',
      desc: 'A distributed range of face and semi-face bricks for projects that need a finished, decorative look.',
      photoLabel: 'Face & Semi-face Brick'
    },

    // ---- Sand & stone ----
    { id: 'sand-crushed', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'Crushed sand', price: 320, typicalUse: 'Bedding for pipes & paving, backfill', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'Crushed sand for bedding and backfill applications.', photoLabel: 'Crushed sand' },
    { id: 'sand-river', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'River sand', price: 350, typicalUse: 'Plaster and brickwork mortar', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'Washed river sand suitable for plaster and brickwork mixes.', photoLabel: 'River sand' },
    { id: 'sand-building', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'Building sand', price: 300, typicalUse: 'General building work, foundations', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'All-purpose building sand for general construction.', photoLabel: 'Building sand' },
    { id: 'sand-plastering', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'Plastering sand', price: 360, typicalUse: 'Fine plaster finishes', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'Fine-graded sand for smooth plaster finishes.', photoLabel: 'Plastering sand' },
    { id: 'sand-filling', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'Filling sand', price: 220, typicalUse: 'Site fill & levelling', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'Economical sand for filling and levelling sites.', photoLabel: 'Filling sand' },
    { id: 'stone-13', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: '13mm stone', price: 420, typicalUse: 'Concrete mixes, driveways', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: '13mm crushed stone for concrete and driveway applications.', photoLabel: '13mm stone' },
    { id: 'stone-19', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: '19mm stone', price: 400, typicalUse: 'Concrete, drainage, soakaways', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: '19mm crushed stone for concrete and drainage applications.', photoLabel: '19mm stone' },
    { id: 'dumper-rock', category: 'sand', brand: 'Bing Building', unitType: 'volume', name: 'Dumper rock', price: 380, typicalUse: 'Foundations, road base, erosion control', size: 'Sold per m³', delivery: 'Delivered by the load, or collect at the yard', desc: 'Larger rock for foundations, road base and erosion control.', photoLabel: 'Dumper rock' },

    // ---- Cement, tools & hardware ----
    { id: 'cement-ppc-425', category: 'hardware', brand: 'PPC', unitType: 'bag', name: 'PPC Cement 42.5N', price: 125, size: '50kg bag', typicalUse: 'General concrete and mortar mixes', delivery: 'Delivered by the pallet, or collect at the yard', desc: 'High-strength PPC cement suitable for most structural and general building work.', photoLabel: 'PPC Cement 42.5N 50kg bag' },
    { id: 'cement-ppc-325', category: 'hardware', brand: 'PPC', unitType: 'bag', name: 'PPC Cement 32.5N', price: 110, size: '50kg bag', typicalUse: 'General building, plaster and screed mixes', delivery: 'Delivered by the pallet, or collect at the yard', desc: 'Everyday PPC cement for general building, plastering and screeding.', photoLabel: 'PPC Cement 32.5N 50kg bag' },
    { id: 'tool-ingco-grinder', category: 'hardware', brand: 'Ingco', unitType: 'item', name: 'Ingco Angle Grinder 115mm', price: 450, size: '115mm disc, placeholder spec', typicalUse: 'Cutting and grinding steel, tile and masonry', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Ingco power tool range stocked in-store — ask for the full catalogue.', photoLabel: 'Ingco Angle Grinder' },
    { id: 'tool-ingco-drill', category: 'hardware', brand: 'Ingco', unitType: 'item', name: 'Ingco Impact Drill', price: 650, size: 'Placeholder spec', typicalUse: 'Drilling into masonry, concrete and timber', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Ingco power tool range stocked in-store — ask for the full catalogue.', photoLabel: 'Ingco Impact Drill' },
    { id: 'tool-eureka-spade', category: 'hardware', brand: 'Eureka', unitType: 'item', name: 'Eureka Pointed Spade', price: 180, size: 'Standard handle, placeholder spec', typicalUse: 'Digging, mixing, general site work', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Eureka hand tool range stocked in-store — ask for the full catalogue.', photoLabel: 'Eureka Pointed Spade' },
    { id: 'tool-eureka-barrow', category: 'hardware', brand: 'Eureka', unitType: 'item', name: 'Eureka Steel Wheelbarrow 85L', price: 950, size: '85 litre pan, placeholder spec', typicalUse: 'Moving mortar, sand, bricks and rubble on site', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Eureka hand tool range stocked in-store — ask for the full catalogue.', photoLabel: 'Eureka Wheelbarrow' },
    { id: 'steel-rebar-y10', category: 'hardware', brand: 'Heunis Steel', unitType: 'item', name: 'Heunis Steel Y10 Rebar (12m)', price: 95, size: '12m length, placeholder spec', typicalUse: 'Reinforcing concrete slabs, beams and columns', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Heunis Steel reinforcing range stocked in-store — ask for the full catalogue.', photoLabel: 'Heunis Steel Rebar' },
    { id: 'steel-binding-wire', category: 'hardware', brand: 'Heunis Steel', unitType: 'item', name: 'Heunis Steel Binding Wire (coil)', price: 210, size: 'Coil, placeholder spec', typicalUse: 'Tying reinforcing steel', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Heunis Steel hardware range stocked in-store — ask for the full catalogue.', photoLabel: 'Binding Wire' },
    { id: 'steel-diamond-mesh', category: 'hardware', brand: 'Heunis Steel', unitType: 'item', name: 'Diamond Mesh (sheet)', price: 260, size: 'Sheet, placeholder spec', typicalUse: 'Reinforcing screeds and thin slabs', delivery: 'Collect at the yard, or delivered with your order', desc: 'Sample of the Heunis Steel hardware range stocked in-store — ask for the full catalogue.', photoLabel: 'Diamond Mesh' }
  ];

  const BRANDS = [
    { key: 'ppc', name: 'PPC', text: 'PPC cement is stocked in our Cement, tools & hardware range — look for PPC-branded bags.' },
    { key: 'ingco', name: 'Ingco', text: 'Ingco power tools are stocked in our Cement, tools & hardware range.' },
    { key: 'eureka', name: 'Eureka', text: 'Eureka hand tools and wheelbarrows are stocked in our Cement, tools & hardware range.' },
    { key: 'heunis', name: 'Heunis Steel', text: 'Heunis Steel reinforcing and hardware is stocked in our Cement, tools & hardware range.' }
  ];

  const GALLERY = [
    { label: 'Drone view of the Bing Building yard, Radium' },
    { label: 'Stacked cement bricks ready for delivery' },
    { label: 'Sand and stone bays' },
    { label: 'Delivery truck loading at the yard' }
  ];

  const DELIVERY_FEE_PLACEHOLDER = 450;
  const VAT_RATE = 0.15;

  /* =========================================================
     STATE
     ========================================================= */
  const cart = new Map();       // id -> qty
  const quoteItems = new Map(); // id -> qty
  let currentFilter = 'all';
  let activePanelProduct = null;
  let galleryIndex = 0;
  let deliveryInfo = { method: 'deliver', fee: DELIVERY_FEE_PLACEHOLDER, name: '', phone: '', email: '', address: '', date: '' };

  /* =========================================================
     HELPERS
     ========================================================= */
  function formatCurrency(n) {
    return 'R ' + n.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function findProduct(id) {
    return PRODUCTS.find(p => p.id === id);
  }

  function unitNoun(p) {
    switch (p.unitType) {
      case 'set1000': return '1,000';
      case 'volume': return 'm³';
      case 'bag': return 'bag';
      case 'item': return 'item';
      default: return '';
    }
  }

  function qtyLabel(p) {
    switch (p.unitType) {
      case 'set1000': return 'Quantity (sets of 1,000 bricks)';
      case 'volume': return 'Quantity (m³)';
      case 'bag': return 'Quantity (bags)';
      case 'item': return 'Quantity (items)';
      default: return 'Quantity';
    }
  }

  function qtyDisplay(p, qty) {
    switch (p.unitType) {
      case 'set1000': return `${qty} × 1,000 (${(qty * 1000).toLocaleString('en-ZA')} bricks)`;
      case 'volume': return `${qty} m³`;
      case 'bag': return `${qty} bag${qty === 1 ? '' : 's'}`;
      case 'item': return `${qty} item${qty === 1 ? '' : 's'}`;
      default: return String(qty);
    }
  }

  function priceSuffix(p) {
    switch (p.unitType) {
      case 'set1000': return 'per 1,000 bricks';
      case 'volume': return 'per m³';
      case 'bag': return 'per bag';
      case 'item': return 'per item';
      default: return '';
    }
  }

  function toast(message) {
    const el = document.getElementById('toast');
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { el.hidden = true; }, 2600);
  }

  function generateOrderNumber() {
    const n = Math.floor(100000 + Math.random() * 900000);
    return 'BB-' + n;
  }

  /* =========================================================
     RENDER: PRODUCT CARDS (bricks + hardware)
     ========================================================= */
  function productCardHTML(p) {
    return `
      <article class="product-card" data-id="${p.id}">
        <button type="button" class="product-card-photo photo-placeholder" data-label="${p.photoLabel}" data-open-product="${p.id}" aria-label="View details for ${p.name}"></button>
        <div class="product-card-body">
          <span class="product-card-brand">${p.brand}</span>
          <button type="button" class="product-card-name" data-open-product="${p.id}">${p.name}</button>
          <p class="product-card-desc">${p.desc}</p>
          <p class="product-card-price">${formatCurrency(p.price)} <small>${priceSuffix(p)}</small></p>
          <div class="product-card-actions">
            <button type="button" class="btn btn-lime" data-add-cart="${p.id}">Add to cart</button>
            <button type="button" class="btn btn-outline" data-add-quote="${p.id}">+ Quote</button>
          </div>
        </div>
      </article>`;
  }

  function renderBricks() {
    const grid = document.getElementById('bricksGrid');
    grid.innerHTML = PRODUCTS.filter(p => p.category === 'bricks').map(productCardHTML).join('');
  }

  function renderHardware() {
    const grid = document.getElementById('hardwareGrid');
    grid.innerHTML = PRODUCTS.filter(p => p.category === 'hardware').map(productCardHTML).join('');
  }

  function renderSandTable() {
    const body = document.getElementById('sandTableBody');
    body.innerHTML = PRODUCTS.filter(p => p.category === 'sand').map(p => `
      <tr data-id="${p.id}">
        <td><button type="button" class="table-name-btn" data-open-product="${p.id}">${p.name}</button></td>
        <td>${p.typicalUse}</td>
        <td>${formatCurrency(p.price)} <small>${priceSuffix(p)}</small></td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn btn-lime" data-add-cart="${p.id}">Add to cart</button>
            <button type="button" class="btn btn-outline" data-add-quote="${p.id}">+ Quote</button>
          </div>
        </td>
      </tr>`).join('');
  }

  function applyFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.filter === filter);
    });
    document.querySelectorAll('.product-group').forEach(group => {
      const g = group.dataset.group;
      group.hidden = !(filter === 'all' || filter === g);
    });
  }

  /* =========================================================
     RENDER: BRANDS
     ========================================================= */
  function renderBrands() {
    const grid = document.getElementById('brandsGrid');
    grid.innerHTML = BRANDS.map(b => `
      <button type="button" class="brand-tile" data-brand="${b.key}">${b.name}</button>
    `).join('') + `<div class="brand-tile is-placeholder">More brands coming soon</div>`;
  }

  function openBrandPanel(key) {
    const b = BRANDS.find(x => x.key === key);
    if (!b) return;
    document.getElementById('brandPanelTitle').textContent = b.name;
    document.getElementById('brandPanelText').textContent = b.text;
    document.getElementById('brandPanel').hidden = false;
  }
  function closeBrandPanel() { document.getElementById('brandPanel').hidden = true; }

  /* =========================================================
     RENDER: GALLERY + LIGHTBOX
     ========================================================= */
  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = GALLERY.map((g, i) => `
      <button type="button" class="gallery-item photo-placeholder is-dark" data-label="${g.label}" data-gallery-index="${i}" aria-label="View larger photo: ${g.label}"></button>
    `).join('');
  }

  function openLightbox(index) {
    galleryIndex = index;
    updateLightboxPhoto();
    document.getElementById('lightbox').hidden = false;
    document.getElementById('lightboxClose').focus();
  }
  function updateLightboxPhoto() {
    const g = GALLERY[galleryIndex];
    const photo = document.getElementById('lightboxPhoto');
    photo.setAttribute('data-label', g.label);
  }
  function closeLightbox() { document.getElementById('lightbox').hidden = true; }
  function nextPhoto() { galleryIndex = (galleryIndex + 1) % GALLERY.length; updateLightboxPhoto(); }
  function prevPhoto() { galleryIndex = (galleryIndex - 1 + GALLERY.length) % GALLERY.length; updateLightboxPhoto(); }

  /* =========================================================
     PRODUCT DETAIL PANEL
     ========================================================= */
  function openProductPanel(id) {
    const p = findProduct(id);
    if (!p) return;
    activePanelProduct = p;

    const categoryLabel = { bricks: 'Bricks', sand: 'Sand & stone', hardware: 'Cement, tools & hardware' }[p.category];
    document.getElementById('productPanelCategory').textContent = categoryLabel + ' / ' + p.brand;
    document.getElementById('productPanelTitle').textContent = p.name;
    document.getElementById('productPanelDesc').textContent = p.desc;
    document.getElementById('productPanelPrice').textContent = `${formatCurrency(p.price)} ${priceSuffix(p)}`;
    document.getElementById('productPanelSize').textContent = p.size;
    document.getElementById('productPanelUse').textContent = p.typicalUse;
    document.getElementById('productPanelDelivery').textContent = p.delivery;

    const photo = document.getElementById('productPanelPhoto');
    photo.setAttribute('data-label', p.photoLabel);

    const qtyLabelEl = document.getElementById('productPanelQtyLabel');
    qtyLabelEl.textContent = qtyLabel(p);
    const qtyInput = document.getElementById('productPanelQty');
    qtyInput.value = 1;
    qtyInput.min = 1;

    // switcher: other products in same category
    const switcher = document.getElementById('productPanelSwitcher');
    switcher.innerHTML = PRODUCTS.filter(x => x.category === p.category).map(x => `
      <button type="button" data-open-product="${x.id}" class="${x.id === p.id ? 'is-active' : ''}">${x.name}</button>
    `).join('');

    const panel = document.getElementById('productPanel');
    panel.hidden = false;
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeProductPanel() {
    document.getElementById('productPanel').hidden = true;
    activePanelProduct = null;
  }

  /* =========================================================
     CART
     ========================================================= */
  function addToCart(id, qty) {
    qty = qty || 1;
    const current = cart.get(id) || 0;
    cart.set(id, current + qty);
    updateCartCount();
    renderCart();
    const p = findProduct(id);
    toast(`${p.name} added to cart`);
  }

  function setCartQty(id, qty) {
    if (qty <= 0) { cart.delete(id); } else { cart.set(id, qty); }
    updateCartCount();
    renderCart();
  }

  function removeFromCart(id) {
    cart.delete(id);
    updateCartCount();
    renderCart();
  }

  function updateCartCount() {
    let total = 0;
    cart.forEach(qty => { total += qty; });
    document.getElementById('cartCount').textContent = total;
  }

  function cartSubtotal() {
    let sum = 0;
    cart.forEach((qty, id) => {
      const p = findProduct(id);
      if (p) sum += p.price * qty;
    });
    return sum;
  }

  function renderCart() {
    const empty = document.getElementById('cartEmpty');
    const wrap = document.getElementById('cartItemsWrap');
    const body = document.getElementById('cartItemsBody');

    if (cart.size === 0) {
      empty.hidden = false;
      wrap.hidden = true;
      return;
    }
    empty.hidden = true;
    wrap.hidden = false;

    const rows = [];
    cart.forEach((qty, id) => {
      const p = findProduct(id);
      if (!p) return;
      rows.push(`
        <tr data-id="${p.id}">
          <td>${p.name}<br><small>${priceSuffix(p)}</small></td>
          <td>
            <div class="cart-qty-control">
              <button type="button" data-cart-minus="${p.id}" aria-label="Decrease quantity of ${p.name}">−</button>
              <span>${qtyDisplay(p, qty)}</span>
              <button type="button" data-cart-plus="${p.id}" aria-label="Increase quantity of ${p.name}">+</button>
            </div>
          </td>
          <td>${formatCurrency(p.price * qty)}</td>
          <td><button type="button" class="remove-btn" data-cart-remove="${p.id}">Remove</button></td>
        </tr>`);
    });
    body.innerHTML = rows.join('');
    document.getElementById('cartSubtotal').textContent = formatCurrency(cartSubtotal());
  }

  /* =========================================================
     QUOTE ITEMS
     ========================================================= */
  function addToQuote(id, qty) {
    qty = qty || 1;
    quoteItems.set(id, qty);
    renderQuoteItems();
    const p = findProduct(id);
    toast(`${p.name} added to your quote request`);
  }

  function removeFromQuote(id) {
    quoteItems.delete(id);
    renderQuoteItems();
  }

  function renderQuoteItems() {
    const list = document.getElementById('quoteItemsList');
    const emptyMsg = document.getElementById('quoteItemsEmpty');
    if (quoteItems.size === 0) {
      list.innerHTML = '';
      emptyMsg.hidden = false;
      return;
    }
    emptyMsg.hidden = true;
    const rows = [];
    quoteItems.forEach((qty, id) => {
      const p = findProduct(id);
      if (!p) return;
      rows.push(`<li data-id="${p.id}"><span>${p.name} — ${qtyDisplay(p, qty)} (indicative ${formatCurrency(p.price)} ${priceSuffix(p)})</span><button type="button" data-quote-remove="${p.id}">Remove</button></li>`);
    });
    list.innerHTML = rows.join('');
  }

  /* =========================================================
     CHECKOUT STEPS
     ========================================================= */
  function showStep(n) {
    document.querySelectorAll('.checkout-step').forEach(panel => {
      panel.hidden = Number(panel.dataset.stepPanel) !== n;
    });
    document.querySelectorAll('#stepIndicator li').forEach(li => {
      const s = Number(li.dataset.step);
      li.classList.toggle('is-active', s === n);
      li.classList.toggle('is-done', s < n);
    });
    if (n === 3) updateOrderSummary();
  }

  function currentDeliveryFee() {
    return deliveryInfo.method === 'collect' ? 0 : DELIVERY_FEE_PLACEHOLDER;
  }

  function updateOrderSummary() {
    const subtotal = cartSubtotal();
    const fee = currentDeliveryFee();
    const vat = (subtotal + fee) * VAT_RATE;
    const total = subtotal + fee + vat;
    document.getElementById('summarySubtotal').textContent = formatCurrency(subtotal);
    document.getElementById('summaryDelivery').textContent = fee === 0 ? 'Free (collect at yard)' : formatCurrency(fee);
    document.getElementById('summaryVat').textContent = formatCurrency(vat);
    document.getElementById('summaryTotal').textContent = formatCurrency(total);
  }

  function toggleDeliveryFields() {
    const method = document.querySelector('input[name="deliveryMethod"]:checked').value;
    deliveryInfo.method = method;
    const addressField = document.getElementById('deliveryAddressField');
    const dateField = document.getElementById('deliveryDateField');
    const addressInput = document.getElementById('custAddress');
    if (method === 'collect') {
      addressField.hidden = true;
      dateField.hidden = true;
      addressInput.required = false;
    } else {
      addressField.hidden = false;
      dateField.hidden = false;
      addressInput.required = true;
    }
  }

  function togglePaymentDetail() {
    const method = document.querySelector('input[name="paymentMethod"]:checked').value;
    document.querySelectorAll('.payment-detail').forEach(d => {
      d.classList.toggle('is-visible', d.dataset.for === method);
    });
    return method;
  }

  function buildOrderMessage(paymentMethod, orderNumber) {
    let deliveryClause;
    if (deliveryInfo.method === 'collect') {
      deliveryClause = 'Your order will be ready for collection at 51 Blaauwboschkuil, R101, Radium, 0483.';
    } else {
      const dateText = deliveryInfo.date ? `on ${deliveryInfo.date}` : '— we\'ll confirm the delivery date with you';
      deliveryClause = `We'll deliver to ${deliveryInfo.address} ${dateText}.`;
    }

    let paymentClause;
    switch (paymentMethod) {
      case 'card':
        paymentClause = 'Your card payment is being processed (demo). We\'ll email confirmation once it has cleared.';
        break;
      case 'eft-instant':
        paymentClause = 'Your instant EFT payment is being processed (demo). We\'ll email confirmation once it has cleared.';
        break;
      case 'eft-manual':
        paymentClause = `Please make an EFT payment using ${orderNumber} as your reference. Your order will be prepared once payment reflects in our account.`;
        break;
      case 'credit':
        paymentClause = 'Your order has been logged against your Bing Building credit account. Our team will confirm it shortly.';
        break;
      default:
        paymentClause = '';
    }
    return `${paymentClause} ${deliveryClause}`;
  }

  /* =========================================================
     MODALS: brand, lightbox, policy — ESC to close
     ========================================================= */
  function openPolicyModal(title, bodyHTML) {
    document.getElementById('policyModalTitle').textContent = title;
    document.getElementById('policyModalBody').innerHTML = bodyHTML;
    document.getElementById('policyModal').hidden = false;
  }
  function closePolicyModal() { document.getElementById('policyModal').hidden = true; }

  const COOKIE_POLICY_HTML = `<p class="placeholder-note">Placeholder cookie policy — replace with Bing Building's final wording.</p>
    <p>This website uses essential cookies to operate the shopping cart and checkout. We do not currently use tracking or advertising cookies.</p>`;

  const POPIA_HTML = `<p class="placeholder-note">Placeholder POPIA notice — replace with Bing Building's final wording.</p>
    <p>Bing Building collects your name, phone number, email address and (where applicable) delivery address solely to process orders, deliveries and quote requests. We do not share your information with third parties except where required to deliver your order or process payment. You may request access to, correction of, or deletion of your information by contacting <a href="mailto:ingrid@bingbuilding.co.za">ingrid@bingbuilding.co.za</a>.</p>`;

  /* =========================================================
     EVENT WIRING
     ========================================================= */
  document.addEventListener('DOMContentLoaded', () => {
    renderBricks();
    renderSandTable();
    renderHardware();
    renderBrands();
    renderGallery();
    renderCart();
    renderQuoteItems();
    updateCartCount();
    document.getElementById('footerYear').textContent = new Date().getFullYear();

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('siteNav');
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // Delegated clicks: open product, add to cart, add to quote, brand tile, gallery
    document.body.addEventListener('click', (e) => {
      const openId = e.target.closest('[data-open-product]');
      if (openId) { openProductPanel(openId.dataset.openProduct); return; }

      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) { addToCart(addCartBtn.dataset.addCart, 1); return; }

      const addQuoteBtn = e.target.closest('[data-add-quote]');
      if (addQuoteBtn) { addToQuote(addQuoteBtn.dataset.addQuote, 1); return; }

      const brandTile = e.target.closest('[data-brand]');
      if (brandTile) { openBrandPanel(brandTile.dataset.brand); return; }

      const galleryItem = e.target.closest('[data-gallery-index]');
      if (galleryItem) { openLightbox(Number(galleryItem.dataset.galleryIndex)); return; }

      const cartPlus = e.target.closest('[data-cart-plus]');
      if (cartPlus) { const id = cartPlus.dataset.cartPlus; setCartQty(id, (cart.get(id) || 0) + 1); return; }

      const cartMinus = e.target.closest('[data-cart-minus]');
      if (cartMinus) { const id = cartMinus.dataset.cartMinus; setCartQty(id, (cart.get(id) || 0) - 1); return; }

      const cartRemove = e.target.closest('[data-cart-remove]');
      if (cartRemove) { removeFromCart(cartRemove.dataset.cartRemove); return; }

      const quoteRemove = e.target.closest('[data-quote-remove]');
      if (quoteRemove) { removeFromQuote(quoteRemove.dataset.quoteRemove); return; }
    });

    // Product panel close
    document.getElementById('productPanelClose').addEventListener('click', closeProductPanel);

    // Product panel quantity picker
    document.getElementById('productPanelQtyMinus').addEventListener('click', () => {
      const input = document.getElementById('productPanelQty');
      input.value = Math.max(1, Number(input.value) - 1);
    });
    document.getElementById('productPanelQtyPlus').addEventListener('click', () => {
      const input = document.getElementById('productPanelQty');
      input.value = Number(input.value) + 1;
    });

    // Product panel actions
    document.getElementById('productPanelAddCart').addEventListener('click', () => {
      if (!activePanelProduct) return;
      const qty = Math.max(1, Number(document.getElementById('productPanelQty').value) || 1);
      addToCart(activePanelProduct.id, qty);
    });
    document.getElementById('productPanelQuote').addEventListener('click', () => {
      if (!activePanelProduct) return;
      const qty = Math.max(1, Number(document.getElementById('productPanelQty').value) || 1);
      addToQuote(activePanelProduct.id, qty);
    });

    // Brand panel close
    document.getElementById('brandPanelClose').addEventListener('click', closeBrandPanel);
    document.getElementById('brandPanel').addEventListener('click', (e) => {
      if (e.target.id === 'brandPanel') closeBrandPanel();
    });

    // Lightbox controls
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext').addEventListener('click', nextPhoto);
    document.getElementById('lightboxPrev').addEventListener('click', prevPhoto);
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeBrandPanel();
        closePolicyModal();
      }
      if (!document.getElementById('lightbox').hidden) {
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    });

    // Checkout: go to delivery
    document.getElementById('goToDelivery').addEventListener('click', () => showStep(2));
    document.getElementById('backToCart').addEventListener('click', () => showStep(1));
    document.getElementById('backToDelivery').addEventListener('click', () => showStep(2));

    // Delivery method radios
    document.querySelectorAll('input[name="deliveryMethod"]').forEach(r => {
      r.addEventListener('change', toggleDeliveryFields);
    });
    toggleDeliveryFields();

    // Payment method radios
    document.querySelectorAll('input[name="paymentMethod"]').forEach(r => {
      r.addEventListener('change', togglePaymentDetail);
    });
    togglePaymentDetail();

    // Delivery form submit
    document.getElementById('deliveryForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.reportValidity()) return;
      deliveryInfo.name = document.getElementById('custName').value.trim();
      deliveryInfo.phone = document.getElementById('custPhone').value.trim();
      deliveryInfo.email = document.getElementById('custEmail').value.trim();
      deliveryInfo.address = document.getElementById('custAddress').value.trim();
      deliveryInfo.date = document.getElementById('custDate').value;
      deliveryInfo.fee = currentDeliveryFee();
      showStep(3);
    });

    // Payment form submit
    document.getElementById('paymentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.reportValidity()) return;
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
      const orderNumber = generateOrderNumber();
      document.getElementById('orderNumber').textContent = orderNumber;
      document.getElementById('orderMessage').textContent = buildOrderMessage(paymentMethod, orderNumber);
      showStep(4);
      cart.clear();
      updateCartCount();
      renderCart();
    });

    // Quote form submit
    document.getElementById('quoteForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.reportValidity()) return;
      document.getElementById('quoteSuccess').hidden = false;
      form.reset();
      quoteItems.clear();
      renderQuoteItems();
      toggleDeliveryFields();
    });

    // Footer: cookie / POPIA / facebook
    document.getElementById('cookieLink').addEventListener('click', () => openPolicyModal('Cookie policy', COOKIE_POLICY_HTML));
    document.getElementById('popiaLink').addEventListener('click', () => openPolicyModal('POPIA information', POPIA_HTML));
    document.getElementById('policyModalClose').addEventListener('click', closePolicyModal);
    document.getElementById('policyModal').addEventListener('click', (e) => {
      if (e.target.id === 'policyModal') closePolicyModal();
    });
    document.getElementById('facebookLink').addEventListener('click', (e) => {
      e.preventDefault();
      toast('Facebook page link to be added once supplied');
    });

    // "I have read the Privacy Policy" link inside quote form opens POPIA modal
    document.querySelectorAll('a[href="#popia"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openPolicyModal('POPIA information', POPIA_HTML);
      });
    });

    // Cart button scrolls to cart section
    document.getElementById('cartBtn').addEventListener('click', () => {
      document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
