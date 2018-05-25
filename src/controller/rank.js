import * as Rank from '../service/rank';

export const get = async (ctx) => {
  ctx.body = { rank: await Rank.getRanks(), time: Date.now() };
};

export const post = async (ctx) => {
  let response = await Rank.createRank(ctx.request.body)
  ctx.body = response;
};

export const put = async (ctx) => {
  let response = await Rank.updateRank(ctx.request.body, ctx.params)
  ctx.body = response;
};


export const del = async (ctx) => {
  let response = await Rank.deleteRank(ctx.params)
  ctx.body = response;
};