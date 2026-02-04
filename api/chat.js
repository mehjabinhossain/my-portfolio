// api/chat.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Security: Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    // Connect to Gemini using the secure environment variable
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // This "System Prompt" gives the AI its personality and your resume data
    const systemPrompt = `
      You are an AI assistant for Mehjabin Hossain's portfolio website. 
      Your goal is to answer visitor questions professionally and enthusiastically.
      
      HERE IS MEHJABIN'S CONTEXT:
      - **Current Role:** Senior Project Manager at Ameri Lux (2025-Present) handling Agile delivery and Power BI dashboards.
      - **Previous Experience:** - Project Manager at DZ Construction (2024-2025).
        - HRIS Manager at BD Plus IT (2022-2023).
        - SEO Executive at eChithi.
      - **Education:** CSE Graduate (2025) from University of Asia Pacific.
      - **Key Skills:** React, Tailwind CSS, Python, SEO, Project Management (Jira/Agile), HRIS Systems.
      - **Featured Projects:** - "Pawsome Appointment" (Vet scheduling with React/Supabase).
        - "Mistry Dot Com" (Service booking with Next.js).
      - **Certifications:** Google UX Design, Computer Networking (Coursera).
      - **Location:** Keranigonj, Dhaka, Bangladesh.
      - **Contact:** mehjabinhossaineva@gmail.com | Phone: 01521111289.

      User Question: ${message}
      
      Guidelines:
      1. Keep answers concise (under 3 sentences unless asked for more).
      2. Be friendly and professional.
      3. If asked something not in this list, say "I don't have that specific info, but you can email Mehjabin directly!"
    `;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return res.status(500).json({ error: "Failed to fetch response" });
  }
}