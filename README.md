# mock-progress-react

## Installation

[![NPM](https://nodei.co/npm/mock-progress-react.png?compact=true)](https://nodei.co/npm/mock-progress-react/)

#### To install the latest stable version:

```
npm install --save mock-progress-react
```



## Basic usage:



```jsx
import React from "react";
import { useMockProgress } from "mock-progress-react";

function App() {

  const { start, finish, progress } = useMockProgress(); 
  return (
    <div className="App">    
        <p>Progress: {progress}</p> 
        <button onClick={start}> start progress</button>  
        <button onClick={finish}> complete progress</button> 
    </div>
  );
}
```



## Customize parameters:



```jsx
import React from "react";
import { useMockProgress } from "mock-progress-react";

function App() {

  const { progress, finish, start } = useMockProgress({timeInterval:1000, autoComplete:false});
  return (
    <div className="App">    
        <p>Progress: {progress}</p>
        <button onClick={start}> start progress </button>  
        <button onClick={finish}> complete progress</button> 
    </div>
  );
}
```

## Demo



## Return values

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>progress</td>
    <td>number</td>
    <td>The actual progress value</td>
  </tr>
  <tr>
    <td>start</td>
    <td>function</td>
    <td>Function to start progress. Progress will only be started by this function not on component mount. P.S : if progress has finished already, it will not be reset to 0 on calling start again.</td>
  </tr>
  <tr>
    <td>finish</td>
    <td>function</td>
    <td>Function to finish progress. Progress will be completed i.e. set to 100 whenever this function is called.</td>
  </tr>
</table>

## API

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>timeInterval</td>
    <td>number</td>
    <td>false</td>
    <td>500</td>
    <td>Time interval in milliseconds for increment in progress</td>
  </tr>
  <tr>
    <td>autoComplete</td>
    <td>boolean</td>
    <td>false</td>
    <td>true</td>
    <td>Allows user to control if progress will be completed manually or not. If true, progress automatically completes to max i.e. 100. If false, progress will reach till manual max i.e. 98 and can only be set to 100 when user calls finish function manually</td>
  </tr>
</table>

## License

[![NPM](https://img.shields.io/npm/l/mock-progress-react)](https://github.com/Mominadar/mock-progress-react/blob/main/LICENSE)
