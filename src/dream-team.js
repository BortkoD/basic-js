const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members)) {
        members = members.filter(name => typeof name === 'string');
        let teamName = '';
        for (let i = 0; i < members.length; i++) {
            teamName += members[i].split(' ').join('')[0];
        }
        return teamName.toUpperCase().split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    }
    else
        return false;
}

module.exports = {
  createDreamTeam
};
