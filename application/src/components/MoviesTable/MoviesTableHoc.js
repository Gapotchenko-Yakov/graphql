import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

import { styles } from "./styles";
import { graphql } from "react-apollo";
import { moviesQuery } from "./queries";

export default compose(withStyles(styles), graphql(moviesQuery));
