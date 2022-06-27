export const GetPageSizeFromList = function (obj) {
  if (!obj) return "";
  let params = Object.keys(obj).map((item) => {
    if (obj[item]) return `${item}=${obj[item]}`;
  });
  let queryParams = params?.filter(Boolean).join("&");
  if (queryParams.length) return `&${queryParams}`;
  else return "";
};
