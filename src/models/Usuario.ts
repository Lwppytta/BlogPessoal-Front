import Postagem  from "./Postagem";

export default interface Usuario {
  id: number;
  nomeUsuario: string;
  emailUsuario: string;
  fotoUsuario: string;
  senha: string;
  postagem?: Postagem | null;
}