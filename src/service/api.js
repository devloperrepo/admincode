
export const api = async (url, method, body = null, headers = {}) => {
    // const BASE_URL = ENV.BASE_URL+"api/v1/";
    const BASE_URL = "http://staging.reviews.org/api/admin/";
    try {
      const endPoint = BASE_URL.concat(url);
      const reqBody = body ? JSON.stringify(body) : null;

      const fetchParams = {method, headers};

      if((method === "POST" || method === "PUT") && !reqBody) {
          throw new Error("Request body required");
      }

      if(reqBody) {
          fetchParams.headers["Content-type"] = "application/json";
          fetchParams.body = reqBody;
      }

      const fetchPromise = fetch(endPoint, fetchParams);
      const timeOutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject("Request Timeout");
          }, 30000);
      });

      const response = await Promise.race([fetchPromise, timeOutPromise]);

      return response;
    } catch (e) {
      return e;
    }
}

export const fetchApi = async (url, method, body, statusCode, token = null) => {
    try {
        const headers = {}
        const result = {
            token: null,
            success: false,
            responseBody: null
        };
        
        // headers["DeviceId"] = DEVICE_INFO.deviceId;
        // headers["DeviceType"] = DEVICE_INFO.deviceType;
        // headers["langCode"] = APP_LANGUAGE;
        headers["langCode"] = "en";
        if(token) {
            headers["x-access-token"] = token;
            headers["Authorization"] = `Bearer ${token}`;
        }
        
        const response = await api(url, method, body, headers);
        
        if(response.status === statusCode) {
            result.success = true;

            let responseBody;
            const responseText = await response.text();
            
            try {
                responseBody = JSON.parse(responseText);
                
                //console.log(responseBody, "respoinse");
                if(responseBody.token) {
                    result.token = responseBody.token;
                }
            } catch (e) {
                responseBody = responseText;
            }

            result.responseBody = responseBody;
            return result;

        }

        let errorBody;
        const errorText = await response.text();

        try {
            errorBody = JSON.parse(errorText);
        } catch (e) {
            errorBody = errorText;
        }

        result.responseBody = errorBody;

        //console.log(result);

        throw result;
    } catch (error) {
        return error;
    }
}
