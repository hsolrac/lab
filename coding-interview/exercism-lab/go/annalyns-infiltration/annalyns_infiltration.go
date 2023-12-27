package annalyn

func CanFastAttack(knightIsAwake bool) bool {
	if !knightIsAwake {
        return true
    } else {
    	return false 
    }
}

func CanSpy(knightIsAwake, archerIsAwake, prisonerIsAwake bool) bool {
    if knightIsAwake || archerIsAwake || prisonerIsAwake{
        return true
    } else {
    	return false
    }
}

func CanSignalPrisoner(archerIsAwake, prisonerIsAwake bool) bool {
    if prisonerIsAwake && !archerIsAwake {
        return true
    } else {
    	return false
    }
}

func CanFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent bool) bool {
	if !knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent {
        return true
    } else if !knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent {
    	return true
    } else if knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent {
        return true
    } else if knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent {
        return true
    } else if !knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent {
        return true
    } else {
    	return false
    }
}
