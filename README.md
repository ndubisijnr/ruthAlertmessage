
# ruthly-alert

Ruthly is a lightweight and customizable alert message library for web applications. It provides sleek and responsive success, error, warning, and info pop-ups with two distinct styles: FlyingBox and BossyBox. Designed for simplicity and flexibility, Ruthly works seamlessly with vanilla JavaScript, React, and Vue, making it an easy-to-integrate solution for user notifications. 🚀


## Installation

Install ruthly with npm

```bash
  npm i ruthly
```
    
## Usage/Examples

```javascript
import { RuthdoAlert } from 'ruthly'; 

//success 
RuthdoAlert({title:'Ruth at your service', icon:'success', timeout:2000, type:flyingruthly, callback:()=>{}})

//error 
RuthdoAlert({title:'oops something is not right', icon:'error', timeout:2000, type:flyingruthly, callback:()=>{}})

```

