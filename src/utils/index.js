export const parseComplexQueryParams = (queryParams) => {
    const params = new URLSearchParams();
    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] instanceof Array) {
        queryParams[key].forEach((item) => {
          params.append(`${key}[]`, item);
        });
      } else {
        params.set(key, queryParams[key]);
      }
    });
    return params;
  };
  