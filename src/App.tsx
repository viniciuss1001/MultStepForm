import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'
import './Styles.css'
import { UseForm } from './components/UserForm/UseForm'
import { Review } from './components/ReviewForm/ReviewForm'
import { Thanks } from './components/Thanks/Thanks'
import { UseFormHook } from './Hooks/UseForm'

export function App() {
  const formComponents= [
    <UseForm/>, <Review />, <Thanks />
  ]

  const {changeStep, currentComponent,currentStep} = UseFormHook(formComponents)

  return (
    <div className=''>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes em tê-lo conosco, fique bem e volte sempre.
        </p>
      </div>
      <div className="form-container">
        <p>
          Etapas
        </p>
        <form onSubmit={(e) => changeStep(currentStep +1, e)}>
        <div className="input-container">
          {currentComponent}
        </div>
          <div className="actions">
            <button type="button"
            onClick={()=> changeStep(currentStep - 1)}
            >
            <ArrowCircleLeft />
            Voltar
            </button>
            <button type="submit" 
            onSubmit={(e) => changeStep(currentStep + 1, e)}
            >
            Próximo
            <ArrowCircleRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
