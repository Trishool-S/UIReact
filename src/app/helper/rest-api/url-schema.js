export const BaseUrl =
  process.env.REACT_APP_ENV === "production"
    ? "https://a641jo3dda.execute-api.ap-south-1.amazonaws.com/stage2/admin/"
    : "https://a641jo3dda.execute-api.ap-south-1.amazonaws.com/stage2/admin/";

export const auth = {
  login: "authorization/login",
};

export const endpoints = {
  client: "api/Client",
  user: "api/User",
  entity: "api/Entity",
  entityGroup: "api/GroupEntity",
};


