export const getQueryParam = (param: string): string => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has(param)) {
      return urlParams.get(param);
    }

    return '';
}