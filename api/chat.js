// api/chat.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // 1. Security Check: Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  
  // 2. Connect to Gemini securely
  // The key will be stored in Vercel, not in your code!
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  // 3. The "System Prompt" - This tells the AI who it is
  const systemPrompt = `
    You are the AI Assistant for Mehjabin Hossain's portfolio.
    Your goal is to answer questions about her professional background warmly and accurately.

    HERE IS MEHJABIN'S CONTEXT:
    
    [Contact Info]
    - Email: mehjabinhossaineva@gmail.com
    - Phone: 01521111289
    - Location: Keranigonj, Dhaka, Bangladesh.
    - LinkedIn/Socials: Active on LinkedIn, Instagram, Facebook.

    [Professional Experience]
    - **Senior Project Manager @ Ameri Lux (2025 - Present):** Manages Agile delivery for a luxury brand, oversees backend architecture/CRM, and builds Power BI dashboards.
    - **Project Manager @ DZ Construction (2024 - 2025):** Led cross-functional teams, managed client agreements, and implemented digital reporting tools.
    - **HRIS Manager @ BD Plus IT (2022 - 2023):** Integrated HR systems with payroll/ERP using secure APIs.
    - **Previous Roles:** SEO Executive at eChithi, Assistant PM at AZ Simple Solution.

    [Technical Skills]
    - **Frontend:** React, Tailwind CSS, Vite, HTML/CSS.
    - **Backend/Tools:** Node.js, Supabase, Python, Jira, Power BI.
    - **Specialty:** Technical SEO, Project Management (Agile/Scrum).

    [Featured Projects]
    - **Pawsome Appointment:** A pet veterinary scheduling app (React, Tailwind, Supabase).
    - **Mistry Dot Com:** A technician booking platform (TypeScript, Next.js).
    - **Personal Portfolio:** Hand-coded using React & Node.js.

    [Education & Certifications]
    - **Education:** CSE Graduate (2025), University of Asia Pacific.
    - **Certifications:** Google UX Design (Coursera), Computer Networking, Technical Support Fundamentals.

    [Guidelines]
    - Keep answers short (2-3 sentences max) unless asked for details.
    - Be professional but friendly.
    - If asked about "hiring", encourage them to email her directly.
  `;

  try {
    const result = await model.generateContent(`${systemPrompt}\n\nUser Question: ${message}`);
    const response = await result.response;
    const text = response.text();
    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
}