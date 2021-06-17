import Request from "./lib";
import httpConfig from "../../config/httpConfig";

// 设置 通用的 baseUrl 以及 header
const config = {
  baseUrl: httpConfig.baseUrl,
  header: { "content-type": "application/x-www-form-urlencoded" },
};

/**
 * 请求拦截器
 * @param {Object} options 请求的选项
 * @returns {Object}
 */
const reqInterceptor = async (options) => {
  // 必须返回一个 Object
  return options;
};

/**
 * 响应拦截器
 * @param {Object} response 请求的响应
 * @param {Object} config 请求的选项信息
 * @returns
 */
const resInterceptor = (response, config = {}) => {
  // 必须返回你需要处理的数据，将会进入resolve（then中处理）
  // 如果需要reject，需要设置isReqToReject:true，还可以携带自己定义的任何提示内容（catch中处理）
  // uni.request进入fail也会进入该拦截器（为了统一处理逻辑），这个时候的response参数为{isFail: true, response: fail info}。fail时不管返回啥，都进入reject(catch)
  if (response.isFail) {
    return response.response;
  }
  // 请求被拦截时也会进入该回掉（为了统一处理逻辑），这个时候的response参数为{isCancel: true, response: cancel info}。cancel时不管返回啥，都进入reject(catch)
  if (response.isCancel) {
    return response.response;
  }
  return response;
};

const http = new Request(config, reqInterceptor, resInterceptor);
export default http;
