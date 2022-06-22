# mock-progress

## Installation

[![NPM](https://nodei.co/npm/mock-progress.png?compact=true)](https://nodei.co/npm/mock-progress/)

#### To install the latest stable version:

```
npm install --save mock-progress
```

#### Basic usage:

```jsx
import React from "react";
import { useMockProgress } from "mock-progress";

function App() {

  const { progress } = useMockProgress(); //get progress value

  return (
    <div className="App">    
        <p>Progress: {progress}</p> {/* display progress on screen */}
    </div>
  );
}
```
