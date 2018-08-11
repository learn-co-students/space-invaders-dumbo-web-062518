class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.docked = crew.length > 0 ? false : true
    if (crew.length > 0){
      crew.forEach(function(member){
      member.currentShip = this
    }.bind(this))
  }
  }
}
