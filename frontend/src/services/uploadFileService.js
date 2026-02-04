async function requestPresign(file, userId) {
  const api = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
  if (!api) throw new Error("VITE_API_URL missing");

  const safeType = file.type || "application/octet-stream";

  const res = await fetch(`${api}/uploads/presign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      contentType: safeType,
      originalName: file.name,
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`presign failed: ${res.status} ${txt}`);
  }

  return res.json();
}

export async function uploadToS3(file, userId) {
  const { url, fields, key, uploadId } = await requestPresign(file, userId);

  const form = new FormData();

  Object.entries(fields).forEach(([k, v]) => {
    form.append(k, String(v));
  });

  form.append("file", file);

  const up = await fetch(url, { method: "POST", body: form });

  if (!up.ok) {
    const txt = await up.text();
    throw new Error(`upload failed: ${up.status} ${txt}`);
  }

  return { key, uploadId };
}
