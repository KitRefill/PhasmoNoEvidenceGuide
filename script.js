function toggleGhostStatus(element) {
    if (element.classList.contains("strikethrough")) {
      element.classList.remove("strikethrough");
      element.classList.add("underline");
    } else if (element.classList.contains("underline")) {
      element.classList.remove("underline");
    } else {
      element.classList.add("strikethrough");
    }
  }
  
  function showGhostTips(ghostId) {
    var ghostTitle = document.getElementById("ghostTitle");
    var ghostInfo = document.getElementById("ghostInfo");
  
    ghostTitle.textContent = ghostId.charAt(0).toUpperCase() + ghostId.slice(1);
  
    // Update the ghost information based on the ghostId
    if (ghostId === "spirit") {
      ghostInfo.textContent =
        "smudging a Spirit makes it unable to hunt for 3 minutes instead of the normal minute and half. On this is based the Spirit test – smudge the ghost, set a timer and wait in the location (obviously you need to have low enough sanity to get hunted). If the ghost hunts within three minutes, you can rule out Spirit. If it hunts after 3 minutes, it does not reliably mean it is a Spirit. It might also be another ghost that just wasn’t in the mood to play with you yet. But the lower your sanity is, the higher the chance it is in fact Spirit. Also, ideally don’t sit in the ghost room while doing this test, in case it’s a Shade and it just can’t hunt with you there.";
    } else if (ghostId === "wraith") {
      ghostInfo.textContent =
        "Wraith test: Place salt strategically (in places the ghost is very likely to roam through – like the corners of furniture or in the doorway of the ghost room). If the ghost steps in it, it is not a Wraith. If it never steps in it even after a long while passes, highly suspect a Wraith. If you get out of the ghost room, use an EMF reader and if you get a hit randomly with no salt steps from a ghost room its a wraith";
    } else if (ghostId === "phantom") {
      ghostInfo.textContent = "Once you take a ghost photo, the ghost will immediately disappear from sight, even if the event is still not done yet. If you look at your photos and see a photo labeled ‘ghost’, but there is no ghost in sight, not even any disruption on the photo itself, it is further proof it is a Phantom + Very hidden during hunts, blinks very few times. (Reverse Oni)";
    } else if (ghostId === "poltergeist") {
      ghostInfo.textContent = "Make a poltergeist pile of items and wait for explosion + During hunts polters are the only ghost to throw items every .5 seconds while looping it around a lot of items";
    } else if (ghostId === "banshee") {
      ghostInfo.textContent = "Use Parabolic Microphone to listen for a banshee scream + During hunts it may ignore you to focus on another person + Banshees are one of the few ghosts who can roam towards the target (Add suspicion if a lot of singing ghost events)";
    } else if (ghostId === "jinn") {
      ghostInfo.textContent = "Jinn test”, it means they will take a smudge stick and stand somewhere where they can get a very long line of sight to look for this trait (if you are near the breaker – it leaves EMF 2 on the breaker when it uses its special abilities).";
    } else if (ghostId === "mare") {
      ghostInfo.textContent = "Just switch on the light in the ghost room. Mares can turn the light off immediately after you do that - Will never turn on lights, computers, or TVs";
    } else if (ghostId === "revenant") {
      ghostInfo.textContent = "Revenants are very slow, about half the speed of normal ghosts (so about 0,75 m/s). With line of sight or (newly) if they detect your equipment or voice, they switch to 3 m/s instantly and will only return back to slow speed once it reaches your last known position. A very obvious ghost type – at least during a hunt, they have nothing special outside of it.";
    } else if (ghostId === "shade") {
      ghostInfo.textContent = "The threshold on this one is 35%. And to make matters worse, it will never hunt if a player is in the same room (it can start a hunt if it rooms to a nearby room, though!). (Many people will say the ghost is a shade based off no hunts but if you are below 35% sanity it is basically a normal ghost unless ur sitting in the ghost room.";
    } else if (ghostId === "demon") {
      ghostInfo.textContent = "Demon – after smudging this guy, you only have 1 minute instead of a minute and half. So if the ghost initiates a hunt before 90 seconds are up, it is definitely a Demon. A cursed hunt, can of course be triggered before those 90 seconds with all ghosts.The ghost hunts super frequently. A crucifix works very efficiently. – Not only does the Demon hunt at very high sanity, it also has a shorter cooldown in between hunts. If you are getting chain hunted like crazy, Demon is your suspect.      ";
    } else if (ghostId === "yurei") {
      ghostInfo.textContent = "Can't really rule out a yurei unless it uses its really rare ability to slam a door then the sound is delayed 1-2 seconds";
    } else if (ghostId === "oni") {
      ghostInfo.textContent = "I got hit by a smoke ball event – rule out Oni. If you don’t know what I mean: a ball of smoke suddenly comes at you and collides with you with a specific hiss - (Most people beleive Oni's can't hiss, They can just can't do the smoke ball event) Oni and Phantom test: Watch out for the frequency of ‘blinking’ during hunts. If the ghost is a lot more visible than invisible, it’s an Oni. The other way around, a Phantom.      ";
    } else if (ghostId === "yokai") {
      ghostInfo.textContent = "normal threshold, but if you talk near it, it can start hunting if you are under 80% sanity + During a hunt, the ghost is nearby and doesn’t react to my shouting and or active equipment in my hand. Like it’s deaf";
    } else if (ghostId === "hantu") {
      ghostInfo.textContent = "Will never turn on the breaker, Steps will randomly go slow to fast to slow again, based off room temp you can always see a hantu's breath during a hunt";
    } else if (ghostId === "goryo") {
      ghostInfo.textContent = "has a lower chance of roaming and cannot change ghost room, but otherwise there is nothing to set it apart on no evidence. It’s main ‘ability’, after all, is that its DOTS cannot be seen with the naked eye";
    } else if (ghostId === "myling") {
      ghostInfo.textContent = "(Won't hear footsteps until too late most of the time) Myling test: You hide during the hunt and let go off your active flashlight. You watch the flashlight flicker. For normal ghosts, you would sometimes hear the footsteps even when the flashlight is not yet flickering. For Myling, you would only start hearing the footsteps after the flashlight started flickering.";
    } else if (ghostId === "onryo") {
      ghostInfo.textContent = "Put a crucifix in the ghost room and put a lit candle on top of it. Keep the candle lit and watch the crucifix. If the crucifix gets used while the candle is lit, it is NOT an Onryo + Ideally at a high sanity, take a lit candle to the ghost room. Wait for the ghost to blow out the candle three times. After the third candle, an Onryo will always hunt within the next ten seconds, regardless of your sanity. Any candle after that, there is a 50% chance of a hunt, but the third candle has 100% chance";
    } else if (ghostId === "twins") {
      ghostInfo.textContent = "two different interactions happen immediately one after each other. – the famous ‘Twinteraction’. Each of The Twins happen to interact with different objects at almost the same time in different parts of the room or even in different rooms. depending on whether it is the ‘real’ ghost or the ‘fake’ ghost hunting, the speed will either be a little slower than a normal ghost or a little faster than a normal ghost";
    } else if (ghostId === "raiju") {
      ghostInfo.textContent = "During a hunt, equipment (flashlight etc.) get disrupted from a longer distance from the ghost(Raiju affects equipment from 15 meters away, instead of the normal 10 meters away)+ Raiju test: Place an active equipment (like DOTS, turned on flashlight…) somewhere the ghost is sure to pass during the hunt. Hide nearby and wait for a hunt. Listen to the footsteps.  .";
    } else if (ghostId === "obake") {
      ghostInfo.textContent = "Obake has a 6,66% chance of shapeshifting into a different ghost model when it ‘blinks’ during a hunt. It always happens at least once during a hunt. (Dead people can't see this ability anymore)";
    } else if (ghostId === "mimic") {
      ghostInfo.textContent = "Just check for ghost orbs every round man lmfao (Shows no matter how much evidence)";
    } else if (ghostId === "moroi") {
      ghostInfo.textContent = "Moroi – the speed of a Moroi depends on the average sanity. So unless you take pills (or get a tarot card raising sanity), you will notice that the ghost starts the hunt at higher speed each time. At 50% sanity (the threshold), it starts as a normal speed ghost. At 0% sanity, though, it starts the hunt at 2,25 m/s, much faster (AVERAGE SANITY NOT FREAKING PERSONAL SANITY YOU FAKE PROS XD)";
    } else if (ghostId === "deogen") {
      ghostInfo.textContent = "Deogen goes at 3 m/s straight at you, knows where you are. You must not hide, you have to wait until it is close to you (it turns into a sloth in close proximity) and just walk around with it. (In public lobbies deogen will more than likely kill at least 1 person before you guys realize its a deo due to no evidence it can always be a deo)";
    } else if (ghostId === "thaye") {
      ghostInfo.textContent = "the speed of a Thaye depends on how long it spent in the proximity of players. It can start at 2,75 m/s (if you get a hunt right at the beginning of a game). Every one to two minutes, Thaye checks if there are any players nearby, and if there are, the ghost will ‘age’. (Once again you wanna be pros, it doesn't age off ghost room it ages off you being near it so it can still age outside of ghost room if it roams)";
    } else {
      ghostInfo.textContent = "Ghost information not available.";
    }
  
    openModal();
  }
  
  function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
