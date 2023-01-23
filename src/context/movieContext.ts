import React from "react";
import {Movie} from "../types/types";


const MovieContext = React.createContext<Movie[]>([]);

export default MovieContext;