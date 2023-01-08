import axios from 'axios';

export function getPokes() {
    return function (dispatch) {
        axios
            .get("/pokemons")
            .then((res) => {
                return dispatch({
                    type: "GET_ALL_POKEMONS",
                    payload: res.data,
                });
            })
            .catch((err) => console.log(err));
    };
};

export function getTypes() {
    return function (dispatch) {
        axios
            .get("/types")
            .then((res) => {
                return dispatch({
                    type: "GET_ALL_TYPES",
                    payload: res.data,
                });
            })
            .catch((err) => console.log(err));
    };
};

export function getName(name) {
    return {
        type: "GET_NAME",
        payload: name,
    };
};

export function getDetail(id) {
    return function (dispatch) {
        axios
            .get("/" + id)
            .then((res) => {
                return dispatch({
                    type: "GET_DETAILS",
                    payload: res.data,
                });
            })
            .catch((err) => console.log(err));
    };
};

export function cleanFilters(payload) {
    return {
        type: "CLEAN_FILTERS",
        payload: payload,
    };
};

export function resState() {
    return {
        type: "RES_STATE",
    };
};

export function handlerName(payload) {
    return {
        type: "HANDLER_NAME",
        payload: payload,
    };
}

export function handleFilter(payload) {
    return {
        type: "HANDLE_FILTERS",
        payload: payload,
    };
}

export const handlerStrength = (payload) => {
    return {
        type: "HANDLER_STRENGTH",
        payload: payload,
    };
};

export const handlerTypes = (payload) => {
    // este payload representa el valor de input, es decir el valor de nuestro select
    return {
        type: "HANDLER_TYPES",
        payload: payload,
    };
};