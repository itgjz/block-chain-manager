import request, { securityRequest } from '../utils/request';

// registerUser
export async function registerUser(params) {
  return request('/users', {
    method: 'post',
    data: params,
    requestOptions: {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  });
}

// Create Channel
export async function createChannel(params) {
  return securityRequest('/channels', {
    method: 'post',
    data: params
  });
}

// Join Channel
export async function joinChannel(params) {
  return securityRequest('/channels/{channelName}/peers', {
    method: 'post',
    data: params
  });
}

// Update anchor peers
export async function updateAnchorPeers(params) {
  return securityRequest('/channels/{channelName}/anchorpeers', {
    method: 'post',
    data: params
  });
}

// Install chaincode on target peers
export async function installChainCode(params) {
  return securityRequest('/chaincodes', {
    method: 'post',
    data: params
  });
}

// Instantiate chaincode on target peers
export async function instantiateChainCode(params) {
  return securityRequest('/channels/{channelName}/chaincodes', {
    method: 'post',
    data: params
  });
}

// Invoke transaction on chaincode on target peers
export async function invokeChainCode(params) {
  return securityRequest('/channels/{channelName}/chaincodes/{chaincodeName}', {
    method: 'post',
    data: params
  });
}

// Query on chaincode on target peers
export async function queryChainCode(params) {
  return request('/channels/{channelName}/chaincodes/{chaincodeName}', {
    method: 'get',
    data: params
  });
}

//  Query Get Block by BlockNumber
export async function queryBlockByNumber(params) {
  return request('/channels/{channelName}/blocks/{blockId}', {
    method: 'get',
    data: params
  });
}

// Query Get Transaction by Transaction ID
export async function queryTransactionById(params) {
  return request('/channels/{channelName}/transactions/{trxnId}', {
    method: 'get',
    data: params
  });
}

// Query Get Block by Hash
export async function queryBlockByHash(params) {
  return request('/channels/{channelName}/blocks', {
    method: 'get',
    data: params
  });
}

//Query for Channel Information
export async function queryChannelInfo(params) {
  return request('/channels/{channelName}', {
    method: 'get',
    data: params
  });
}

//Query for Channel instantiated chaincodes
export async function queryInstantChainCodeByChannel(params) {
  return request('/channels/{channelName}/chaincodes', {
    method: 'get',
    data: params
  });
}

// Query to fetch all Installed/instantiated chaincodes
export async function queryInstallAndInstantChainCodeByChannel(params) {
  return request('/chaincodes', {
    method: 'get',
    data: params
  });
}

// Query to fetch channels
export async function fetchChannels(params) {
  return request('/channels', {
    method: 'get',
    data: params
  });
}
