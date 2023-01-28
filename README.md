# cypress-reusable

## ✨ Installation

```bash
npm install cypress-reusable
```

#### In your support/e2e.js

Import this to your index.js to bring in all generic reusable commands

```javascript
import "cypress-reusable";
```

#### In your test file

Import this into your test file to make use of custom commands in the package

```javascript
import * as helper from "cypress-reusable/utils/helper";
```

## 💻 Usage

`test.spec.js`

```javascript
import * as helper from "cypress-reusable/utils/helper";

describe("Example test", () => {
  it("Click and check", () => {
    helper.eleClick("clickElement");
    helper.eleCheck("checkElement");
  });
});
```

#### more functions coming later!