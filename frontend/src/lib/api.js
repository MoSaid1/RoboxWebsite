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
  const query = category && category !== "all" ? `?category=${encodeURIComponent(category)}` : "";
  return request(`/products.php${query}`);
}

export function getProduct(slug) {
  return request(`/products.php?slug=${encodeURIComponent(slug)}`);
}

export function getPartners() {
  return request(`/partners.php`);
}

export function getBlogs() {
  return request(`/blogs.php`);
}

export function getBlog(slug) {
  return request(`/blogs.php?slug=${encodeURIComponent(slug)}`);
}

export async function submitContact(payload) {
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
