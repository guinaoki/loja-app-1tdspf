import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Identifucação de Usuários</h1>
        <h2>-</h2>
        <div>
            <form className='form-login'>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='idEmail'
                        placeholder='Digite seu Email.' value=""onChange=""/>
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="senha" name='senha' id='idSenha'/>
                        <input type="senha" name='senha' id='idSenha'
                        placeholder='Digite sua Senha.' value=""onChange=""/>
                    </div>
                    <div>LOGIN</div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
