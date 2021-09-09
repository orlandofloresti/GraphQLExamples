import { IResolvers } from "graphql-tools";
import mutation from "./mutations";
import query from "./query";

const resolvers : IResolvers = {
    ...query,
    ...mutation
}

export default resolvers;