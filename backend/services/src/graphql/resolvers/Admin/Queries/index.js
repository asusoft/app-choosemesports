import { getAdminMeQueryResolver } from "./get-admin-me.js";
import { getVideoRequestsQueryResolver } from "./get-video-requests.js";
import { retrieveVideoRequestQueryResolver } from "./retrieve-video-request.js";


export const AdminQueriesResolvers = {
   getAdminMe: getAdminMeQueryResolver,
   getVideoRequests: getVideoRequestsQueryResolver,
   retrieveVideoRequest: retrieveVideoRequestQueryResolver
};
