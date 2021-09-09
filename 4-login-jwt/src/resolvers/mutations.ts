import { IResolvers } from "graphql-tools";
import { Datetime } from '../lib/datetime';

const mutation : IResolvers = {
    Mutation : {
        async register( _: void, {user}, {db} ): Promise<any> {

            const lastUser = await db.collection('users').find().limit(1).sort( { registerDate: -1 } ).toArray();

            if( lastUser.length === 0) {
                user.id = 1;
            } else {
                user.id = lastUser[0].id + 1;
            }
            
            user.registerDate = new Datetime().getCurrentDateTime();
            return await db.collection('users').insertOne(user)
                .then((result: any) => {
                    return {
                        status: true,
                        message: `Usuario ${user.name} añadido correctamente`,
                        user
                    }
                })
                .catch( (error: any) => {
                    return {
                        status: false,
                        message: `Usuario no se ha añadido`
                    }
                })

            
            
        }
    }
}

export default mutation;