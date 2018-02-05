const ENV = process.env.NODE_ENV;
const URL = ENV === 'development' ? 'http://localhost:3000' : '';
const fishInfo = (id) => `${URL}/api/fishInfo/${id}`;
const fishkind = () => `${URL}/api/fishKind`;

export default {
  fishInfo,
  fishkind,
};
