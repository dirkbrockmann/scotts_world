(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ki = {
  id: "scotts_world",
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 600, height: 600 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Rr(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, u) => on(t(s), u), r = (s, u) => t(s) - u) : (n = t === on || t === Vi ? t : Wi, e = t, r = t);
  function i(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const d = l + h >>> 1;
        e(s[d], u) < 0 ? l = d + 1 : h = d;
      } while (l < h);
    }
    return l;
  }
  function a(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const d = l + h >>> 1;
        e(s[d], u) <= 0 ? l = d + 1 : h = d;
      } while (l < h);
    }
    return l;
  }
  function o(s, u, l = 0, h = s.length) {
    const d = i(s, u, l, h - 1);
    return d > l && r(s[d - 1], u) > -r(s[d], u) ? d - 1 : d;
  }
  return { left: i, center: o, right: a };
}
function Wi() {
  return 0;
}
function Zi(t) {
  return t === null ? NaN : +t;
}
const Ji = Rr(on), Qi = Ji.right;
Rr(Zi).center;
const ji = Math.sqrt(50), ta = Math.sqrt(10), na = Math.sqrt(2);
function cn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ji ? 10 : a >= ta ? 5 : a >= na ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / o, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * o, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? cn(t, n, e * 2) : [s, u, l];
}
function ea(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? cn(n, t, e) : cn(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, u = new Array(s);
  if (r)
    if (o < 0) for (let l = 0; l < s; ++l) u[l] = (a - l) / -o;
    else for (let l = 0; l < s; ++l) u[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -o;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * o;
  return u;
}
function Vn(t, n, e) {
  return n = +n, t = +t, e = +e, cn(t, n, e)[2];
}
function ra(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Vn(n, t, e) : Vn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ia(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var aa = { value: () => {
} };
function _e() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new sn(e);
}
function sn(t) {
  this._ = t;
}
function oa(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
sn.prototype = _e.prototype = {
  constructor: sn,
  on: function(t, n) {
    var e = this._, r = oa(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = sa(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = He(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = He(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new sn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function sa(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function He(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = aa, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Wn = "http://www.w3.org/1999/xhtml";
const Ne = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Tn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ne.hasOwnProperty(n) ? { space: Ne[n], local: t } : t;
}
function ua(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wn && n.documentElement.namespaceURI === Wn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function la(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fr(t) {
  var n = Tn(t);
  return (n.local ? la : ua)(n);
}
function fa() {
}
function ve(t) {
  return t == null ? fa : function() {
    return this.querySelector(t);
  };
}
function ca(t) {
  typeof t != "function" && (t = ve(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), u, l, h = 0; h < o; ++h)
      (u = a[h]) && (l = t.call(u, u.__data__, h, a)) && ("__data__" in u && (l.__data__ = u.__data__), s[h] = l);
  return new F(r, this._parents);
}
function ha(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function pa() {
  return [];
}
function Dr(t) {
  return t == null ? pa : function() {
    return this.querySelectorAll(t);
  };
}
function da(t) {
  return function() {
    return ha(t.apply(this, arguments));
  };
}
function ga(t) {
  typeof t == "function" ? t = da(t) : t = Dr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && (r.push(t.call(u, u.__data__, l, o)), i.push(u));
  return new F(r, i);
}
function Lr(t) {
  return function() {
    return this.matches(t);
  };
}
function qr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ya = Array.prototype.find;
function ma(t) {
  return function() {
    return ya.call(this.children, t);
  };
}
function _a() {
  return this.firstElementChild;
}
function va(t) {
  return this.select(t == null ? _a : ma(typeof t == "function" ? t : qr(t)));
}
var wa = Array.prototype.filter;
function ba() {
  return Array.from(this.children);
}
function xa(t) {
  return function() {
    return wa.call(this.children, t);
  };
}
function Ma(t) {
  return this.selectAll(t == null ? ba : xa(typeof t == "function" ? t : qr(t)));
}
function $a(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new F(r, this._parents);
}
function Hr(t) {
  return new Array(t.length);
}
function Ta() {
  return new F(this._enter || this._groups.map(Hr), this._parents);
}
function hn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
hn.prototype = {
  constructor: hn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Aa(t) {
  return function() {
    return t;
  };
}
function Sa(t, n, e, r, i, a) {
  for (var o = 0, s, u = n.length, l = a.length; o < l; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new hn(t, a[o]);
  for (; o < u; ++o)
    (s = n[o]) && (i[o] = s);
}
function Ea(t, n, e, r, i, a, o) {
  var s, u, l = /* @__PURE__ */ new Map(), h = n.length, d = a.length, c = new Array(h), f;
  for (s = 0; s < h; ++s)
    (u = n[s]) && (c[s] = f = o.call(u, u.__data__, s, n) + "", l.has(f) ? i[s] = u : l.set(f, u));
  for (s = 0; s < d; ++s)
    f = o.call(t, a[s], s, a) + "", (u = l.get(f)) ? (r[s] = u, u.__data__ = a[s], l.delete(f)) : e[s] = new hn(t, a[s]);
  for (s = 0; s < h; ++s)
    (u = n[s]) && l.get(c[s]) === u && (i[s] = u);
}
function Pa(t) {
  return t.__data__;
}
function Ca(t, n) {
  if (!arguments.length) return Array.from(this, Pa);
  var e = n ? Ea : Sa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Aa(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), u = new Array(a), l = 0; l < a; ++l) {
    var h = r[l], d = i[l], c = d.length, f = Oa(t.call(h, h && h.__data__, l, r)), p = f.length, _ = s[l] = new Array(p), g = o[l] = new Array(p), m = u[l] = new Array(c);
    e(h, d, _, g, m, f, n);
    for (var x = 0, M = 0, y, w; x < p; ++x)
      if (y = _[x]) {
        for (x >= M && (M = x + 1); !(w = g[M]) && ++M < p; ) ;
        y._next = w || null;
      }
  }
  return o = new F(o, r), o._enter = s, o._exit = u, o;
}
function Oa(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ia() {
  return new F(this._exit || this._groups.map(Hr), this._parents);
}
function za(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function ka(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
    for (var l = e[u], h = r[u], d = l.length, c = s[u] = new Array(d), f, p = 0; p < d; ++p)
      (f = l[p] || h[p]) && (c[p] = f);
  for (; u < i; ++u)
    s[u] = e[u];
  return new F(s, this._parents);
}
function Ra() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Fa(t) {
  t || (t = Da);
  function n(d, c) {
    return d && c ? t(d.__data__, c.__data__) : !d - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, u = i[a] = new Array(s), l, h = 0; h < s; ++h)
      (l = o[h]) && (u[h] = l);
    u.sort(n);
  }
  return new F(i, this._parents).order();
}
function Da(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function La() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function qa() {
  return Array.from(this);
}
function Ha() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Na() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Ba() {
  return !this.node();
}
function Xa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ga(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ua(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ya(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ka(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Va(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Za(t, n) {
  var e = Tn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ua : Ga : typeof n == "function" ? e.local ? Wa : Va : e.local ? Ka : Ya)(e, n));
}
function Nr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ja(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ja(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function to(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ja : typeof n == "function" ? ja : Qa)(t, n, e ?? "")) : $t(this.node(), t);
}
function $t(t, n) {
  return t.style.getPropertyValue(n) || Nr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function no(t) {
  return function() {
    delete this[t];
  };
}
function eo(t, n) {
  return function() {
    this[t] = n;
  };
}
function ro(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function io(t, n) {
  return arguments.length > 1 ? this.each((n == null ? no : typeof n == "function" ? ro : eo)(t, n)) : this.node()[t];
}
function Br(t) {
  return t.trim().split(/^|\s+/);
}
function we(t) {
  return t.classList || new Xr(t);
}
function Xr(t) {
  this._node = t, this._names = Br(t.getAttribute("class") || "");
}
Xr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Gr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ur(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ao(t) {
  return function() {
    Gr(this, t);
  };
}
function oo(t) {
  return function() {
    Ur(this, t);
  };
}
function so(t, n) {
  return function() {
    (n.apply(this, arguments) ? Gr : Ur)(this, t);
  };
}
function uo(t, n) {
  var e = Br(t + "");
  if (arguments.length < 2) {
    for (var r = we(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? so : n ? ao : oo)(e, n));
}
function lo() {
  this.textContent = "";
}
function fo(t) {
  return function() {
    this.textContent = t;
  };
}
function co(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ho(t) {
  return arguments.length ? this.each(t == null ? lo : (typeof t == "function" ? co : fo)(t)) : this.node().textContent;
}
function po() {
  this.innerHTML = "";
}
function go(t) {
  return function() {
    this.innerHTML = t;
  };
}
function yo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function mo(t) {
  return arguments.length ? this.each(t == null ? po : (typeof t == "function" ? yo : go)(t)) : this.node().innerHTML;
}
function _o() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vo() {
  return this.each(_o);
}
function wo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function bo() {
  return this.each(wo);
}
function xo(t) {
  var n = typeof t == "function" ? t : Fr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Mo() {
  return null;
}
function $o(t, n) {
  var e = typeof t == "function" ? t : Fr(t), r = n == null ? Mo : typeof n == "function" ? n : ve(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function To() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ao() {
  return this.each(To);
}
function So() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Eo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Po(t) {
  return this.select(t ? Eo : So);
}
function Co(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Oo(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Io(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function zo(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ko(t, n, e) {
  return function() {
    var r = this.__on, i, a = Oo(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ro(t, n, e) {
  var r = Io(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, h; u < l; ++u)
        for (i = 0, h = s[u]; i < a; ++i)
          if ((o = r[i]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = n ? ko : zo, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Yr(t, n, e) {
  var r = Nr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Fo(t, n) {
  return function() {
    return Yr(this, t, n);
  };
}
function Do(t, n) {
  return function() {
    return Yr(this, t, n.apply(this, arguments));
  };
}
function Lo(t, n) {
  return this.each((typeof n == "function" ? Do : Fo)(t, n));
}
function* qo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Kr = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function Ut() {
  return new F([[document.documentElement]], Kr);
}
function Ho() {
  return this;
}
F.prototype = Ut.prototype = {
  constructor: F,
  select: ca,
  selectAll: ga,
  selectChild: va,
  selectChildren: Ma,
  filter: $a,
  data: Ca,
  enter: Ta,
  exit: Ia,
  join: za,
  merge: ka,
  selection: Ho,
  order: Ra,
  sort: Fa,
  call: La,
  nodes: qa,
  node: Ha,
  size: Na,
  empty: Ba,
  each: Xa,
  attr: Za,
  style: to,
  property: io,
  classed: uo,
  text: ho,
  html: mo,
  raise: vo,
  lower: bo,
  append: xo,
  insert: $o,
  remove: Ao,
  clone: Po,
  datum: Co,
  on: Ro,
  dispatch: Lo,
  [Symbol.iterator]: qo
};
function P(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], Kr);
}
function No(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Zn(t, n) {
  if (t = No(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Bo = { passive: !1 }, Dt = { capture: !0, passive: !1 };
function Nn(t) {
  t.stopImmediatePropagation();
}
function bt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xo(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", bt, Dt);
  "onselectstart" in n ? e.on("selectstart.drag", bt, Dt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Go(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", bt, Dt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Jt = (t) => () => t;
function Jn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: u,
  dy: l,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
Jn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Uo(t) {
  return !t.ctrlKey && !t.button;
}
function Yo() {
  return this.parentNode;
}
function Ko(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Vo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Wo() {
  var t = Uo, n = Yo, e = Ko, r = Vo, i = {}, a = _e("start", "drag", "end"), o = 0, s, u, l, h, d = 0;
  function c(y) {
    y.on("mousedown.drag", f).filter(r).on("touchstart.drag", g).on("touchmove.drag", m, Bo).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function f(y, w) {
    if (!(h || !t.call(this, y, w))) {
      var A = M(this, n.call(this, y, w), y, w, "mouse");
      A && (P(y.view).on("mousemove.drag", p, Dt).on("mouseup.drag", _, Dt), Xo(y.view), Nn(y), l = !1, s = y.clientX, u = y.clientY, A("start", y));
    }
  }
  function p(y) {
    if (bt(y), !l) {
      var w = y.clientX - s, A = y.clientY - u;
      l = w * w + A * A > d;
    }
    i.mouse("drag", y);
  }
  function _(y) {
    P(y.view).on("mousemove.drag mouseup.drag", null), Go(y.view, l), bt(y), i.mouse("end", y);
  }
  function g(y, w) {
    if (t.call(this, y, w)) {
      var A = y.changedTouches, S = n.call(this, y, w), C = A.length, Y, J;
      for (Y = 0; Y < C; ++Y)
        (J = M(this, S, y, w, A[Y].identifier, A[Y])) && (Nn(y), J("start", y, A[Y]));
    }
  }
  function m(y) {
    var w = y.changedTouches, A = w.length, S, C;
    for (S = 0; S < A; ++S)
      (C = i[w[S].identifier]) && (bt(y), C("drag", y, w[S]));
  }
  function x(y) {
    var w = y.changedTouches, A = w.length, S, C;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), S = 0; S < A; ++S)
      (C = i[w[S].identifier]) && (Nn(y), C("end", y, w[S]));
  }
  function M(y, w, A, S, C, Y) {
    var J = a.copy(), b = Zn(Y || A, w), K, O, L;
    if ((L = e.call(y, new Jn("beforestart", {
      sourceEvent: A,
      target: c,
      identifier: C,
      active: o,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), S)) != null)
      return K = L.x - b[0] || 0, O = L.y - b[1] || 0, function Wt(st, ut, _t) {
        var D = b, Hn;
        switch (st) {
          case "start":
            i[C] = Wt, Hn = o++;
            break;
          case "end":
            delete i[C], --o;
          // falls through
          case "drag":
            b = Zn(_t || ut, w), Hn = o;
            break;
        }
        J.call(
          st,
          y,
          new Jn(st, {
            sourceEvent: ut,
            subject: L,
            target: c,
            identifier: C,
            active: Hn,
            x: b[0] + K,
            y: b[1] + O,
            dx: b[0] - D[0],
            dy: b[1] - D[1],
            dispatch: J
          }),
          S
        );
      };
  }
  return c.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Jt(!!y), c) : t;
  }, c.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Jt(y), c) : n;
  }, c.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Jt(y), c) : e;
  }, c.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Jt(!!y), c) : r;
  }, c.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? c : y;
  }, c.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, c) : Math.sqrt(d);
  }, c;
}
function be(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Vr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Yt() {
}
var Lt = 0.7, pn = 1 / Lt, xt = "\\s*([+-]?\\d+)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zo = /^#([0-9a-f]{3,8})$/, Jo = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), Qo = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), jo = new RegExp(`^rgba\\(${xt},${xt},${xt},${qt}\\)$`), ts = new RegExp(`^rgba\\(${V},${V},${V},${qt}\\)$`), ns = new RegExp(`^hsl\\(${qt},${V},${V}\\)$`), es = new RegExp(`^hsla\\(${qt},${V},${V},${qt}\\)$`), Be = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
be(Yt, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xe,
  // Deprecated! Use color.formatHex.
  formatHex: Xe,
  formatHex8: rs,
  formatHsl: is,
  formatRgb: Ge,
  toString: Ge
});
function Xe() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function is() {
  return Wr(this).formatHsl();
}
function Ge() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Zo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ue(n) : e === 3 ? new k(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jo.exec(t)) ? new k(n[1], n[2], n[3], 1) : (n = Qo.exec(t)) ? new k(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = jo.exec(t)) ? Qt(n[1], n[2], n[3], n[4]) : (n = ts.exec(t)) ? Qt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ns.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, 1) : (n = es.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, n[4]) : Be.hasOwnProperty(t) ? Ue(Be[t]) : t === "transparent" ? new k(NaN, NaN, NaN, 0) : null;
}
function Ue(t) {
  return new k(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new k(t, n, e, r);
}
function as(t) {
  return t instanceof Yt || (t = ht(t)), t ? (t = t.rgb(), new k(t.r, t.g, t.b, t.opacity)) : new k();
}
function Qn(t, n, e, r) {
  return arguments.length === 1 ? as(t) : new k(t, n, e, r ?? 1);
}
function k(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
be(k, Qn, Vr(Yt, {
  brighter(t) {
    return t = t == null ? pn : Math.pow(pn, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new k(ct(this.r), ct(this.g), ct(this.b), dn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ye,
  // Deprecated! Use color.formatHex.
  formatHex: Ye,
  formatHex8: os,
  formatRgb: Ke,
  toString: Ke
}));
function Ye() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function os() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ke() {
  const t = dn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function dn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ve(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new N(t, n, e, r);
}
function Wr(t) {
  if (t instanceof N) return new N(t.h, t.s, t.l, t.opacity);
  if (t instanceof Yt || (t = ht(t)), !t) return new N();
  if (t instanceof N) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new N(o, s, u, t.opacity);
}
function ss(t, n, e, r) {
  return arguments.length === 1 ? Wr(t) : new N(t, n, e, r ?? 1);
}
function N(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
be(N, ss, Vr(Yt, {
  brighter(t) {
    return t = t == null ? pn : Math.pow(pn, t), new N(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new N(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new k(
      Bn(t >= 240 ? t - 240 : t + 120, i, r),
      Bn(t, i, r),
      Bn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new N(We(this.h), jt(this.s), jt(this.l), dn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = dn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${We(this.h)}, ${jt(this.s) * 100}%, ${jt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function We(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function jt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Bn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const xe = (t) => () => t;
function us(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ls(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function fs(t) {
  return (t = +t) == 1 ? Zr : function(n, e) {
    return e - n ? ls(n, e, t) : xe(isNaN(n) ? e : n);
  };
}
function Zr(t, n) {
  var e = n - t;
  return e ? us(t, e) : xe(isNaN(t) ? n : t);
}
const gn = function t(n) {
  var e = fs(n);
  function r(i, a) {
    var o = e((i = Qn(i)).r, (a = Qn(a)).r), s = e(i.g, a.g), u = e(i.b, a.b), l = Zr(i.opacity, a.opacity);
    return function(h) {
      return i.r = o(h), i.g = s(h), i.b = u(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function cs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function hs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ps(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Me(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function ds(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function q(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function gs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Me(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var jn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xn = new RegExp(jn.source, "g");
function ys(t) {
  return function() {
    return t;
  };
}
function ms(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Jr(t, n) {
  var e = jn.lastIndex = Xn.lastIndex = 0, r, i, a, o = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = jn.exec(t)) && (i = Xn.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: q(r, i) })), e = Xn.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? ms(u[0].x) : ys(n) : (n = u.length, function(l) {
    for (var h = 0, d; h < n; ++h) s[(d = u[h]).i] = d.x(l);
    return s.join("");
  });
}
function Me(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? xe(n) : (e === "number" ? q : e === "string" ? (r = ht(n)) ? (n = r, gn) : Jr : n instanceof ht ? gn : n instanceof Date ? ds : hs(n) ? cs : Array.isArray(n) ? ps : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? gs : q)(t, n);
}
function _s(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ze = 180 / Math.PI, te = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qr(t, n, e, r, i, a) {
  var o, s, u;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Ze,
    skewX: Math.atan(u) * Ze,
    scaleX: o,
    scaleY: s
  };
}
var tn;
function vs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? te : Qr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ws(t) {
  return t == null || (tn || (tn = document.createElementNS("http://www.w3.org/2000/svg", "g")), tn.setAttribute("transform", t), !(t = tn.transform.baseVal.consolidate())) ? te : (t = t.matrix, Qr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, h, d, c, f, p) {
    if (l !== d || h !== c) {
      var _ = f.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: q(l, d) }, { i: _ - 2, x: q(h, c) });
    } else (d || c) && f.push("translate(" + d + n + c + e);
  }
  function o(l, h, d, c) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: q(l, h) })) : h && d.push(i(d) + "rotate(" + h + r);
  }
  function s(l, h, d, c) {
    l !== h ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: q(l, h) }) : h && d.push(i(d) + "skewX(" + h + r);
  }
  function u(l, h, d, c, f, p) {
    if (l !== d || h !== c) {
      var _ = f.push(i(f) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: q(l, d) }, { i: _ - 2, x: q(h, c) });
    } else (d !== 1 || c !== 1) && f.push(i(f) + "scale(" + d + "," + c + ")");
  }
  return function(l, h) {
    var d = [], c = [];
    return l = t(l), h = t(h), a(l.translateX, l.translateY, h.translateX, h.translateY, d, c), o(l.rotate, h.rotate, d, c), s(l.skewX, h.skewX, d, c), u(l.scaleX, l.scaleY, h.scaleX, h.scaleY, d, c), l = h = null, function(f) {
      for (var p = -1, _ = c.length, g; ++p < _; ) d[(g = c[p]).i] = g.x(f);
      return d.join("");
    };
  };
}
var bs = jr(vs, "px, ", "px)", "deg)"), xs = jr(ws, ", ", ")", ")"), Tt = 0, It = 0, Ct = 0, ti = 1e3, yn, zt, mn = 0, pt = 0, An = 0, Ht = typeof performance == "object" && performance.now ? performance : Date, ni = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Sn() {
  return pt || (ni(Ms), pt = Ht.now() + An);
}
function Ms() {
  pt = 0;
}
function Nt() {
  this._call = this._time = this._next = null;
}
Nt.prototype = ei.prototype = {
  constructor: Nt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Sn() : +e) + (n == null ? 0 : +n), !this._next && zt !== this && (zt ? zt._next = this : yn = this, zt = this), this._call = t, this._time = e, ne();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ne());
  }
};
function ei(t, n, e) {
  var r = new Nt();
  return r.restart(t, n, e), r;
}
function $s() {
  Sn(), ++Tt;
  for (var t = yn, n; t; )
    (n = pt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Tt;
}
function Je() {
  pt = (mn = Ht.now()) + An, Tt = It = 0;
  try {
    $s();
  } finally {
    Tt = 0, As(), pt = 0;
  }
}
function Ts() {
  var t = Ht.now(), n = t - mn;
  n > ti && (An -= n, mn = t);
}
function As() {
  for (var t, n = yn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : yn = e);
  zt = t, ne(r);
}
function ne(t) {
  if (!Tt) {
    It && (It = clearTimeout(It));
    var n = t - pt;
    n > 24 ? (t < 1 / 0 && (It = setTimeout(Je, t - Ht.now() - An)), Ct && (Ct = clearInterval(Ct))) : (Ct || (mn = Ht.now(), Ct = setInterval(Ts, ti)), Tt = 1, ni(Je));
  }
}
function Qe(t, n, e) {
  var r = new Nt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ss(t, n, e) {
  var r = new Nt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Sn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += o, s), a(l);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Es = _e("start", "end", "cancel", "interrupt"), Ps = [], ri = 0, je = 1, ee = 2, un = 3, tr = 4, re = 5, ln = 6;
function En(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Cs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Es,
    tween: Ps,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ri
  });
}
function $e(t, n) {
  var e = G(t, n);
  if (e.state > ri) throw new Error("too late; already scheduled");
  return e;
}
function Z(t, n) {
  var e = G(t, n);
  if (e.state > un) throw new Error("too late; already running");
  return e;
}
function G(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Cs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ei(a, 0, e.time);
  function a(l) {
    e.state = je, e.timer.restart(o, e.delay, e.time), e.delay <= l && o(l - e.delay);
  }
  function o(l) {
    var h, d, c, f;
    if (e.state !== je) return u();
    for (h in r)
      if (f = r[h], f.name === e.name) {
        if (f.state === un) return Qe(o);
        f.state === tr ? (f.state = ln, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < n && (f.state = ln, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
    if (Qe(function() {
      e.state === un && (e.state = tr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = ee, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ee) {
      for (e.state = un, i = new Array(c = e.tween.length), h = 0, d = -1; h < c; ++h)
        (f = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (i[++d] = f);
      i.length = d + 1;
    }
  }
  function s(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = re, 1), d = -1, c = i.length; ++d < c; )
      i[d].call(t, h);
    e.state === re && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = ln, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Os(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > ee && r.state < re, r.state = ln, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function Is(t) {
  return this.each(function() {
    Os(this, t);
  });
}
function zs(t, n) {
  var e, r;
  return function() {
    var i = Z(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ks(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = Z(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    a.tween = i;
  };
}
function Rs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = G(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? zs : ks)(e, t, n));
}
function Te(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return G(i, r).value[n];
  };
}
function ii(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof ht ? gn : (e = ht(n)) ? (n = e, gn) : Jr)(t, n);
}
function Fs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ds(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function qs(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Hs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function Ns(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s)));
  };
}
function Bs(t, n) {
  var e = Tn(t), r = e === "transform" ? xs : ii;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ns : Hs)(e, r, Te(this, "attr." + t, n)) : n == null ? (e.local ? Ds : Fs)(e) : (e.local ? qs : Ls)(e, r, n));
}
function Xs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Gs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Us(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Gs(t, a)), e;
  }
  return i._value = n, i;
}
function Ys(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Xs(t, a)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Tn(t);
  return this.tween(e, (r.local ? Us : Ys)(r, n));
}
function Vs(t, n) {
  return function() {
    $e(this, t).delay = +n.apply(this, arguments);
  };
}
function Ws(t, n) {
  return n = +n, function() {
    $e(this, t).delay = n;
  };
}
function Zs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Vs : Ws)(n, t)) : G(this.node(), n).delay;
}
function Js(t, n) {
  return function() {
    Z(this, t).duration = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    Z(this, t).duration = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : G(this.node(), n).duration;
}
function tu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Z(this, t).ease = n;
  };
}
function nu(t) {
  var n = this._id;
  return arguments.length ? this.each(tu(n, t)) : G(this.node(), n).ease;
}
function eu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Z(this, t).ease = e;
  };
}
function ru(t) {
  if (typeof t != "function") throw new Error();
  return this.each(eu(this._id, t));
}
function iu(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function au(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var u = n[s], l = e[s], h = u.length, d = o[s] = new Array(h), c, f = 0; f < h; ++f)
      (c = u[f] || l[f]) && (d[f] = c);
  for (; s < r; ++s)
    o[s] = n[s];
  return new et(o, this._parents, this._name, this._id);
}
function ou(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function su(t, n, e) {
  var r, i, a = ou(n) ? $e : Z;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function uu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? G(this.node(), e).on.on(t) : this.each(su(e, t, n));
}
function lu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function fu() {
  return this.on("end.remove", lu(this._id));
}
function cu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ve(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, l = a[o] = new Array(u), h, d, c = 0; c < u; ++c)
      (h = s[c]) && (d = t.call(h, h.__data__, c, s)) && ("__data__" in h && (d.__data__ = h.__data__), l[c] = d, En(l[c], n, e, c, l, G(h, e)));
  return new et(a, this._parents, n, e);
}
function hu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Dr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, h, d = 0; d < l; ++d)
      if (h = u[d]) {
        for (var c = t.call(h, h.__data__, d, u), f, p = G(h, e), _ = 0, g = c.length; _ < g; ++_)
          (f = c[_]) && En(f, n, e, _, c, p);
        a.push(c), o.push(h);
      }
  return new et(a, o, n, e);
}
var pu = Ut.prototype.constructor;
function du() {
  return new pu(this._groups, this._parents);
}
function gu(t, n) {
  var e, r, i;
  return function() {
    var a = $t(this, t), o = (this.style.removeProperty(t), $t(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function ai(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yu(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = $t(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function mu(t, n, e) {
  var r, i, a;
  return function() {
    var o = $t(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), $t(this, t))), o === u ? null : o === r && u === i ? a : (i = u, a = n(r = o, s));
  };
}
function _u(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var u = Z(this, t), l = u.on, h = u.value[a] == null ? s || (s = ai(n)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(o, i = h), u.on = r;
  };
}
function vu(t, n, e) {
  var r = (t += "") == "transform" ? bs : ii;
  return n == null ? this.styleTween(t, gu(t, r)).on("end.style." + t, ai(t)) : typeof n == "function" ? this.styleTween(t, mu(t, r, Te(this, "style." + t, n))).each(_u(this._id, t)) : this.styleTween(t, yu(t, r, n), e).on("end.style." + t, null);
}
function wu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function bu(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && wu(t, o, e)), r;
  }
  return a._value = n, a;
}
function xu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, bu(t, n, e ?? ""));
}
function Mu(t) {
  return function() {
    this.textContent = t;
  };
}
function $u(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Tu(t) {
  return this.tween("text", typeof t == "function" ? $u(Te(this, "text", t)) : Mu(t == null ? "" : t + ""));
}
function Au(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Su(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Au(i)), n;
  }
  return r._value = t, r;
}
function Eu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Su(t));
}
function Pu() {
  for (var t = this._name, n = this._id, e = oi(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      if (u = o[l]) {
        var h = G(u, n);
        En(u, t, e, l, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new et(r, this._parents, t, e);
}
function Cu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, u = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var l = Z(this, r), h = l.on;
      h !== t && (n = (t = h).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && a();
  });
}
var Ou = 0;
function et(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function oi() {
  return ++Ou;
}
var Q = Ut.prototype;
et.prototype = {
  constructor: et,
  select: cu,
  selectAll: hu,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: iu,
  merge: au,
  selection: du,
  transition: Pu,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: uu,
  attr: Bs,
  attrTween: Ks,
  style: vu,
  styleTween: xu,
  text: Tu,
  textTween: Eu,
  remove: fu,
  tween: Rs,
  delay: Zs,
  duration: js,
  ease: nu,
  easeVarying: ru,
  end: Cu,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function Iu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Iu
};
function ku(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ru(t) {
  var n, e;
  t instanceof et ? (n = t._id, t = t._name) : (n = oi(), (e = zu).time = Sn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && En(u, t, n, l, o, e || ku(u, n));
  return new et(r, this._parents, t, n);
}
Ut.prototype.interrupt = Is;
Ut.prototype.transition = Ru;
const ie = Math.PI, ae = 2 * ie, lt = 1e-6, Fu = ae - lt;
function si(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Du(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return si;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ui {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? si : Du(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, u = r - n, l = i - e, h = o - n, d = s - e, c = h * h + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > lt) if (!(Math.abs(d * u - l * h) > lt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let f = r - o, p = i - s, _ = u * u + l * l, g = f * f + p * p, m = Math.sqrt(_), x = Math.sqrt(c), M = a * Math.tan((ie - Math.acos((_ + c - g) / (2 * m * x))) / 2), y = M / x, w = M / m;
      Math.abs(y - 1) > lt && this._append`L${n + y * h},${e + y * d}`, this._append`A${a},${a},0,0,${+(d * f > h * p)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, h = e + u, d = 1 ^ o, c = o ? i - a : a - i;
    this._x1 === null ? this._append`M${l},${h}` : (Math.abs(this._x1 - l) > lt || Math.abs(this._y1 - h) > lt) && this._append`L${l},${h}`, r && (c < 0 && (c = c % ae + ae), c > Fu ? this._append`A${r},${r},0,1,${d},${n - s},${e - u}A${r},${r},0,1,${d},${this._x1 = l},${this._y1 = h}` : c > lt && this._append`A${r},${r},0,${+(c >= ie)},${d},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function U() {
  return new ui();
}
U.prototype = ui.prototype;
function Lu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function _n(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function At(t) {
  return t = _n(Math.abs(t)), t ? t[1] : NaN;
}
function qu(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), a.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Hu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Nu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vn(t) {
  if (!(n = Nu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ae({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
vn.prototype = Ae.prototype;
function Ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Bu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var li;
function Xu(t, n) {
  var e = _n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (li = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + _n(t, Math.max(0, n + a - 1))[0];
}
function nr(t, n) {
  var e = _n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const er = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Lu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => nr(t * 100, n),
  r: nr,
  s: Xu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function rr(t) {
  return t;
}
var ir = Array.prototype.map, ar = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? rr : qu(ir.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? rr : Hu(ir.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(d) {
    d = vn(d);
    var c = d.fill, f = d.align, p = d.sign, _ = d.symbol, g = d.zero, m = d.width, x = d.comma, M = d.precision, y = d.trim, w = d.type;
    w === "n" ? (x = !0, w = "g") : er[w] || (M === void 0 && (M = 12), y = !0, w = "g"), (g || c === "0" && f === "=") && (g = !0, c = "0", f = "=");
    var A = _ === "$" ? e : _ === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", S = _ === "$" ? r : /[%p]/.test(w) ? o : "", C = er[w], Y = /[defgprs%]/.test(w);
    M = M === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function J(b) {
      var K = A, O = S, L, Wt, st;
      if (w === "c")
        O = C(b) + O, b = "";
      else {
        b = +b;
        var ut = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : C(Math.abs(b), M), y && (b = Bu(b)), ut && +b == 0 && p !== "+" && (ut = !1), K = (ut ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + K, O = (w === "s" ? ar[8 + li / 3] : "") + O + (ut && p === "(" ? ")" : ""), Y) {
          for (L = -1, Wt = b.length; ++L < Wt; )
            if (st = b.charCodeAt(L), 48 > st || st > 57) {
              O = (st === 46 ? i + b.slice(L + 1) : b.slice(L)) + O, b = b.slice(0, L);
              break;
            }
        }
      }
      x && !g && (b = n(b, 1 / 0));
      var _t = K.length + b.length + O.length, D = _t < m ? new Array(m - _t + 1).join(c) : "";
      switch (x && g && (b = n(D + b, D.length ? m - O.length : 1 / 0), D = ""), f) {
        case "<":
          b = K + b + O + D;
          break;
        case "=":
          b = K + D + b + O;
          break;
        case "^":
          b = D.slice(0, _t = D.length >> 1) + K + b + O + D.slice(_t);
          break;
        default:
          b = D + K + b + O;
          break;
      }
      return a(b);
    }
    return J.toString = function() {
      return d + "";
    }, J;
  }
  function h(d, c) {
    var f = l((d = vn(d), d.type = "f", d)), p = Math.max(-8, Math.min(8, Math.floor(At(c) / 3))) * 3, _ = Math.pow(10, -p), g = ar[8 + p / 3];
    return function(m) {
      return f(_ * m) + g;
    };
  }
  return {
    format: l,
    formatPrefix: h
  };
}
var nn, Pn, fi;
Uu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Uu(t) {
  return nn = Gu(t), Pn = nn.format, fi = nn.formatPrefix, nn;
}
function Yu(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Ku(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(n) / 3))) * 3 - At(Math.abs(t)));
}
function Vu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, At(n) - At(t)) + 1;
}
function Wu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Zu(t) {
  return function() {
    return t;
  };
}
function Ju(t) {
  return +t;
}
var or = [0, 1];
function wt(t) {
  return t;
}
function oe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Zu(isNaN(n) ? NaN : 0.5);
}
function Qu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ju(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = oe(i, r), a = e(o, a)) : (r = oe(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function tl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = oe(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var u = Qi(t, s, 1, r) - 1;
    return a[u](i[u](s));
  };
}
function nl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function el() {
  var t = or, n = or, e = Me, r, i, a, o = wt, s, u, l;
  function h() {
    var c = Math.min(t.length, n.length);
    return o !== wt && (o = Qu(t[0], t[c - 1])), s = c > 2 ? tl : ju, u = l = null, d;
  }
  function d(c) {
    return c == null || isNaN(c = +c) ? a : (u || (u = s(t.map(r), n, e)))(r(o(c)));
  }
  return d.invert = function(c) {
    return o(i((l || (l = s(n, t.map(r), q)))(c)));
  }, d.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Ju), h()) : t.slice();
  }, d.range = function(c) {
    return arguments.length ? (n = Array.from(c), h()) : n.slice();
  }, d.rangeRound = function(c) {
    return n = Array.from(c), e = _s, h();
  }, d.clamp = function(c) {
    return arguments.length ? (o = c ? !0 : wt, h()) : o !== wt;
  }, d.interpolate = function(c) {
    return arguments.length ? (e = c, h()) : e;
  }, d.unknown = function(c) {
    return arguments.length ? (a = c, d) : a;
  }, function(c, f) {
    return r = c, i = f, h();
  };
}
function rl() {
  return el()(wt, wt);
}
function il(t, n, e, r) {
  var i = ra(t, n, e), a;
  switch (r = vn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Ku(i, o)) && (r.precision = a), fi(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Vu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Yu(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pn(r);
}
function al(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ea(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return il(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], u, l, h = 10;
    for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); h-- > 0; ) {
      if (l = Vn(o, s, e), l === u)
        return r[i] = o, r[a] = s, n(r);
      if (l > 0)
        o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function X() {
  var t = rl();
  return t.copy = function() {
    return nl(t, X());
  }, Wu.apply(t, arguments), al(t);
}
function kt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
kt.prototype = {
  constructor: kt,
  scale: function(t) {
    return t === 1 ? this : new kt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new kt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
kt.prototype;
var ci = typeof global == "object" && global && global.Object === Object && global, ol = typeof self == "object" && self && self.Object === Object && self, it = ci || ol || Function("return this")(), W = it.Symbol, hi = Object.prototype, sl = hi.hasOwnProperty, ul = hi.toString, Ot = W ? W.toStringTag : void 0;
function ll(t) {
  var n = sl.call(t, Ot), e = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = ul.call(t);
  return r && (n ? t[Ot] = e : delete t[Ot]), i;
}
var fl = Object.prototype, cl = fl.toString;
function hl(t) {
  return cl.call(t);
}
var pl = "[object Null]", dl = "[object Undefined]", sr = W ? W.toStringTag : void 0;
function St(t) {
  return t == null ? t === void 0 ? dl : pl : sr && sr in Object(t) ? ll(t) : hl(t);
}
function dt(t) {
  return t != null && typeof t == "object";
}
var gl = "[object Symbol]";
function Cn(t) {
  return typeof t == "symbol" || dt(t) && St(t) == gl;
}
function Et(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var R = Array.isArray, ur = W ? W.prototype : void 0, lr = ur ? ur.toString : void 0;
function pi(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return Et(t, pi) + "";
  if (Cn(t))
    return lr ? lr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var yl = /\s/;
function ml(t) {
  for (var n = t.length; n-- && yl.test(t.charAt(n)); )
    ;
  return n;
}
var _l = /^\s+/;
function vl(t) {
  return t && t.slice(0, ml(t) + 1).replace(_l, "");
}
function rt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var fr = NaN, wl = /^[-+]0x[0-9a-f]+$/i, bl = /^0b[01]+$/i, xl = /^0o[0-7]+$/i, Ml = parseInt;
function $l(t) {
  if (typeof t == "number")
    return t;
  if (Cn(t))
    return fr;
  if (rt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = rt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = vl(t);
  var e = bl.test(t);
  return e || xl.test(t) ? Ml(t.slice(2), e ? 2 : 8) : wl.test(t) ? fr : +t;
}
var Tl = 1 / 0, Al = 17976931348623157e292;
function Gn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = $l(t), t === Tl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Al;
  }
  return t === t ? t : 0;
}
function On(t) {
  return t;
}
var Sl = "[object AsyncFunction]", El = "[object Function]", Pl = "[object GeneratorFunction]", Cl = "[object Proxy]";
function di(t) {
  if (!rt(t))
    return !1;
  var n = St(t);
  return n == El || n == Pl || n == Sl || n == Cl;
}
var Un = it["__core-js_shared__"], cr = function() {
  var t = /[^.]+$/.exec(Un && Un.keys && Un.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ol(t) {
  return !!cr && cr in t;
}
var Il = Function.prototype, zl = Il.toString;
function yt(t) {
  if (t != null) {
    try {
      return zl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var kl = /[\\^$.*+?()[\]{}|]/g, Rl = /^\[object .+?Constructor\]$/, Fl = Function.prototype, Dl = Object.prototype, Ll = Fl.toString, ql = Dl.hasOwnProperty, Hl = RegExp(
  "^" + Ll.call(ql).replace(kl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nl(t) {
  if (!rt(t) || Ol(t))
    return !1;
  var n = di(t) ? Hl : Rl;
  return n.test(yt(t));
}
function Bl(t, n) {
  return t == null ? void 0 : t[n];
}
function mt(t, n) {
  var e = Bl(t, n);
  return Nl(e) ? e : void 0;
}
var se = mt(it, "WeakMap");
function Xl(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function Gl(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Ul = 800, Yl = 16, Kl = Date.now;
function Vl(t) {
  var n = 0, e = 0;
  return function() {
    var r = Kl(), i = Yl - (r - e);
    if (e = r, i > 0) {
      if (++n >= Ul)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Wl(t) {
  return function() {
    return t;
  };
}
var wn = function() {
  try {
    var t = mt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Zl = wn ? function(t, n) {
  return wn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wl(n),
    writable: !0
  });
} : On, Jl = Vl(Zl);
function Ql(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var jl = 9007199254740991, tf = /^(?:0|[1-9]\d*)$/;
function In(t, n) {
  var e = typeof t;
  return n = n ?? jl, !!n && (e == "number" || e != "symbol" && tf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function nf(t, n, e) {
  n == "__proto__" && wn ? wn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function zn(t, n) {
  return t === n || t !== t && n !== n;
}
var ef = Object.prototype, rf = ef.hasOwnProperty;
function af(t, n, e) {
  var r = t[n];
  (!(rf.call(t, n) && zn(r, e)) || e === void 0 && !(n in t)) && nf(t, n, e);
}
var hr = Math.max;
function of(t, n, e) {
  return n = hr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = hr(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), Xl(t, this, s);
  };
}
function sf(t, n) {
  return Jl(of(t, n, On), t + "");
}
var uf = 9007199254740991;
function Se(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= uf;
}
function Pt(t) {
  return t != null && Se(t.length) && !di(t);
}
function lf(t, n, e) {
  if (!rt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Pt(e) && In(n, e.length) : r == "string" && n in e) ? zn(e[n], t) : !1;
}
var ff = Object.prototype;
function gi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ff;
  return t === e;
}
function yi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var cf = "[object Arguments]";
function pr(t) {
  return dt(t) && St(t) == cf;
}
var mi = Object.prototype, hf = mi.hasOwnProperty, pf = mi.propertyIsEnumerable, Ee = pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? pr : function(t) {
  return dt(t) && hf.call(t, "callee") && !pf.call(t, "callee");
};
function df() {
  return !1;
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, dr = _i && typeof module == "object" && module && !module.nodeType && module, gf = dr && dr.exports === _i, gr = gf ? it.Buffer : void 0, yf = gr ? gr.isBuffer : void 0, ue = yf || df, mf = "[object Arguments]", _f = "[object Array]", vf = "[object Boolean]", wf = "[object Date]", bf = "[object Error]", xf = "[object Function]", Mf = "[object Map]", $f = "[object Number]", Tf = "[object Object]", Af = "[object RegExp]", Sf = "[object Set]", Ef = "[object String]", Pf = "[object WeakMap]", Cf = "[object ArrayBuffer]", Of = "[object DataView]", If = "[object Float32Array]", zf = "[object Float64Array]", kf = "[object Int8Array]", Rf = "[object Int16Array]", Ff = "[object Int32Array]", Df = "[object Uint8Array]", Lf = "[object Uint8ClampedArray]", qf = "[object Uint16Array]", Hf = "[object Uint32Array]", $ = {};
$[If] = $[zf] = $[kf] = $[Rf] = $[Ff] = $[Df] = $[Lf] = $[qf] = $[Hf] = !0;
$[mf] = $[_f] = $[Cf] = $[vf] = $[Of] = $[wf] = $[bf] = $[xf] = $[Mf] = $[$f] = $[Tf] = $[Af] = $[Sf] = $[Ef] = $[Pf] = !1;
function Nf(t) {
  return dt(t) && Se(t.length) && !!$[St(t)];
}
function Bf(t) {
  return function(n) {
    return t(n);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = vi && typeof module == "object" && module && !module.nodeType && module, Xf = Rt && Rt.exports === vi, Yn = Xf && ci.process, yr = function() {
  try {
    var t = Rt && Rt.require && Rt.require("util").types;
    return t || Yn && Yn.binding && Yn.binding("util");
  } catch {
  }
}(), mr = yr && yr.isTypedArray, wi = mr ? Bf(mr) : Nf, Gf = Object.prototype, Uf = Gf.hasOwnProperty;
function bi(t, n) {
  var e = R(t), r = !e && Ee(t), i = !e && !r && ue(t), a = !e && !r && !i && wi(t), o = e || r || i || a, s = o ? yi(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Uf.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    In(l, u))) && s.push(l);
  return s;
}
function xi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Yf = xi(Object.keys, Object), Kf = Object.prototype, Vf = Kf.hasOwnProperty;
function Wf(t) {
  if (!gi(t))
    return Yf(t);
  var n = [];
  for (var e in Object(t))
    Vf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Kt(t) {
  return Pt(t) ? bi(t) : Wf(t);
}
function Zf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function jf(t) {
  if (!rt(t))
    return Zf(t);
  var n = gi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Qf.call(t, r)) || e.push(r);
  return e;
}
function tc(t) {
  return Pt(t) ? bi(t, !0) : jf(t);
}
var nc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ec = /^\w*$/;
function Pe(t, n) {
  if (R(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Cn(t) ? !0 : ec.test(t) || !nc.test(t) || n != null && t in Object(n);
}
var Bt = mt(Object, "create");
function rc() {
  this.__data__ = Bt ? Bt(null) : {}, this.size = 0;
}
function ic(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ac = "__lodash_hash_undefined__", oc = Object.prototype, sc = oc.hasOwnProperty;
function uc(t) {
  var n = this.__data__;
  if (Bt) {
    var e = n[t];
    return e === ac ? void 0 : e;
  }
  return sc.call(n, t) ? n[t] : void 0;
}
var lc = Object.prototype, fc = lc.hasOwnProperty;
function cc(t) {
  var n = this.__data__;
  return Bt ? n[t] !== void 0 : fc.call(n, t);
}
var hc = "__lodash_hash_undefined__";
function pc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Bt && n === void 0 ? hc : n, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = rc;
gt.prototype.delete = ic;
gt.prototype.get = uc;
gt.prototype.has = cc;
gt.prototype.set = pc;
function dc() {
  this.__data__ = [], this.size = 0;
}
function kn(t, n) {
  for (var e = t.length; e--; )
    if (zn(t[e][0], n))
      return e;
  return -1;
}
var gc = Array.prototype, yc = gc.splice;
function mc(t) {
  var n = this.__data__, e = kn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : yc.call(n, e, 1), --this.size, !0;
}
function _c(t) {
  var n = this.__data__, e = kn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function vc(t) {
  return kn(this.__data__, t) > -1;
}
function wc(t, n) {
  var e = this.__data__, r = kn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function at(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = dc;
at.prototype.delete = mc;
at.prototype.get = _c;
at.prototype.has = vc;
at.prototype.set = wc;
var Xt = mt(it, "Map");
function bc() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (Xt || at)(),
    string: new gt()
  };
}
function xc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Rn(t, n) {
  var e = t.__data__;
  return xc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Mc(t) {
  var n = Rn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function $c(t) {
  return Rn(this, t).get(t);
}
function Tc(t) {
  return Rn(this, t).has(t);
}
function Ac(t, n) {
  var e = Rn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = bc;
ot.prototype.delete = Mc;
ot.prototype.get = $c;
ot.prototype.has = Tc;
ot.prototype.set = Ac;
var Sc = "Expected a function";
function Ce(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Sc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ce.Cache || ot)(), e;
}
Ce.Cache = ot;
var Ec = 500;
function Pc(t) {
  var n = Ce(t, function(r) {
    return e.size === Ec && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Cc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Oc = /\\(\\)?/g, Ic = Pc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Cc, function(e, r, i, a) {
    n.push(i ? a.replace(Oc, "$1") : r || e);
  }), n;
});
function Fn(t) {
  return t == null ? "" : pi(t);
}
function Dn(t, n) {
  return R(t) ? t : Pe(t, n) ? [t] : Ic(Fn(t));
}
function Vt(t) {
  if (typeof t == "string" || Cn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Oe(t, n) {
  n = Dn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Vt(n[e++])];
  return e && e == r ? t : void 0;
}
function zc(t, n, e) {
  var r = t == null ? void 0 : Oe(t, n);
  return r === void 0 ? e : r;
}
function Ie(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var _r = W ? W.isConcatSpreadable : void 0;
function kc(t) {
  return R(t) || Ee(t) || !!(_r && t && t[_r]);
}
function Rc(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = kc), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Ie(i, s) : i[i.length] = s;
  }
  return i;
}
function Fc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Rc(t) : [];
}
var Dc = xi(Object.getPrototypeOf, Object);
function Lc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function qc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Lc(t, n, e);
}
var Hc = "\\ud800-\\udfff", Nc = "\\u0300-\\u036f", Bc = "\\ufe20-\\ufe2f", Xc = "\\u20d0-\\u20ff", Gc = Nc + Bc + Xc, Uc = "\\ufe0e\\ufe0f", Yc = "\\u200d", Kc = RegExp("[" + Yc + Hc + Gc + Uc + "]");
function Mi(t) {
  return Kc.test(t);
}
function Vc(t) {
  return t.split("");
}
var $i = "\\ud800-\\udfff", Wc = "\\u0300-\\u036f", Zc = "\\ufe20-\\ufe2f", Jc = "\\u20d0-\\u20ff", Qc = Wc + Zc + Jc, jc = "\\ufe0e\\ufe0f", th = "[" + $i + "]", le = "[" + Qc + "]", fe = "\\ud83c[\\udffb-\\udfff]", nh = "(?:" + le + "|" + fe + ")", Ti = "[^" + $i + "]", Ai = "(?:\\ud83c[\\udde6-\\uddff]){2}", Si = "[\\ud800-\\udbff][\\udc00-\\udfff]", eh = "\\u200d", Ei = nh + "?", Pi = "[" + jc + "]?", rh = "(?:" + eh + "(?:" + [Ti, Ai, Si].join("|") + ")" + Pi + Ei + ")*", ih = Pi + Ei + rh, ah = "(?:" + [Ti + le + "?", le, Ai, Si, th].join("|") + ")", oh = RegExp(fe + "(?=" + fe + ")|" + ah + ih, "g");
function sh(t) {
  return t.match(oh) || [];
}
function uh(t) {
  return Mi(t) ? sh(t) : Vc(t);
}
function lh(t) {
  return function(n) {
    n = Fn(n);
    var e = Mi(n) ? uh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? qc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var fh = lh("toUpperCase");
function ch(t) {
  return fh(Fn(t).toLowerCase());
}
function hh() {
  this.__data__ = new at(), this.size = 0;
}
function ph(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function dh(t) {
  return this.__data__.get(t);
}
function gh(t) {
  return this.__data__.has(t);
}
var yh = 200;
function mh(t, n) {
  var e = this.__data__;
  if (e instanceof at) {
    var r = e.__data__;
    if (!Xt || r.length < yh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ot(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function nt(t) {
  var n = this.__data__ = new at(t);
  this.size = n.size;
}
nt.prototype.clear = hh;
nt.prototype.delete = ph;
nt.prototype.get = dh;
nt.prototype.has = gh;
nt.prototype.set = mh;
function ze(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Ci() {
  return [];
}
var _h = Object.prototype, vh = _h.propertyIsEnumerable, vr = Object.getOwnPropertySymbols, Oi = vr ? function(t) {
  return t == null ? [] : (t = Object(t), ze(vr(t), function(n) {
    return vh.call(t, n);
  }));
} : Ci, wh = Object.getOwnPropertySymbols, bh = wh ? function(t) {
  for (var n = []; t; )
    Ie(n, Oi(t)), t = Dc(t);
  return n;
} : Ci;
function Ii(t, n, e) {
  var r = n(t);
  return R(t) ? r : Ie(r, e(t));
}
function wr(t) {
  return Ii(t, Kt, Oi);
}
function xh(t) {
  return Ii(t, tc, bh);
}
var ce = mt(it, "DataView"), he = mt(it, "Promise"), pe = mt(it, "Set"), br = "[object Map]", Mh = "[object Object]", xr = "[object Promise]", Mr = "[object Set]", $r = "[object WeakMap]", Tr = "[object DataView]", $h = yt(ce), Th = yt(Xt), Ah = yt(he), Sh = yt(pe), Eh = yt(se), tt = St;
(ce && tt(new ce(new ArrayBuffer(1))) != Tr || Xt && tt(new Xt()) != br || he && tt(he.resolve()) != xr || pe && tt(new pe()) != Mr || se && tt(new se()) != $r) && (tt = function(t) {
  var n = St(t), e = n == Mh ? t.constructor : void 0, r = e ? yt(e) : "";
  if (r)
    switch (r) {
      case $h:
        return Tr;
      case Th:
        return br;
      case Ah:
        return xr;
      case Sh:
        return Mr;
      case Eh:
        return $r;
    }
  return n;
});
var Ar = it.Uint8Array, Ph = "__lodash_hash_undefined__";
function Ch(t) {
  return this.__data__.set(t, Ph), this;
}
function Oh(t) {
  return this.__data__.has(t);
}
function bn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++n < e; )
    this.add(t[n]);
}
bn.prototype.add = bn.prototype.push = Ch;
bn.prototype.has = Oh;
function Ih(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function zh(t, n) {
  return t.has(n);
}
var kh = 1, Rh = 2;
function zi(t, n, e, r, i, a) {
  var o = e & kh, s = t.length, u = n.length;
  if (s != u && !(o && u > s))
    return !1;
  var l = a.get(t), h = a.get(n);
  if (l && h)
    return l == n && h == t;
  var d = -1, c = !0, f = e & Rh ? new bn() : void 0;
  for (a.set(t, n), a.set(n, t); ++d < s; ) {
    var p = t[d], _ = n[d];
    if (r)
      var g = o ? r(_, p, d, n, t, a) : r(p, _, d, t, n, a);
    if (g !== void 0) {
      if (g)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!Ih(n, function(m, x) {
        if (!zh(f, x) && (p === m || i(p, m, e, r, a)))
          return f.push(x);
      })) {
        c = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, a))) {
      c = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), c;
}
function ki(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Fh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Dh = 1, Lh = 2, qh = "[object Boolean]", Hh = "[object Date]", Nh = "[object Error]", Bh = "[object Map]", Xh = "[object Number]", Gh = "[object RegExp]", Uh = "[object Set]", Yh = "[object String]", Kh = "[object Symbol]", Vh = "[object ArrayBuffer]", Wh = "[object DataView]", Sr = W ? W.prototype : void 0, Kn = Sr ? Sr.valueOf : void 0;
function Zh(t, n, e, r, i, a, o) {
  switch (e) {
    case Wh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Vh:
      return !(t.byteLength != n.byteLength || !a(new Ar(t), new Ar(n)));
    case qh:
    case Hh:
    case Xh:
      return zn(+t, +n);
    case Nh:
      return t.name == n.name && t.message == n.message;
    case Gh:
    case Yh:
      return t == n + "";
    case Bh:
      var s = ki;
    case Uh:
      var u = r & Dh;
      if (s || (s = Fh), t.size != n.size && !u)
        return !1;
      var l = o.get(t);
      if (l)
        return l == n;
      r |= Lh, o.set(t, n);
      var h = zi(s(t), s(n), r, i, a, o);
      return o.delete(t), h;
    case Kh:
      if (Kn)
        return Kn.call(t) == Kn.call(n);
  }
  return !1;
}
var Jh = 1, Qh = Object.prototype, jh = Qh.hasOwnProperty;
function t0(t, n, e, r, i, a) {
  var o = e & Jh, s = wr(t), u = s.length, l = wr(n), h = l.length;
  if (u != h && !o)
    return !1;
  for (var d = u; d--; ) {
    var c = s[d];
    if (!(o ? c in n : jh.call(n, c)))
      return !1;
  }
  var f = a.get(t), p = a.get(n);
  if (f && p)
    return f == n && p == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var g = o; ++d < u; ) {
    c = s[d];
    var m = t[c], x = n[c];
    if (r)
      var M = o ? r(x, m, c, n, t, a) : r(m, x, c, t, n, a);
    if (!(M === void 0 ? m === x || i(m, x, e, r, a) : M)) {
      _ = !1;
      break;
    }
    g || (g = c == "constructor");
  }
  if (_ && !g) {
    var y = t.constructor, w = n.constructor;
    y != w && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof w == "function" && w instanceof w) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var n0 = 1, Er = "[object Arguments]", Pr = "[object Array]", en = "[object Object]", e0 = Object.prototype, Cr = e0.hasOwnProperty;
function r0(t, n, e, r, i, a) {
  var o = R(t), s = R(n), u = o ? Pr : tt(t), l = s ? Pr : tt(n);
  u = u == Er ? en : u, l = l == Er ? en : l;
  var h = u == en, d = l == en, c = u == l;
  if (c && ue(t)) {
    if (!ue(n))
      return !1;
    o = !0, h = !1;
  }
  if (c && !h)
    return a || (a = new nt()), o || wi(t) ? zi(t, n, e, r, i, a) : Zh(t, n, u, e, r, i, a);
  if (!(e & n0)) {
    var f = h && Cr.call(t, "__wrapped__"), p = d && Cr.call(n, "__wrapped__");
    if (f || p) {
      var _ = f ? t.value() : t, g = p ? n.value() : n;
      return a || (a = new nt()), i(_, g, e, r, a);
    }
  }
  return c ? (a || (a = new nt()), t0(t, n, e, r, i, a)) : !1;
}
function ke(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !dt(t) && !dt(n) ? t !== t && n !== n : r0(t, n, e, r, ke, i);
}
var i0 = 1, a0 = 2;
function o0(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], u = t[s], l = o[1];
    if (o[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var h = new nt(), d;
      if (!(d === void 0 ? ke(l, u, i0 | a0, r, h) : d))
        return !1;
    }
  }
  return !0;
}
function Ri(t) {
  return t === t && !rt(t);
}
function s0(t) {
  for (var n = Kt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ri(i)];
  }
  return n;
}
function Fi(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function u0(t) {
  var n = s0(t);
  return n.length == 1 && n[0][2] ? Fi(n[0][0], n[0][1]) : function(e) {
    return e === t || o0(e, t, n);
  };
}
function l0(t, n) {
  return t != null && n in Object(t);
}
function Di(t, n, e) {
  n = Dn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Vt(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Se(i) && In(o, i) && (R(t) || Ee(t)));
}
function f0(t, n) {
  return t != null && Di(t, n, l0);
}
var c0 = 1, h0 = 2;
function p0(t, n) {
  return Pe(t) && Ri(n) ? Fi(Vt(t), n) : function(e) {
    var r = zc(e, t);
    return r === void 0 && r === n ? f0(e, t) : ke(n, r, c0 | h0);
  };
}
function Li(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function d0(t) {
  return function(n) {
    return Oe(n, t);
  };
}
function g0(t) {
  return Pe(t) ? Li(Vt(t)) : d0(t);
}
function Re(t) {
  return typeof t == "function" ? t : t == null ? On : typeof t == "object" ? R(t) ? p0(t[0], t[1]) : u0(t) : g0(t);
}
function y0(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var u = o[++i];
      if (e(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var m0 = y0();
function _0(t, n) {
  return t && m0(t, n, Kt);
}
function v0(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Pt(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Fe = v0(_0);
function w0(t) {
  return dt(t) && Pt(t);
}
function b0(t) {
  return typeof t == "function" ? t : On;
}
function H(t, n) {
  var e = R(t) ? Ql : Fe;
  return e(t, b0(n));
}
function x0(t, n) {
  return Et(n, function(e) {
    return [e, t[e]];
  });
}
function M0(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var $0 = "[object Map]", T0 = "[object Set]";
function A0(t) {
  return function(n) {
    var e = tt(n);
    return e == $0 ? ki(n) : e == T0 ? M0(n) : x0(n, t(n));
  };
}
var qi = A0(Kt);
function S0(t, n) {
  var e = [];
  return Fe(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function xn(t, n) {
  var e = R(t) ? ze : S0;
  return e(t, Re(n));
}
function E0(t, n) {
  var e = -1, r = Pt(t) ? Array(t.length) : [];
  return Fe(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Gt(t, n) {
  var e = R(t) ? Et : E0;
  return e(t, Re(n));
}
var P0 = Object.prototype, C0 = P0.hasOwnProperty;
function O0(t, n) {
  return t != null && C0.call(t, n);
}
function I0(t, n) {
  return t != null && Di(t, n, O0);
}
function z0(t, n) {
  return Et(n, function(e) {
    return t[e];
  });
}
function k0(t) {
  return t == null ? [] : z0(t, Kt(t));
}
function R0(t, n, e, r) {
  if (!rt(t))
    return t;
  n = Dn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var u = Vt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != o) {
      var h = s[u];
      l = void 0, l === void 0 && (l = rt(h) ? h : In(n[i + 1]) ? [] : {});
    }
    af(s, u, l), s = s[u];
  }
  return t;
}
function F0(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Oe(t, o);
    e(s, o) && R0(a, Dn(o, t), s);
  }
  return a;
}
function D0(t, n) {
  if (t == null)
    return {};
  var e = Et(xh(t), function(r) {
    return [r];
  });
  return n = Re(n), F0(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var L0 = Math.floor, q0 = Math.random;
function H0(t, n) {
  return t + L0(q0() * (n - t + 1));
}
var N0 = Math.ceil, B0 = Math.max;
function X0(t, n, e, r) {
  for (var i = -1, a = B0(N0((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function G0(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && lf(n, e, r) && (e = r = void 0), n = Gn(n), e === void 0 ? (e = n, n = 0) : e = Gn(e), r = r === void 0 ? n < e ? 1 : -1 : Gn(r), X0(n, e, r);
  };
}
var Ft = G0();
function U0() {
  var t = arguments, n = Fn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Hi(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var a = H0(e, i), o = t[a];
    t[a] = t[e], t[e] = o;
  }
  return t.length = n, t;
}
function Y0(t) {
  return Hi(Gl(t));
}
function K0(t) {
  return Hi(k0(t));
}
function V0(t) {
  var n = R(t) ? Y0 : K0;
  return n(t);
}
var W0 = Math.max;
function Z0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = ze(t, function(e) {
    if (w0(e))
      return n = W0(e.length, n), !0;
  }), yi(n, function(e) {
    return Et(t, Li(e));
  });
}
var Mn = sf(Z0);
const J0 = (t, n, e = 12, r = 12) => {
  const i = X().domain([0, e]).range([0, t]), a = X().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Ft((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: a(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const h = Fc(Gt(l, function(d) {
        return Gt(
          u,
          function(c) {
            return { x: i(c), y: a(d) };
          }
        );
      }));
      return h.length == 1 ? h[0] : h;
    }
  };
}, Q0 = "_widget_18g36_1", j0 = "_label_18g36_19", tp = "_lit_18g36_24", np = "_button_18g36_29", ep = "_symbol_18g36_29", rp = "_radio_18g36_29", ip = "_radiobutton_18g36_29", ap = "_selected_18g36_35", op = "_toggle_18g36_35", sp = "_slider_18g36_44", up = "_track_18g36_44", lp = "_track_overlay_18g36_48", fp = "_handle_18g36_55", v = {
  widget: Q0,
  label: j0,
  lit: tp,
  button: np,
  symbol: ep,
  radio: rp,
  radiobutton: ip,
  selected: ap,
  toggle: op,
  slider: sp,
  track: up,
  track_overlay: lp,
  handle: fp
}, Ni = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, De = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, cp = (t = 1) => {
  const n = U();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, hp = (t = 1) => {
  const n = U(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, pp = (t = 1) => {
  const n = U();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, dp = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = U();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, gp = (t = 1) => {
  const n = U(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, u = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, yp = (t = 1) => {
  const n = U(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, mp = (t = 1) => {
  const n = U(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var u = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, _p = (t = 1) => {
  var n = U(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, vp = (t = 1) => {
  const n = U(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, de = (t) => {
  switch (t) {
    case "play":
      return cp;
    case "forward":
      return hp;
    case "back":
      return pp;
    case "pause":
      return dp;
    case "reload":
      return gp;
    case "capture":
      return yp;
    case "rewind":
      return mp;
    case "stop":
      return _p;
    case "push":
      return vp;
  }
}, Le = () => {
  const t = "button";
  var n = Ni(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", u = null, l = function(p) {
  }, h = ["play"], d = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? a.x : (a.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? a.y : (a.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    click: function() {
      d = (d + 1) % h.length, l(), P(this.parentNode).select("." + v.symbol).attr("d", de(h[d])(r * e));
    },
    press: function(p) {
      d = (d + 1) % h.length, l(), p.select("#button_" + n).select("." + v.symbol).attr("d", de(h[d])(r * e));
    }
  };
}, wp = () => {
  const t = "slider", n = Pn(".3f");
  var e = Ni(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, h = function(m) {
  }, d = function(m) {
  }, c = [0, 1], f = 0, p = null, _ = X().domain(c).range([0, r]).clamp(!0);
  const g = function(m, x, M = c) {
    const y = m.select("#slider_" + e);
    _.domain(M), f = x, y.selectAll("." + v.handle).transition().attr("cx", _(x)), o && y.select("." + v.label).text(p + " = " + n(f)), h(), d();
  };
  return {
    type: t,
    scale: _,
    id: function(m) {
      return typeof m > "u" ? e : (e = m, this);
    },
    label: function(m) {
      return typeof m > "u" ? p : (p = m, this);
    },
    size: function(m) {
      return typeof m > "u" ? r : (r = m, this);
    },
    girth: function(m) {
      return typeof m > "u" ? i : (i = m, this);
    },
    knob: function(m) {
      return typeof m > "u" ? a : (a = m, this);
    },
    show: function(m) {
      return typeof m > "u" ? o : (o = m, this);
    },
    position: function(m) {
      return typeof m > "u" ? s : (s = m, this);
    },
    x: function(m) {
      return typeof m > "u" ? s.x : (s.x = m, this);
    },
    y: function(m) {
      return typeof m > "u" ? s.y : (s.y = m, this);
    },
    labelposition: function(m) {
      return typeof m > "u" ? u : (u = m, this);
    },
    fontsize: function(m) {
      return typeof m > "u" ? l : (l = m, this);
    },
    update: function(m) {
      if (typeof m == "function")
        return h = m, this;
      h(m);
    },
    update_end: function(m) {
      if (typeof m == "function")
        return d = m, this;
      d(m);
    },
    range: function(m) {
      return typeof m > "u" ? c : (c = m, this);
    },
    value: function(m) {
      return typeof m > "u" ? f : (f = m, this);
    },
    reset: g,
    click: g
  };
}, bp = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = P(a).attr("class", v.widget + " " + v.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(v.lit, !0), P(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(v.lit, !1), P(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), o.append("path").attr("d", de(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const u = De(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return a;
}, Bi = (t, n) => {
  const e = U();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, xp = (t, n) => {
  const e = Pn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(u).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Bi(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", v.track_overlay).on("click", function(p) {
    const _ = Zn(p, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", o(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Wo().on("drag", function(p) {
      t.value(o.invert(p.x)), t.update(), s.selectAll("." + v.handle).attr("cx", o(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var h, d, c, f = "bottom";
  return t.fontsize && (d = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), d = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", f = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", v.label).style("text-anchor", c).style("alignment-baseline", f).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + d + ")"), u;
}, Mp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(o).attr("class", v.widget + " " + v.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", Bi(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = De(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return o;
}, $p = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ia(o), u = X().domain([0, o - 1]).range([0, t.size()]), l = X().domain([0, o - 1]).range([0, t.size()]), h = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = P(h).attr("class", v.widget + " " + v.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + l(g) + ")" : "translate(" + u(g) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = c.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = c.append("circle").attr("r", i / 2), p = c.append("circle").attr("r", a / 2)), f.attr("class", v.background).on("mouseover", function() {
    P(this).classed(v.lit, !0), P(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(v.lit, !1), P(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), p.attr("class", v.symbol), p.filter((g) => g == t.value()).classed(v.selected, !0), c.on("click", t.click);
  const _ = De(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", v.label).text(function(g, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), h;
}, Or = (t, n) => {
  switch (t.type) {
    case "button":
      return bp(t);
    case "slider":
      return xp(t);
    case "radio":
      return $p(t);
    case "toggle":
      return Mp(t);
  }
}, Tp = (t, n) => {
  const e = J0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, z = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.666,
    slider_girth: 11,
    slider_knob: 13,
    slider_anchor: { x: 1, y: 5 },
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 10, y: 2 },
    resetbutton_anchor: { x: 8, y: 2 }
  },
  simulation: {
    delay: 10
  }
}, T = {
  N: 40,
  agentsize: 5,
  wiggle: 0.5,
  feeding_rate: 0.05,
  birth_energy: 1,
  energy_loss: 0.01,
  initial_agents: 30,
  center_size: 3,
  agent_initial_energy: 0.9,
  initial_nutrient_concentration: {
    range: [0, 0.4],
    default: 0.12
  },
  nutrient_diffusion: {
    range: [0, 0.25],
    default: 0.05
  },
  resistance_of_medium: {
    range: [0, 30],
    default: 10
  },
  metabolic_efficiency: {
    range: [10, 50],
    default: 20
  },
  motility: {
    range: [0, 0.1],
    default: 0.05
  }
}, Ap = (t) => Gt(qi(t), (n) => {
  n[1].id = n[0], n[1].label = U0(ch(n[0]), /_/g, " ");
}), Sp = (t) => Gt(qi(t), (n) => n[1]), Ep = (t, n) => H(t, (e, r) => e.widget = n[r]), Pp = (t) => D0(t, (n) => I0(n, "range"));
X().domain([0, 360]).range([0, 2 * Math.PI]);
X().range([0, 360]).domain([0, 2 * Math.PI]);
const Cp = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, qe = Pp(T);
Ap(qe);
const Xi = Sp(qe), fn = Gt(
  Xi,
  (t) => wp().id(t.id).label(t.label).range(t.range).value(t.default).size(z.widgets.slider_size).girth(z.widgets.slider_girth).knob(z.widgets.slider_knob)
);
Ep(Xi, fn);
const B = Le().actions(["play", "pause"]).id("play"), Ln = Le().actions(["back"]), qn = Le().actions(["rewind"]), Op = [B, Ln, qn], Ip = (t, n) => {
  const e = n.position(z.widgets.slider_anchor.x, Ft(fn.length).map((r) => z.widgets.slider_anchor.y + z.widgets.slider_gap * r));
  fn.forEach((r, i) => r.position(e[i])), B.position(n.position(z.widgets.playbutton_anchor.x, z.widgets.playbutton_anchor.y)).size(z.widgets.playbutton_size), qn.position(n.position(z.widgets.backbutton_anchor.x, z.widgets.backbutton_anchor.y)), Ln.position(n.position(z.widgets.resetbutton_anchor.x, z.widgets.resetbutton_anchor.y)), t.selectAll(null).data(fn).enter().append(Or), t.selectAll(null).data(Op).enter().append(Or);
}, zp = (t) => {
  H(qe, (n) => n.widget.reset(t, n.default));
};
Mn([-1, 1, 0, 0], [0, 0, -1, 1]), Mn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const rn = [1, 0], an = [0.5, Math.sqrt(3) / 2], I = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], Ir = [
  [I[0], I[1]],
  [I[1], I[2]],
  [I[2], I[4]],
  [I[4], I[5]],
  [I[5], I[3]],
  [I[3], I[0]]
];
function E(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const kp = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], a = {};
  Ft(-t, t + 1).forEach(function(c) {
    Ft(-t, t + 1).forEach(function(f) {
      Ft(-t, t + 1).forEach(function(p) {
        c + f + p == 0 && i.push({
          l: c,
          m: f,
          n: p,
          x: r * c * rn[0] + r * f * an[0],
          y: r * c * rn[1] + r * f * an[1]
        });
      });
    });
  }), i.forEach(function(c) {
    a[E(c)] = c, c.cell = () => {
      const f = 1 / Math.sqrt(3);
      return [
        { x: c.x + r / 2, y: c.y + f * r / 2 },
        { x: c.x, y: c.y + f * r },
        { x: c.x - r / 2, y: c.y + f * r / 2 },
        { x: c.x - r / 2, y: c.y - f * r / 2 },
        { x: c.x, y: c.y - f * r },
        { x: c.x + r / 2, y: c.y - f * r / 2 },
        { x: c.x + r / 2, y: c.y + f * r / 2 }
      ];
    }, c.random_interior_point = () => {
      const f = 1 / Math.sqrt(3), p = Math.random(), _ = Math.random(), g = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, m = r / 2 * Math.sqrt(p), x = r / 2 * Math.sqrt(p) * f * (1 - 2 * _), M = Math.cos(g) * m - Math.sin(g) * x, y = Math.sin(g) * m + Math.cos(g) * x;
      return {
        x: c.x + M,
        y: c.y + y
      };
    };
  }), d(i);
  const o = function(c) {
    return typeof c < "u" ? (e = c, r = e / (2 * t + 1), i.forEach((f) => {
      f.x = r * f.l * rn[0] + r * f.m * an[0], f.y = r * f.l * rn[1] + r * f.m * an[1];
    }), this.L = e, this) : e;
  }, s = function(c) {
    var f = 1 / Math.sqrt(3);
    return [
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x, y: c.y + f * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x, y: c.y - f * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t }
    ];
  }, u = function(c) {
    return typeof c < "u" ? (c == "dirichlet" ? (n = "dirichlet", h(i)) : (n = "periodic", d(i)), i.forEach((f) => {
      f.is_boundary = n == "dirichlet" && (f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
    }), this) : n;
  }, l = function() {
    return n === "periodic" ? null : xn(i, (c) => c.n == -t || c.n == t || c.l == -t || c.l == t || c.m == -t || c.m == t);
  };
  return {
    type: "hexagonal",
    L: e,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: o,
    boundary: u,
    boundary_cells: l,
    cell: s
  };
  function h(c) {
    c.forEach(function(f) {
      f.neighbors = [], I.forEach(function(p) {
        const _ = E({ l: f.l + p.l, m: f.m + p.m, n: f.n + p.n }), g = a[_];
        typeof g < "u" && f.neighbors.push(g);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Ir.forEach(function(p) {
        const _ = E({ l: f.l + p[0].l, m: f.m + p[0].m, n: f.n + p[0].n }), g = E({ l: f.l + p[1].l, m: f.m + p[1].m, n: f.n + p[1].n });
        typeof a[_] < "u" && typeof a[g] < "u" && f.triangles.push([a[_], a[g]]);
      });
    });
  }
  function d(c) {
    c.forEach(function(f) {
      f.neighbors = [], I.forEach(function(p) {
        var _ = E({ l: f.l + p.l, m: f.m + p.m, n: f.n + p.n });
        typeof a[_] > "u" && (f.l + p.l == t + 1 && Math.abs(f.m + p.m) <= t + 1 && Math.abs(f.n + p.n) <= t && (_ = E({ l: f.l + p.l - (2 * t + 1), m: f.m + p.m + (t + 1), n: f.n + p.n + t })), f.l + p.l == -(t + 1) && Math.abs(f.m + p.m) <= t + 1 && Math.abs(f.n + p.n) <= t && (_ = E({ l: f.l + p.l + (2 * t + 1), m: f.m + p.m - (t + 1), n: f.n + p.n - t })), f.m + p.m == t + 1 && Math.abs(f.l + p.l) <= t && Math.abs(f.n + p.n) <= t + 1 && (_ = E({ m: f.m + p.m - (2 * t + 1), n: f.n + p.n + (t + 1), l: f.l + p.l + t })), f.m + p.m == -(t + 1) && Math.abs(f.l + p.l) <= t && Math.abs(f.n + p.n) <= t + 1 && (_ = E({ m: f.m + p.m + (2 * t + 1), n: f.n + p.n - (t + 1), l: f.l + p.l - t })), f.n + p.n == t + 1 && Math.abs(f.l + p.l) <= t + 1 && Math.abs(f.m + p.m) <= t && (_ = E({ n: f.n + p.n - (2 * t + 1), l: f.l + p.l + (t + 1), m: f.m + p.m + t })), f.n + p.n == -(t + 1) && Math.abs(f.l + p.l) <= t + 1 && Math.abs(f.m + p.m) <= t && (_ = E({ n: f.n + p.n + (2 * t + 1), l: f.l + p.l - (t + 1), m: f.m + p.m - t }))), f.neighbors.push(a[_]);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Ir.forEach(function(p) {
        var _ = [];
        p.forEach(function(g, m) {
          var x = E({ l: f.l + g.l, m: f.m + g.m, n: f.n + g.n });
          typeof a[x] > "u" && (f.l + g.l == t + 1 && Math.abs(f.m + g.m) <= t + 1 && Math.abs(f.n + g.n) <= t && E({ l: f.l + g.l - (2 * t + 1), m: f.m + g.m + (t + 1), n: f.n + g.n + t }), f.l + g.l == -(t + 1) && Math.abs(f.m + g.m) <= t + 1 && Math.abs(f.n + g.n) <= t && E({ l: f.l + g.l + (2 * t + 1), m: f.m + g.m - (t + 1), n: f.n + g.n - t }), f.m + g.m == t + 1 && Math.abs(f.l + g.l) <= t && Math.abs(f.n + g.n) <= t + 1 && E({ m: f.m + g.m - (2 * t + 1), n: f.n + g.n + (t + 1), l: f.l + g.l + t }), f.m + g.m == -(t + 1) && Math.abs(f.l + g.l) <= t && Math.abs(f.n + g.n) <= t + 1 && E({ m: f.m + g.m + (2 * t + 1), n: f.n + g.n - (t + 1), l: f.l + g.l - t }), f.n + g.n == t + 1 && Math.abs(f.l + g.l) <= t + 1 && Math.abs(f.m + g.m) <= t && E({ n: f.n + g.n - (2 * t + 1), l: f.l + g.l + (t + 1), m: f.m + g.m + t }), f.n + g.n == -(t + 1) && Math.abs(f.l + g.l) <= t + 1 && Math.abs(f.m + g.m) <= t && E({ n: f.n + g.n + (2 * t + 1), l: f.l + g.l - (t + 1), m: f.m + g.m - t })), _[m] = x;
        }), f.triangles.push([a[_[0]], a[_[1]]]);
      });
    });
  }
};
Mn([-1, 1, 0, 0], [0, 0, -1, 1]), Mn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const Rp = kp(T.N).scale(2 * T.N + 1).boundary("dirichlet");
var Mt = [], j = Rp.nodes;
function Fp() {
  const t = xn(j, (n) => Cp({ x: 0, y: 0 }, n) < T.center_size);
  H(t, (n) => {
    n.state = "liquid";
    let e = 0;
    for (; e++ < T.initial_agents; ) {
      let r = n.random_interior_point();
      Mt.push({
        state: "alive",
        E: T.agent_initial_energy,
        // no idea??
        home: n.index,
        x: r.x,
        y: r.y,
        theta: 2 * Math.PI * Math.random()
        // heading??
      });
    }
  });
}
const Dp = () => {
  T.timer = {}, T.tick = 0, Mt = [0], H(j, (t, n) => {
    t.index = n, t.n_collisions = 0, t.C = T.initial_nutrient_concentration.widget.value(), t.state = "agar";
  }), Fp();
}, Lp = () => {
  T.tick++;
  let t = !1;
  H(j, (e) => {
    e.dC = 0;
  }), H(j, (e) => {
    let r = T.nutrient_diffusion.widget.value() * e.C;
    e.dC -= r;
    let i = e.neighbors.length;
    H(e.neighbors, (a) => {
      a.dC += r / i;
    });
  }), H(j, (e) => {
    e.C += e.dC;
  });
  let n = V0(xn(Mt, (e) => e.state == "alive"));
  return H(n, (e) => {
    let r = j[e.home].C < T.feeding_rate ? 0 : T.feeding_rate;
    j[e.home].C = j[e.home].C - r, e.E = e.E + T.metabolic_efficiency.widget.value() * r - T.energy_loss, e.E < 0 && (e.state = "dead", e.time_of_death = T.tick), e.E > T.birth_energy && (e.E = e.E / 2, Mt.push({
      state: "alive",
      E: e.E,
      // this shoud be half
      home: e.home,
      x: e.x,
      y: e.y,
      theta: 2 * Math.PI * Math.random()
    })), e.theta += 2 * Math.PI * T.wiggle * (Math.random() - 0.5);
    let i = e.x + T.motility.widget.value() * Math.cos(e.theta), a = e.y + T.motility.widget.value() * Math.sin(e.theta);
    const o = j[e.home], s = (i - o.x) * (i - o.x) + (a - o.y) * (a - o.y);
    H(o.neighbors, (u) => {
      var l = (i - u.x) * (i - u.x) + (a - u.y) * (a - u.y);
      l < s && (u.state == "agar" ? (i = e.x, a = e.y, u.n_collisions += 1, u.n_collisions > T.resistance_of_medium.widget.value() && (u.state = "liquid")) : (e.home = u.index, u.is_boundary && (t = !0)));
    }), e.x = i, e.y = a;
  }), xn(Mt, (e) => e.state == "alive").length == 0 && (t = !0), t;
}, $n = T.N, Gi = X().domain([-$n, $n]), Ui = X().domain([-$n, $n]);
var zr = X().domain([0, 1]).range(["rgb(0,0,100,0.8)", "rgb(180,0,0,0.8)"]), vt, ge, ye;
const qp = (t, n) => {
  ge = n.display_size.width, ye = n.display_size.height, Gi.range([0, ge]), Ui.range([0, ye]), vt = t.node().getContext("2d"), Yi();
}, Yi = (t, n) => {
  vt.clearRect(0, 0, ge, ye), H(Mt, (e) => {
    vt.beginPath(), vt.arc(Gi(e.x), Ui(e.y), T.agentsize, 0, 2 * Math.PI), vt.fillStyle = e.state == "alive" ? zr(1) : zr(e.time_of_death / T.tick), vt.fill();
  });
};
function Hp(t, n, e) {
  let r = !1;
  r = Lp(), Yi(), r && (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"), B.press(n));
}
function me(t, n) {
  Dp(), qp(t, n);
}
var kr = {};
const Np = (t, n, e) => {
  B.value() == 1 ? kr = Ss(() => Hp(t, n), z.simulation.delay) : kr.stop(), n.select("#slider_initial_nutrient_concentration").transition(1e3).style("opacity", B.value() ? 0 : 1), n.select("#slider_initial_nutrient_concentration").selectAll("*").style("pointer-events", B.value() ? "none" : null);
}, Bp = (t, n, e) => {
  qn.update(() => zp(n)), B.update(() => Np(t, n)), Ln.update(() => {
    me(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), T.initial_nutrient_concentration.widget.update_end(() => {
    me(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  });
}, Xp = {
  name: "@explorables/scotts_world",
  title: "Scott's World",
  subtitle: "Growth patterns of microbial communities",
  description: "This explorable illustrates a model for pattern formation in microbial communities. Depending on parameters like food concentration, medium resistance and others, the emerging pattern exhibit different characteristics.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Gp(t, n = Ki) {
  const e = Tp(t, n), r = e.display, i = e.controls, a = e.grid;
  return Ip(i, a), Bp(r, i, n), me(r, n), {
    halt() {
      B.value() === 1 && B.press(i);
    },
    reset() {
      B.value() === 1 && B.press(i), qn.press(i), Ln.press(i);
    },
    config: n,
    meta: Xp
  };
}
export {
  Ki as config,
  Gp as default,
  Gp as load,
  Xp as meta
};
