import { Recommendation } from './models/recommendation';
import { Restaurant } from './models/restaurant';

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 1,
    restaurantName: '가츠벤또',
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    rating: 4.7,
    bestReview: '모든 서강대생이 인정한 극강의 맛집',
    imageUrl: '',
    reviewCount: 343,
    lowestPrice: 11000,
    liked: true,
  },
  {
    id: 2,
    restaurantName: '가츠벤또',
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    rating: 4.7,
    bestReview: '모든 서강대생이 인정한 극강의 맛집',
    imageUrl: '',
    reviewCount: 343,
    lowestPrice: 11000,
    liked: false,
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    restaurantName: '가츠벤또',
    imageUrl: '',
    latitude: 37.5533674,
    longitude: 126.937563,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    rating: 4.7,
    reviewCount: 343,
    liked: true,
  },
  {
    id: 2,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '신촌역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
  {
    id: 3,
    restaurantName: 'test3',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '대흥역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 4,
    restaurantName: 'test4',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '신촌역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
  {
    id: 5,
    restaurantName: 'test5',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 6,
    restaurantName: 'test6',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '대흥역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 7,
    restaurantName: 'test7',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
  {
    id: 8,
    restaurantName: 't8',
    imageUrl: '',
    latitude: 37.5533674,
    longitude: 126.937563,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    rating: 4.7,
    reviewCount: 343,
    liked: true,
  },
  {
    id: 9,
    restaurantName: 't9',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '신촌역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
  {
    id: 10,
    restaurantName: 't10',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '대흥역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 11,
    restaurantName: 't11',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '신촌역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
  {
    id: 12,
    restaurantName: 't12',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 13,
    restaurantName: 'test13',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '대흥역',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: true,
  },
  {
    id: 14,
    restaurantName: 't14',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    reviewCount: 4723,
    liked: false,
  },
];

export const DETAILS = [
  {
    id: 1,
    restaurantName: '가츠벤또',
    foodCategory: '일식',
    locationCategory: '서강대',
    locationTag: '정문',
    recommendCategoryList: [
      { id: 1, name: '조용히 혼밥하기 좋으니 가게 🍚', color: '#8B5CD7' },
      { id: 2, name: '집밥이 그리울 때 가게 🥘', color: '#F47730' },
    ],
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    latitude: 37.5533674,
    longitude: 126.937563,
    address: '서울',
    rating: 4.7,
    reviewCount: 343,
    wishCount: 4,
    bestReview: '가츠벤또도 가격이 많이 올라서 좀빡칩니다.',
    contributors: [
      {
        id: 1,
        nickname: '오대균',
        profileImage:
          'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
      },
      { id: 2, nickname: '이종미', profileImage: '' },
    ],
    liked: true,
  },
  {
    id: 2,
    restaurantName: '마포돼지불백',
    foodCategory: '한식',
    locationCategory: '서강대',
    locationTag: '정문',
    recommendCategoryList: [
      { id: 1, name: '조용히 혼밥하기 좋으니 가게 🍚', color: '#8B5CD7' },
      { id: 2, name: '집밥이 그리울 때 가게 🥘', color: '#F47730' },
    ],
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    latitude: 37.5514818,
    longitude: 126.9373166,
    address: '서울',
    rating: 4.9,
    reviewCount: 4723,
    wishCount: 6,
    bestReview: '계란 후라이를 할 줄 몰라서 아쉬워요.',
    contributors: [
      {
        id: 1,
        nickname: '오대균',
        profileImage:
          'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
      },
      {
        id: 2,
        nickname: '이종미',
        profileImage:
          'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
      },
    ],
    liked: false,
  },
];

export const MENUS = [
  [
    {
      id: 1,
      name: '가츠동',
      price: 7000,
      photoNum: 4,
      salePrice: 5000,
      saleComment: '존나게맛있어서 걍 세일합니다.',
    },
    {
      id: 2,
      name: 'fucking 가츠동남아시아',
      price: 10000,
      photoNum: 2,
      salePrice: null,
      saleComment: '',
    },
  ],
  [
    {
      id: 3,
      name: '불백',
      price: 7000,
      photoNum: 7,
      salePrice: null,
      saleComment: '',
    },
    {
      id: 4,
      name: '물백',
      price: 10000,
      photoNum: 1,
      salePrice: 5000,
      saleComment: '존나게맛있어서 걍 세일합니다.',
    },
  ],
];

export const MENU_PHOTOS = [
  {
    id: 3,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  {
    id: 15,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    member: {
      id: 2,
      nickname: 'jongmi',
    },
  },
  {
    id: 4,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  {
    id: 11,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    member: {
      id: 2,
      nickname: 'jongmi',
    },
  },
  {
    id: 1,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  {
    id: 2,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    member: {
      id: 2,
      nickname: 'jongmi',
    },
  },
  {
    id: 100,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  {
    id: 22,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    member: {
      id: 2,
      nickname: 'jongmi',
    },
  },
  {
    id: 172,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  // {
  //   id: 24,
  //   imageUrl:
  //     'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
  //   member: {
  //     id: 2,
  //     nickname: 'jongmi',
  //   },
  // },
];

export const REVIEWS = [
  {
    id: 1,
    reviewId: 1,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 2,
      email: 'jp3869@naver.com',
      nickname: 'jongmi',
      icon: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    },
    reviewContent: '정말 정말 맛잇다!!',
    rating: 4,
    createdDate: '2023-03-24',
    likeCount: 234,
    liked: false,
  },
  {
    id: 2,
    reviewId: 2,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      email: 'jp38@naver.com',
      nickname: 'jong',
      icon: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    },
    reviewContent: '맛잇다!!',
    rating: 2,
    createdDate: '2023-03-24',
    likeCount: 1,
    liked: true,
  },
  {
    id: 3,
    reviewId: 3,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 4,
      email: 'jp69@naver.com',
      nickname: 'mi',
      icon: null,
    },
    reviewContent: '정말맛잇다!!',
    rating: 3,
    createdDate: '2023-03-24',
    likeCount: 8237,
    liked: false,
  },
  {
    id: 4,
    reviewId: 4,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 2,
      email: 'jp3869@naver.com',
      nickname: 'jongmi',
      icon: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    },
    reviewContent: '테스트4',
    rating: 4,
    createdDate: '2023-03-24',
    likeCount: 123,
    liked: false,
  },
  {
    id: 5,
    reviewId: 5,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      email: 'jp38@naver.com',
      nickname: 'jong',
      icon: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    },
    reviewContent: '테스트5',
    rating: 2,
    createdDate: '2023-03-24',
    likeCount: 4,
    liked: true,
  },
  {
    id: 6,
    reviewId: 6,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 4,
      email: 'jp69@naver.com',
      nickname: 'mi',
      icon: null,
    },
    reviewContent: '테스트6',
    rating: 3,
    createdDate: '2023-03-24',
    likeCount: 3549,
    liked: false,
  },
];

export const MY_REVIEWS = {
  data: [
    {
      reviewId: 1,
      restaurantId: 1,
      restaurantName: '가츠벤또',
      imageUrl:
        'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
      reviewContent: '정말 정말 맛잇다!!',
      rating: 4,
      createdDate: '2023-03-24',
      likeCount: 234,
      liked: false,
    },
    {
      reviewId: 2,
      restaurantId: 2,
      restaurantName: '마포돼지불백',
      imageUrl:
        'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
      reviewContent: '맛잇다!!',
      rating: 2,
      createdDate: '2023-03-24',
      likeCount: 1,
      liked: true,
    },
    {
      reviewId: 3,
      restaurantName: '가츠벤또',
      restaurantId: 1,
      imageUrl:
        'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
      reviewContent:
        '정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!정말맛잇다!!',
      rating: 3,
      createdDate: '2023-03-24',
      likeCount: 8237,
      liked: false,
    },
  ],
  totalPages: 1,
};

export const USER = {
  email: '1',
  password: '1',
};

export const JUDGES = {
  data: [
    {
      id: 1,
      restaurantName: 'name',
      introduction: '소개소개',
      registrant: 'jongmi',
      imageUrl:
        'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
      latitude: 56.6,
      longitude: 34.4,
      agreementCount: 2,
      locationCategory: '신촌',
      locationTag: '정문',
      foodCategory: '한식',
      agreed: true,
    },
    {
      id: 2,
      restaurantName: 'name2',
      introduction: '소개소개',
      registrant: 'jongmi2',
      imageUrl: null,
      latitude: 56.6,
      longitude: 34.4,
      agreementCount: 2,
      locationCategory: '신촌',
      locationTag: '정문',
      foodCategory: '한식',
      agreed: false,
    },
  ],
  totalPages: 1,
};
