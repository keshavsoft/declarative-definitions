# declarative-definitions

> **High-level declarative UI component blueprints, option configurations, and assembly contracts for JSON-to-DOM compilers.**

---
[![LIVE DOCS](https://img.shields.io/badge/LIVE-DOCUMENTATION-blue?style=for-the-badge)](https://keshavsoft.github.io/declarative-definitions/)
[![NPM](https://img.shields.io/badge/NPM-PACKAGE-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/declarative-definitions)
[![GITHUB](https://img.shields.io/badge/GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github)](https://github.com/keshavsoft/declarative-definitions)

---

Part of the **KeshavSoft Declarative UI Architecture** (Tier 4: Component Blueprints & Options).

---

## 📖 The Story

In building web applications, developers frequently rebuild components (tables, selects, forms, cards) with tightly coupled options like search bars, pagination, and button actions.

`declarative-definitions` serves as the top-level **architectural contract**:
1. **Decoupled Blueprints**: Bundles base tag specifications (`baseFromSpec`) and multi-step transformation `instructions`.
2. **Standard Component Library**: Supplies production-ready contracts for 10 UI elements (`table`, `form`, `select`, `datalist`, `card`, `accordion`, `menu`, `list`, `modal`, `tabs`).
3. **Plug-and-Play Options**: Declarative configurations for search input frames, serial numbering roots, and action buttons without writing imperative UI code.

---

## 📦 Installation

```bash
npm install declarative-definitions
```

---

## 🚀 Usage

### 1. Import Definitions in ES Modules

```javascript
import definitions from "declarative-definitions";

// Inspect table blueprints
console.log(definitions.table.simple);
```

### 2. Import Specific Version

```javascript
import definitions from "declarative-definitions/v1";
```

### 3. Direct JSON Import

```javascript
import definitions from "declarative-definitions/definitions.json" with { type: "json" };
```

---

## 🏛️ Component Definition Contract Example

```json
{
  "table": {
    "simple": {
      "baseFromSpec": "tableSimple",
      "instructions": [
        "buildColgroup",
        "buildHeader",
        "buildBody"
      ],
      "options": {
        "search": {
          "initialize": "searchFrame",
          "showLabel": "searchLabel",
          "showHelper": "searchHelper",
          "showInput": "searchInput"
        },
        "serial": {
          "initialize": "serialRoot"
        }
      }
    }
  }
}
```

---

## 🌐 Interactive Monaco Studio & Documentation

Explore, edit, and test all component definitions live:
* **Documentation & Story:** [https://keshavsoft.github.io/declarative-definitions/](https://keshavsoft.github.io/declarative-definitions/)
* **Monaco Definitions Studio:** [https://keshavsoft.github.io/declarative-definitions/monaco/v1/](https://keshavsoft.github.io/declarative-definitions/monaco/v1/)

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
