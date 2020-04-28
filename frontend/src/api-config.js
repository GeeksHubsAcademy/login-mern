let backendHost;
if(process.env.NODE_ENV==="production"){
    backendHost='http://167.71.41.90'
}else{
    backendHost='http://localhost:3001'
}

export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `${backendHost}/images/`;
