export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (url.pathname === "/api/signup" && request.method === "POST") {
      const body = await request.json()
      const { full_name, email, password } = body

      // validate inputs (optional)

      // insert into D1
      await env.DB.prepare(
        "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)"
      ).bind(full_name, email, password).run()

      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      })
    }

    return new Response("Not Found", { status: 404 })
  }
}
