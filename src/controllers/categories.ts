import { RequestHandler } from 'express';

const FOOD_TAGS = [
  { id: 1, name: '한식' },
  { id: 2, name: '일식' },
  { id: 3, name: '중식' },
  { id: 4, name: '양식' },
  { id: 5, name: '간식' },
  { id: 6, name: '쩝쩝간식' },
];

const LOC_CATS = [
  {
    id: 1,
    name: '서강대학교',
    longitude: 126.9410023,
    latitude: 37.5509442,
  },
  {
    id: 2,
    name: '신촌역',
    longitude: 126.9364998,
    latitude: 37.5550592,
  },
  {
    id: 3,
    name: '대흥역',
    longitude: 126.942332,
    latitude: 37.547674,
  },
];

const LOC_TAGS = [
  {
    id: 1,
    loc_category_id: 1,
    name: '정문',
    longitude: 126.9410023,
    latitude: 37.5509442,
  },
  {
    id: 2,
    loc_category_id: 1,
    name: '남문',
    longitude: 126.9410023,
    latitude: 37.5509442,
  },
  {
    id: 3,
    loc_category_id: 1,
    name: '후문',
    longitude: 126.9410023,
    latitude: 37.5509442,
  },
  {
    id: 4,
    loc_category_id: 2,
    name: '신촌역',
    longitude: 126.9364998,
    latitude: 37.5550592,
  },
  {
    id: 5,
    loc_category_id: 3,
    name: '대흥역',
    longitude: 126.942332,
    latitude: 37.547674,
  },
];

const RECOM_TAGS = [
  {
    id: 1,
    name: '대학생 밥약하기 좋으니 가게 🤙',
    color: '#6AB2B2',
  },
  {
    id: 2,
    name: '조용히 혼밥하기 좋으니 가게 🍚',
    color: '#8B5CD7',
  },
  {
    id: 3,
    name: '술자리 저격이니 가게 🍺',
    color: '#F1CE18',
  },
  {
    id: 4,
    name: '단체 회식일 때 가게 🍺',
    color: '#F1CE18',
  },
  {
    id: 5,
    name: '집밥이 그리울 때 가게 🥘',
    color: '#F47730',
  },
  {
    id: 6,
    name: '해장하러 가게 🍲',
    color: '#F47730',
  },
  {
    id: 7,
    name: '사진 찍으러 가게 📷',
    color: '#8B5CD7',
  },
  {
    id: 8,
    name: '두명 이상 가게 ✌️',
    color: '#8B5CD7',
  },
  {
    id: 9,
    name: '식단관리 저격이니 가게 🥗',
    color: '#F47730',
  },
];

export const getFoodCat: RequestHandler = (req, res, next) => {
  res.json(FOOD_TAGS);
};

export const getLocCat: RequestHandler = (req, res, next) => {
  res.json(LOC_CATS);
};

export const getLocTag: RequestHandler = (req, res, next) => {
  res.json(LOC_TAGS);
};

export const getRecomTag: RequestHandler = (req, res, next) => {
  res.json(RECOM_TAGS);
};
