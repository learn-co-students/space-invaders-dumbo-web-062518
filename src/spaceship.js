class Spaceship {
  constructor(name, crew, phasers = 'uncharged', shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged'){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    if(crew.length === 0){
      this.docked = true
    }
    else{
      this.docked = false
      crew.forEach(crew => crew.currentShip = this)
      this.crew = crew
    }
  }
}
