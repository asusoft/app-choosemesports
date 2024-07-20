import { postVideoMutationResolver } from './post-video.js';
import { requestVideoApprovalMutationResolver } from './request-video-approval.js';

export const VideoMutationResolvers = {
    postVideo: postVideoMutationResolver,
    requestApproval: requestVideoApprovalMutationResolver
};