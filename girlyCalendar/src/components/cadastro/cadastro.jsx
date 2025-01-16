import styles from "./cadastro.module.css"

export default function Cadastro() {
    return (
        <>
            <p className={styles.title}>girly calendar</p>

            <div className={styles.card}>
                <p className={styles.text}>Que alegria tê-la de volta! Faça login na sua conta e aproveite todos os benefícios de um dia bem planejado.</p>
                <form>
                    <p className={styles.textCampos}>Informe o seu nome: </p>
                    <input type="text" name="text" id="text" />

                    <p className={styles.textCampos}>Informe o seu e-mail: </p>
                    <input type="text" name="text" id="text" />

                    <p className={styles.textCampos}>Informe a sua senha: </p>
                    <input type="password" name="password" id="password" />

                    <button>Registre-se</button>
                </form>

                <p className={styles.details}>Pequenos momentos podem se transformar em grandes histórias</p>
                {/* <p className={styles.textLink}>Ainda sem conta? <Link to='/cadastro' className={style.Link}>Cadastre-se agora</Link> e comece a organizar seus dias com estilo! 🚀</p> */}
            </div>
        </>
    )
}