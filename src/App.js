import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ribeirinho Viagem</h1>
      <p className='tit'>
      Faça seu cadastro: 
      </p>
      <form className='cadastro'>
      <div class="mb-3" >
      <label for="exampleFormControlInput1" class="form-label">Nome</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva seu Nome" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3" >
      <label for="exampleFormControlInput1" class="form-label">RG</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva seu RG" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">CPF</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva seu CPF " aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3" >
      <label for="exampleFormControlInput1" class="form-label">Celular</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva seu Celular" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Sexualidade</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva sua Sexualidade" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Cep</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva seu Cep" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Estado</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva o nome do seu Estado" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Cidade</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva o nome da sua Cidade" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Bairro</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva o nome do seu Bairro" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Rua</label>
      <input class="form-control form-control-sm" type="text" placeholder="Escreva o nome da sua Rua" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Email</label>
      <input class="form-control form-control-sm" type="text" placeholder="Digite seu Email" aria-label=".form-control-sm example"></input>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Senha</label>
      <input class="form-control form-control-sm" type="text" placeholder="Digite sua Senha" aria-label=".form-control-sm example"></input>
      </div>
      </form>
      <button type="button" className="btn-cas">
        <a href='login.js'>Cadastre-se</a>
      </button>
      </header>
    </div>
  );
}

export default App;
