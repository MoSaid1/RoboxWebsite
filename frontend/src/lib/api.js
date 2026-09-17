import staticProducts from "../data/staticProducts.json";
import staticPartners from "../data/staticPartners.json";
import staticBlogs from "../data/staticBlogs.json";

// TEMPORARY: the PHP/MySQL backend (see /backend) isn't deployed yet, so
// product/partner/blog content ships as static bundled data instead of being
// fetched over the network. Contact form submissions still hit the real API
// (there is no honest static fallback for a write operation). Once the
// backend is live on Hostinger with a real VITE_API_URL, set this to false
// to switch every read back to the live database.
const STATIC_MODE = true;

const BASE_URL = import.meta.env.VITE_API_URL || "/api";

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export function getProducts(category) {
  if (STATIC_MODE) {
    const list =
      !category || category === "all" ? staticProducts : staticProducts.filter((p) => p.category === category);
    return Promise.resolve(list);
  }
  const query = category && category !== "all" ? `?category=${encodeURIComponent(category)}` : "";
  return request(`/products.php${query}`);
}

export function getProduct(slug) {
  if (STATIC_MODE) {
    const product = staticProducts.find((p) => p.slug === slug);
    return product ? Promise.resolve(product) : Promise.reject(new Error("Product not found"));
  }
  return request(`/products.php?slug=${encodeURIComponent(slug)}`);
}

export function getPartners() {
  if (STATIC_MODE) return Promise.resolve(staticPartners);
  return request(`/partners.php`);
}

export function getBlogs() {
  if (STATIC_MODE) {
    const list = [...staticBlogs]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map(({ sections, text, ...rest }) => rest);
    return Promise.resolve(list);
  }
  return request(`/blogs.php`);
}

export function getBlog(slug) {
  if (STATIC_MODE) {
    const blog = staticBlogs.find((b) => b.slug === slug);
    return blog ? Promise.resolve(blog) : Promise.reject(new Error("Blog post not found"));
  }
  return request(`/blogs.php?slug=${encodeURIComponent(slug)}`);
}

export async function submitContact(payload) {
  // Always goes to the real API — faking success here would tell a real
  // visitor their message was received when nobody would ever see it.
  const res = await fetch(`${BASE_URL}/contact.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(body.error || "Failed to submit form");
    err.fields = body.fields;
    throw err;
  }
  return body;
}
