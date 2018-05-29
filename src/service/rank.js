import models from '../../models'

export const getRanks = () => {
  return models.Rank.findAll().then(ranks => ranks)
};

export const createRank = (data) => {
  return models.Rank.create(data).then((rank) => {
        return 'Rank added successfully';
    }).catch((err) => {
      return 'Error on adding Rank: ' + err;
    });
}

export const updateRank = (data, params) => {
  return models.Rank.find({ where: { id: params.id } }).then(rank => {
    return rank.update(data).then(rank => {
      return 'Rank updated successfully';
    }).catch(err => {
      return 'Error updating Rank: ' + err;
    });
  });
}

export const deleteRank = (params) => {
  return models.Rank.find({where: {id: params.id}}).then(rank => {
    return rank.destroy().then(rank => {
      return 'Rank deleted successfully';
    }).catch(err => {
      return 'Error deleting Rank: ' + err
    });
  });
}