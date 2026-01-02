#  Agentic AI-Based Intelligent Quiz Generation System

An advanced **multi-agent AI system** that transforms raw educational content into **structured learning material**, including concept hierarchies, level-wise quizzes, validated questions, answers, and expert explanations — all generated autonomously using coordinated AI agents.

This project demonstrates the **Agentic AI architecture** paradigm, where multiple specialized AI agents collaborate to perform complex reasoning tasks end-to-end.
---

##  Project Overview

The system takes **raw text input** (notes, articles, textbooks, or documents) and converts it into:

* Structured **concept hierarchy**
* **Level-based quiz questions**
* Automatically **validated questions**
* Accurate **answers**
* **Expert-level explanations**
* Persistent **user learning history**

This approach mimics how a human educator would analyze, structure, validate, and explain learning content — but fully automated.

---

##  Agent Architecture (Core Innovation)

The system follows a **multi-agent pipeline**, where each agent has a dedicated responsibility.

### Agent 1: Text Chunking Agent

**Purpose:**
Breaks large input text into semantically meaningful chunks to improve LLM comprehension.

**Input:** Raw user text
**Output:** Logical text chunks

---

### Agent 2: Concept Extraction Agent

**Purpose:**
Identifies and extracts **core concepts**, topics, and subtopics from each chunk.

**Input:** Text chunks
**Output:** List of key concepts

---

### Agent 3: Hierarchy Builder Agent

**Purpose:**
Organizes extracted concepts into a **structured knowledge hierarchy** (main topics → subtopics → subpoints).

**Input:** Extracted concepts
**Output:** Hierarchical knowledge graph (JSON format)

---

### Agent 4: Quiz Generator Agent

**Purpose:**
Generates **level-based quiz questions** (easy, medium, hard) using the hierarchy.

**Input:** Concept hierarchy
**Output:** Structured quiz questions

---

### Agent 5: Quiz Validator Agent

**Purpose:**
Ensures quality, relevance, and difficulty alignment of generated questions.

**Validation Parameters:**

* Concept relevance
* Difficulty correctness
* Clarity and completeness

If validation fails → quiz is regenerated (agentic loop).

---

### Agent 6: Answer Generator Agent

**Purpose:**
Produces accurate answers for each generated question.

**Input:** Quiz questions
**Output:** Structured answers

---

### Agent 7: Expert Explanation Agent

**Purpose:**
Generates detailed, learner-friendly explanations using:

* Concept hierarchy
* Quiz context
* Conceptual relationships

---

## System Architecture Flow

```
User Input
   ↓
Text Chunking Agent
   ↓
Concept Extraction Agent
   ↓
Hierarchy Builder Agent
   ↓
Quiz Generator Agent
   ↓
Validation Agent (Looped if needed)
   ↓
Answer Generator Agent
   ↓
Expert Explanation Agent
   ↓
Database Storage (User History)
```

---

## Data Persistence (MongoDB)

All user interactions are stored for future reference and personalization.

### Schema: QuizHistory

```js
{
  user: ObjectId,
  title: String,
  inputText: String,
  output: {
    hierarchy: Object,
    quiz: Object,
    answers: Object,
    explanation: Object
  }
}
```

This enables:

* Learning history tracking
* Content revision
* Personalized learning analytics

---

## API Endpoints

### Authentication Routes

| Method | Endpoint             | Description                            |
| ------ | -------------------- | -------------------------------------- |
| `POST` | `/api/auth/register` | Register a new user                    |
| `POST` | `/api/auth/login`    | Authenticate user and return JWT token |

---

###AI Quiz Generation Routes

| Method | Endpoint             | Description                                                   |
| ------ | -------------------- | ------------------------------------------------------------- |
| `POST` | `/api/quiz/generate` | Generates quiz, answers, explanations using Agentic AI        |
| `GET`  | `/api/quiz/chats`    | Fetch all previously generated quizzes for the logged-in user |

> All quiz-related routes are protected using **JWT Authentication**

---



## Tech Stack

* **Backend:** Node.js, Express.js
* **AI Model:** Gemini Flash 3 (LLM)
* **Database:** MongoDB + Mongoose
* **Architecture:** Agentic AI (Multi-Agent System)
* **Authentication:** JWT-based user system
* **Design Pattern:** Modular + Service-Oriented

---

## How to Run the Project Locally

Follow the steps below to set up and run the **Agentic AI Text Extractor** on your local machine.

---

### 1. Clone the Repository

```bash
git clone https://github.com/varun-ai69/AGENTIC-AI-TEXT-EXTRACTOR-.git
cd AGENTIC-AI-TEXT-EXTRACTOR-
```

---

### 2. Install Dependencies

Make sure you have **Node.js (v18+)** and **npm** installed.

```bash
npm install
```

This will install all required dependencies, including:

```json
{
  "@google/generative-ai": "^0.24.1",
  "bcrypt": "^6.0.0",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.0.2"
}
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
MONGO_URL=mongodb://localhost:27017/AGENTIC-AI
JWT_SECRET=your_jwt_secret_key
```

 **Notes:**

* Make sure MongoDB is running locally.
* Use a strong secret for `JWT_SECRET`.
* Get your Gemini API key from Google AI Studio.

---

### 4. Start the Server

```bash
npm start
```


---

### 5. Server Running Successfully 

Once started, you should see:

```
Server running on port 3000
MongoDB connected successfully
```

---

### 6. API Usage

Base URL:

```
http://localhost:3000
```

Example endpoints:

* `POST /api/auth/register` – User registration
* `POST /api/auth/login` – User login
* `POST /api/quiz/generate` – Generate quiz using Agentic AI
* `GET  /api/quiz/chats` – Fetch previous generated sessions

All protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

### You're Ready to Go!

Your **Agentic AI Text Extraction & Quiz Generation System** is now running locally 
You can connect it with frontend, Postman, or any API client.

---
## Future Scope & Enhancements

### 1. Adaptive Learning Engine

* Track user performance over time
* Auto-adjust difficulty level
* Personalized learning paths

### 2. Learning Analytics Dashboard

* Concept mastery score
* Weak-area detection
* Learning progress graphs

### 3. Memory-Augmented AI

* Long-term memory per user
* Concept reinforcement over time
* Smart revision scheduling (spaced repetition)

### 4. Conversational Tutor Mode

* Real-time Q&A chat over generated content
* Voice-based interaction (Speech-to-Text + TTS)

### 5. Multimodal Input Support

* PDF, PPT, DOCX, Image-based content
* OCR + Vision-based concept extraction

### 6. LMS / EdTech Integration

* Integration with LMS platforms
* Teacher dashboards
* Auto-evaluation reports

### 7. Enterprise Features

* Role-based access
* Organization-level dashboards
* API monetization model

---

## Conclusion

This project demonstrates a **true Agentic AI system**, not just prompt chaining.
It simulates human-like reasoning, validation, and explanation workflows—making it highly suitable for:

* EdTech platforms
* Intelligent tutoring systems
* Research assistants
* Knowledge automation products
