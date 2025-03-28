import style from "./login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('clicou no botão')

        if (!email || !password) {
            console.log("caiu no if de verificação")
            toast.warning("Verificamos que os campos não foram preenchidos, por favor, retorne ao formulário e preencha os campos!");
        }
    }

    return (
        <>
            <p className={style.title}>girly calendar</p>

            <div className={style.card}>
                <p className={style.text}>Que bom ter você aqui! Criado para organizar seus dias com estilo e aquele toque único que só você tem.</p>
                <form>
                    <p className={style.textCampos}>Informe o seu e-mail: </p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />

                    <p className={style.textCampos}>Informe a sua senha: </p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />

                    <button type="submit" onClick={handleClick}>Login</button>
                    <ToastContainer />

                </form>
                <p className={style.textLink}>Ainda sem conta? <Link to='/cadastro' className={style.Link}>Cadastre-se agora</Link> e comece a organizar seus dias com estilo! 🚀</p>
            </div>
        </>
    )
}