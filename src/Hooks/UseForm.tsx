import { FormEvent, ReactElement, useState } from "react";

export function UseFormHook(step: ReactElement[]){
     const [currentStep, setCurrentStep] = useState(0)

     function changeStep(i:number,e?:FormEvent){
          if(e) e.preventDefault()

          if(i < 0 || i<= step.length){
               return 
          }
          setCurrentStep(i)

     }

     return{
          currentStep, 
          currentComponent: step[currentStep],
          changeStep
     }
}