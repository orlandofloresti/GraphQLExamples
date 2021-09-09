import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__:void, {id} ): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id)[0];
            // console.log(resultado)
            if(resultado === undefined) {
                return {
                    id: '-1',
                    name: `no se ha encontrado el estudiante con el id ${id}`,
                    email: '',
                    courses: []
                }
            }
            else return resultado;
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__:void, {curso} ): any {
            const resultado = database.cursos.filter(curso_ => curso_.id === curso)[0];
            // console.log(resultado)
            if(resultado === undefined) {
                return {
                    id: '-1',
                    title: `no se ha encontrado el curso con el id ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    review:[]
                }
            }
            else return resultado;
        },

        
    }
}

export default query;