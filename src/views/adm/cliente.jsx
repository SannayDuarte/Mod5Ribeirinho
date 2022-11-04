import React from 'react'
import NavbarADM from '../../components/navigate/navbarADM'

const cliente = () => {
  return (
    <div>
      <NavbarADM />
      <main className="container conteudo my-4 p-4">
          <h1>Clientes cadastrados</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
              <th>Telefone</th>
              <th>Logradouro</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="d-flex justify-content-start align-items-center">
                <div>

                  <button className="btn" type={"button"} data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop<%=c.getId()%>">
                    <i className="gg-pen"></i>
                  </button>


                  <div className="modal fade" id="staticBackdrop<%=c.getId()%>"
                    data-bs-backdrop="static" data-bs-keyboard="false"
                    tabIndex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Atualização</h5>
                          <button type="button" className="btn-close"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="./cliente-update">
                          <div className="modal-body">
                            <div className="mb-3">
                              <label htmlFor="id" className="form-label">ID</label>
                              <input type="text" className="form-control" id="id"
                                name="id" value="<%=c.getId()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">Nome Completo</label>
                              <input type="text" className="form-control" id="name"
                                name="name" value="<%=c.getNome()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="cpf" className="form-label">CPF</label> <input
                                type="text" className="form-control" id="cpf" name="cpf"
                                placeholder="xxx.xxx.xxx-xx" value="<%=c.getCpf()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="date" className="form-label">Data de
                                nascimento</label> <input type="text" className="form-control"
                                  id="date" name="date" placeholder="dd/mm/aaaa"
                                  value="<%=c.getNasc() %>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="tel" className="form-label">Telefone</label> <input
                                type="tel" className="form-control" id="tel" name="tel"
                                placeholder="(xx) xxxxx-xxxx" value="<%=c.getTel()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="idLocal" className="form-label"> Cidade </label> <select
                                id="idLocal" name="idLocal" className="form-select">
                                <option value="DEFAULT">Escolha uma cidade</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="log" className="form-label">Logradouro</label> <input
                                type="text" className="form-control" id="log" name="log" value="<%=c.getEnde()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label> <input
                                type="email" className="form-control" id="email" name="email" value="<%=c.getEmail()%>" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="senha" className="form-label">Senha</label> <input
                                type="password" className="form-control" id="senha"
                                name="senha" value="<%=c.getSenha()%>" />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                              data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-primary" type="submit">Atualizar</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> <a href="./cliente-delet?id=<%=c.getId()%>"
                  onClick="return confirm('Deseja Excluir?')" className="btn"><i
                    className="gg-close"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </main></div>
  )
}

export default cliente;