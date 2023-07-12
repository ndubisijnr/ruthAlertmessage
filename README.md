
# Ruthly

A simple Alert message for simple web applications 

Use Ruthly for success and error pop ups that suits your project. 

made with ❤️
And for someone never to be forgotten.



## Installation

Install ruthly with npm

```bash
  npm i ruthly
```
    
## Usage/Examples

```javascript
import Ruth from 'ruthly'

//success 
Ruth.vex({title:'Ruth at your service', icon:'success'})

//error 
Ruth.vex({title:'oops something is not right', icon:'error'})

//adding auto dismissal timeout 
Ruth.vex({title:'oops something is not right', icon:'error', timeout:2000})
```

