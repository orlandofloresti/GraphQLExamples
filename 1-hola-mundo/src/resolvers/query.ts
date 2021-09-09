import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
    Query :{
        hola(): string {
            return 'Hola mundo';
        },
        holaConNombre( __: void, { nombre } ) : string {
            return `Hola ${nombre}`;
        },
        holaAlCursoGraphql( ) : string {
            return `Hola mundo en el curso graphql`;
        }
    }
}


export default query;