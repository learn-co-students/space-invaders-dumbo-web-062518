class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if(crew.length === 0) {
      this.docked = true
    }
    else {
      this.docked = false
      this.crew = crew
    }
    this.phasersCharge = "uncharged"

    crew.forEach(position => position.currentShip = this)
  }

}
