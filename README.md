# GitHub Contribution Simulator (Educational)

This is a simple **JavaScript project** designed for **educational purposes** to demonstrate how GitHub contribution history works. It simulates commit activity on a repository, allowing you to see how commits appear on your GitHub contribution graph.

> **Note:** This project is purely for learning and experimentation. It is **not meant for creating fake contributions** to mislead others.

---

## Features

- Generates multiple commits with random dates within the past year.  
- Commits are made to a JSON file (`data.json`) to track changes.  
- Demonstrates how GitHub records commit activity visually on your profile.  
- Written in JavaScript using:
  - [moment](https://momentjs.com/) for date handling
  - [simple-git](https://github.com/steveukx/git-js) for Git operations
  - [random](https://www.npmjs.com/package/random) for generating random commit dates
  - [jsonfile](https://www.npmjs.com/package/jsonfile) for writing JSON data

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/asubash017/github-contribution-simulator.git
cd github-contribution-simulator
