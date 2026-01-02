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

## Tech Stack

* **Backend:** Node.js, Express.js
* **AI Model:** Gemini Flash 3 (LLM)
* **Database:** MongoDB + Mongoose
* **Architecture:** Agentic AI (Multi-Agent System)
* **Authentication:** JWT-based user system
* **Design Pattern:** Modular + Service-Oriented

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
