var GameServer = require('./GameServer.js').GameServer;

function Player(name) {
  this.id = '';
  this.name = name;
  this.avatarUrl = null;

  // Data specific to a particular game session
  this.gameSession = null;
  this.roleCard = null;
  this.actions = {};
  /* {
            roleAction: <role-action-data>
            voteToKill: <vote-data>
        }
        */
}

Player.prototype.constructor = Player;

/*
Player.prototype.setIDs = function(socketId){
    this.id = GameServer.lastPlayerID++;
    this.socketID = socketId;
};
*/

Player.prototype.getCardAsStr = function() {
  if (this.roleCard) {
    return this.roleCard.name;
  }
  return '';
};

Player.prototype.getId = function() {
  return this.id;
};

Player.prototype.getName = function() {
  return this.name;
};

Player.prototype.roleActionDone = function() {
  // Returns whether player has done their role action
  if (this.actions) {
      return !!this.actions.roleAction;
  }
  return false;
};

module.exports.Player = Player;
