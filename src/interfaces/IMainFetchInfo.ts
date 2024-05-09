import IArticles from "./IArticles";

interface IMainFetchInfo {
    count:    number;
    next:     string;
    previous: null;
    results:  IArticles;
}

export default IMainFetchInfo
