export default async function handler(req, res) {
  // 1. Set CORS Headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // 2. Handle the "Preflight" (OPTIONS) request immediately
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. Security: Allow only POST requests for the actual chat
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API Key is missing in Vercel Settings" });
  }

  try {
    const url = "https://api.openai.com/v1/chat/completions";

    // 4. The System Prompt (Updated with your profile data)
    const systemPrompt = `
      You are Mehjabin Hossain's AI Portfolio Assistant.
      
      Here is Mehjabin's Profile:
      - **Current Role:** Senior Project Manager at Ameri Lux (2025-Present).
      - **Experience:** Project Manager at DZ Construction, HRIS Manager at BD Plus IT.
      - **Education:** CSE Graduate (2025) from University of Asia Pacific.
      - **Skills:** React, Tailwind CSS, Python, SEO, Agile/Jira, Project Management.
      - **Contact:** mehjabinhossaineva@gmail.com | 01521111289.
      - **Location:** Keraniganj, Dhaka, Bangladesh.

      Instructions:
      - Answer professionally, briefly, and enthusiastically.
      - If the answer isn't in the profile, ask them to email Mehjabin.
    `;

    // 5. Send request to OpenAI
    const response = await fetch(url, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API Error:", data);
      return res.status(response.status).json({ error: data.error?.message || "API Error" });
    }

    const reply = data.choices[0].message.content;
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}