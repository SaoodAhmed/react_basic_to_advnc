"use client"
import { useState } from "react";

const Form = () => {
  const [answer, setAnswer] = useState("")
  const [status, setStatus] = useState("typing")
  const [error, setError] = useState<any>(null)




  if(status==="success"){
      return <h1>That's right!</h1>
  }


  



  async function handleSubmit(e:any){
      e.preventDefault();

      setStatus("submitting")

      try {
          await submitForm(answer)
          setStatus("success")
          
      } catch (err) {
          setStatus("typing")
          setError(err)
          
      }

  }




  function handleTextareaChange(e:any){
      setAnswer(e.target.value)
  }




  return (
      <div className="py-4">
          <h2>City Quiz</h2>
          <p className="text-lg">In which city is there a billboard that turns air into drinkable water?</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 ">
              <div>
                  <textarea value={answer} onChange={handleTextareaChange} disabled={status === "submitting"}/>
              </div>
              <div>
                  <button className="px-4 py-1 " disabled={answer.length === 0 || status==="submitting"}>Submit</button>
              </div>
              {
                  error !== null && <p className="text-red-600">{error.message}</p>
              }
          </form>
      </div>
  )
}


function submitForm(answer:any){
  return new Promise((resolve:any, reject:any)=>{
      setTimeout(()=>{
          let shouldError = answer.toLowerCase() !== "saud";

          if(shouldError){
              reject(new Error('Good guess but a wrong answer. Try Again'))
          }else {
              resolve()
          }

      },1500)
  })
}

export default Form;
