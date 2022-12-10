import { GetApiRequest, PostApiRequest } from "../../helper/rest-api";
import { endpoints } from "../../helper/rest-api/url-schema";
// import MockResponse from "./mock-response.json";

const ApiClient = () => {
  /**
   * get client list
   * pass access token
   * @param {*} accessToken
   * @returns
   */
  const apiCallForGetClientList = (accessToken) => {
    return new Promise((resolve, reject) => {
      GetApiRequest(endpoints.client, "", accessToken)
        .then((res) => {
          let arrClients = [];
          if (res && Array.isArray(res)) {
            arrClients = res;
          }
          resolve(arrClients);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  /**
   * add new client
   * @param {*} reqBody
   * @param {*} accessToken
   * @returns
   */
  const apiCallForAddNewClient = (reqBody, accessToken) => {
    return new Promise((resolve, reject) => {
      PostApiRequest(endpoints.client, reqBody, accessToken)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  /**
   *  get client details by client Id
   * @param {*} clientid
   * @param {*} accessToken
   * @returns
   */
  const apiCallForGetClientDetails = (clientid, accessToken) => {
    return new Promise((resolve, reject) => {
      GetApiRequest(`${endpoints.client}/${clientid}`, "", accessToken)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return {
    apiCallForGetClientDetails,
    apiCallForAddNewClient,
    apiCallForGetClientList,
  };
};

export { ApiClient };
