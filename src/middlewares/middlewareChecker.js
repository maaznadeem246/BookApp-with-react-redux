
const middlewareChecker = (store) => (next) => (action) => {
    console.log(next(action)," middleWarechecker");
    return next(action)
}

export default middlewareChecker
