import { graphql } from "react-apollo";
import { compose } from "recompose";
import { deleteDirectorMutation } from "./mutations";
import { directorsQuery } from "../MoviesForm/queries";

const withGraphqlDelete = graphql(deleteDirectorMutation, {
  props: ({ mutate }) => ({
    deleteDirector: (id) =>
      mutate({
        variables: id,
        refetchQueries: [{ query: directorsQuery }],
      }),
  }),
});

export default compose(withGraphqlDelete);
