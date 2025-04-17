# SoloSync - Offline-First Code Editor

A **zero-dependency, offline-first** code editor that saves your work locally using CRDTs. Never lose code again—even without internet!

## ✨ Features

- **Offline editing** - Works without internet (saves to browser storage)
- **Conflict-free sync** - Powered by Automerge CRDTs (ready for multiplayer expansion)
- **Syntax highlighting** - Supports JS/TS/HTML/CSS
- **Zero backend** - 100% client-side (deploys anywhere)

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **State Management**: Automerge (CRDTs)
- **Storage**: localStorage (or IndexedDB for large docs)
- **Syntax Highlighting**: `react-syntax-highlighter`

## 🚀 Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/tobias-omondi/solosync.git
