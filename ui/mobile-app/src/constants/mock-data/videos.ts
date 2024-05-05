import { VideoListFragment } from '@src/shared/generated/types/graphql'

export const MOCK_VIDEOS: VideoListFragment = {
  __typename: 'VideoList',
  total: 3,
  videos: [
    {
      __typename: 'Video',
      id: '1',
      description: 'This is the first video',
      isApproved: true,
      showInProfile: true,
      author: {
        __typename: 'User',
        id: 'user1',
        name: 'John Doe',
        login: 'john_doe',
        avatar: {
          __typename: 'File',
          id: 'avatar1',
          path: '/path/to/avatar1.jpg',
        },
      },
      attachement: {
        __typename: 'File',
        id: 'attachement1',
        path: '/path/to/video1.mp4',
      },
    },
    {
      __typename: 'Video',
      id: '2',
      description: 'This is the second video',
      isApproved: true,
      showInProfile: false,
      author: {
        __typename: 'User',
        id: 'user2',
        name: 'Jane Smith',
        login: 'jane_smith',
        avatar: null,
      },
      attachement: {
        __typename: 'File',
        id: 'attachement2',
        path: '/path/to/video2.mp4',
      },
    },
    {
      __typename: 'Video',
      id: '3',
      description: 'This is the third video',
      isApproved: false,
      showInProfile: true,
      author: {
        __typename: 'User',
        id: 'user3',
        name: 'Alice Johnson',
        login: 'alice_johnson',
        avatar: {
          __typename: 'File',
          id: 'avatar3',
          path: '/path/to/avatar3.jpg',
        },
      },
      attachement: {
        __typename: 'File',
        id: 'attachement3',
        path: '/path/to/video3.mp4',
      },
    },
  ],
}
