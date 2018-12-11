import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/root.reducer";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware];
    if (process.env.NODE_ENV !== "production") {
        middlewares.push(loggerMiddleware);
    }
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);
    return store;
}
