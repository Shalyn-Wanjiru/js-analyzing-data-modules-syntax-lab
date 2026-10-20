
function combineUsers(...arrays) {
  const users = [].concat(...arrays);
  const combinedObjects = {
    users: users,
    merge_date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
  };
  return combinedObjects;
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};