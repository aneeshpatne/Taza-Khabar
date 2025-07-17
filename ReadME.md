# 🗞️ Taza Khabar

**Fresh News, Powered by AI**

Taza Khabar is an intelligent news aggregation and analysis system that combines web scraping, AI-powered journalism, and automated reporting to deliver comprehensive, multi-perspective news reports on any topic.

## 🌟 Features

- **🔍 Intelligent News Discovery**: Automatically searches and discovers relevant news articles from across the web
- **🤖 AI-Powered Journalism**: Uses GPT-4 to analyze raw news data and generate professional, multi-angle news reports
- **📊 Multi-Perspective Analysis**: Extracts diverse viewpoints - economic, political, social, technological, and human interest angles
- **🗄️ Database Integration**: Stores generated reports in PostgreSQL for future reference and analysis
- **🔗 Web Scraping**: Extracts full article content using Playwright for comprehensive data gathering
- **⚡ Real-time Processing**: Fast API-based backend for quick news processing and report generation

## 🏗️ Architecture

The project consists of two main components:

### 🤖 AI Engine (`/ai`)

- **News Agent**: Core AI journalist that generates comprehensive reports
- **Pipeline**: Orchestrates the entire news processing workflow
- **Tools**: Web search capabilities integrated with AI models
- **Database**: PostgreSQL integration with Drizzle ORM

### 🖥️ Backend Server (`/server`)

- **FastAPI Server**: RESTful API for news search and scraping
- **Search Tool**: Google search integration for news discovery
- **Scrape Tool**: Playwright-based web scraping for article content
- **Custom Google Search**: Modified Google search library for news-specific queries

## 🛠️ Technology Stack

### AI & Language Models

- **OpenAI GPT-4**: For intelligent news analysis and report generation
- **AI SDK**: Modern AI integration framework
- **Zod**: Schema validation for AI tool parameters

### Backend & API

- **FastAPI**: High-performance Python web framework
- **Playwright**: Modern web scraping and browser automation
- **Axios**: HTTP client for API communication

### Database & ORM

- **PostgreSQL**: Robust relational database for news storage
- **Drizzle ORM**: Type-safe database operations
- **pg**: PostgreSQL client for Node.js

### Development & Utilities

- **Node.js**: JavaScript runtime for AI components
- **Python 3.13**: Backend server runtime
- **dotenv**: Environment variable management

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.13+
- PostgreSQL database
- OpenAI API key

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/aneeshpatne/Taza-Khabar.git
cd Taza-Khabar
```

### 2. Set Up the AI Engine

```bash
cd ai
npm install
```

### 3. Set Up the Backend Server

```bash
cd ../server
pip install fastapi uvicorn playwright pydantic
# Install Playwright browsers
playwright install
```

### 4. Install Custom Google Search

```bash
cd server/googlesearch
pip install -e .
```

### 5. Environment Configuration

Create a `.env` file in the `/ai` directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgresql://username:password@localhost:5432/taza_khabar
```

### 6. Database Setup

Set up your PostgreSQL database and run the schema migrations using Drizzle.

## 🚀 Usage

### 1. Start the Backend Server

```bash
cd server/Tools
python Tool.py
```

The API server will start on `http://localhost:8000`

### 2. Run the News Pipeline

```bash
cd ai
node pipline.js
```

This will:

1. Search for news articles on "India News" (configurable)
2. Scrape the full content of discovered articles
3. Generate a comprehensive AI news report
4. Save the report to the database

### 3. API Endpoints

#### POST `/tool`

Search and scrape news articles

```json
{
  "query": "Your news topic",
  "num_results": 20
}
```

#### GET `/`

Health check endpoint

## 📝 How It Works

1. **News Discovery**: The system searches Google News for articles related to your specified topic
2. **Content Extraction**: Playwright scrapes the full text content from discovered news URLs
3. **AI Analysis**: GPT-4 analyzes the raw content and identifies 5-8 diverse story angles
4. **Research Enhancement**: For each angle, the AI conducts additional web searches for comprehensive coverage
5. **Report Generation**: A professional news report is generated with proper journalistic structure
6. **Database Storage**: The final report is stored in PostgreSQL for future reference

## 🔧 Configuration

### Customizing News Topics

Edit the topic in `/ai/pipline.js`:

```javascript
let dump = await axios.post("http://localhost:8000/tool", {
  query: "Your Custom Topic", // Change this
  num_results: 20,
});
```

### Database Schema

The news reports are stored using this schema:

```javascript
export const news = pgTable("news", {
  id: integer("id").primaryKey(),
  modifiedAt: timestamp("modified_at").defaultNow(),
  content: text("content").notNull(),
});
```

**Taza Khabar** - Bringing you fresh perspectives on the news that matters. 📰✨
