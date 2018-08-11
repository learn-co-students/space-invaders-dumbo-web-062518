class Spaceship {
	constructor(name, arr, phasers, shields){
		this.name = name
		this.crew = arr
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = "disengaged"
		this.phasersCharge = "uncharged"
		this.docked = this.crew.length ? false : true
		this.setCurrentShip()
	}

	setCurrentShip(){
		this.crew.forEach(crewMember => {
			crewMember.currentShip = this
		})
	}
}
