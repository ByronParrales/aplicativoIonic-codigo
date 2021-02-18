export interface RespuestaPost{
    ok: boolean;
    posts: Post[];
}
export interface Post {
    img?: string[];
    _id?: string;
    descripcion?: string;
    usuario?: Usuario;
    created?: string;
}
export interface Usuario{
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;
}
