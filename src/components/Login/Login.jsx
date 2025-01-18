import { useState } from "react"

function Login (props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  return (
    <div>
      <div class="mb-3 red">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <button type="button" class="btn btn-primary">Base class</button>
    </div>
    </div>
  )
}

export default Login