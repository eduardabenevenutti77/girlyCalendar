import style from "./login.module.css"

export default function Login() {
    return (
        <>
            <p className={style.title}>girly calendar</p>

            <div className={style.card}>
                <p className={style.text}>Que bom ter você aqui! Criado para organizar seus dias com estilo e aquele toque único que só você tem.</p>
                <form>
                    <p className={style.textCampos}>Informe o seu e-mail: </p>
                    <input type="text" name="text" id="text" />

                    <p className={style.textCampos}>Informe a sua senha: </p>
                    <input type="password" name="password" id="password" />

                    <button>Registre-se</button>
                </form>

                <p className={style.textLink}>Ainda sem conta? Cadastre-se agora e comece a organizar seus dias com estilo! 🚀</p>
            </div>
        </>
    )
}