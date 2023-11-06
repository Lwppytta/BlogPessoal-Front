function Navbar() {
    return (
        <>
            <div className='w-full bg-violet-600 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        <div>Postagem</div>
                        <div>Temas</div>
                        <div>Cadastrar</div>
                        <div>Perfil</div>
                        <div>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar