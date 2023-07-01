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
        "The Spirit is known for being quieter when hunting. Using smudge sticks on a Spirit will stop it from hunting for a long time.";
    } else if (ghostId === "wraith") {
      ghostInfo.textContent =
        "The Wraith can fly through walls and cannot be tracked by footsteps. It can be temporarily stopped by turning off the location's power.";
    } else if (ghostId === "phantom") {
      ghostInfo.textContent = "Phantom information placeholder";
    } else if (ghostId === "poltergeist") {
      ghostInfo.textContent = "Poltergeist information placeholder";
    } else if (ghostId === "banshee") {
      ghostInfo.textContent = "Banshee information placeholder";
    } else if (ghostId === "jinn") {
      ghostInfo.textContent = "Jinn information placeholder";
    } else if (ghostId === "mare") {
      ghostInfo.textContent = "Mare information placeholder";
    } else if (ghostId === "revenant") {
      ghostInfo.textContent = "Revenant information placeholder";
    } else if (ghostId === "shade") {
      ghostInfo.textContent = "Shade information placeholder";
    } else if (ghostId === "demon") {
      ghostInfo.textContent = "Demon information placeholder";
    } else if (ghostId === "yurei") {
      ghostInfo.textContent = "Yurei information placeholder";
    } else if (ghostId === "oni") {
      ghostInfo.textContent = "Oni information placeholder";
    } else if (ghostId === "yokai") {
      ghostInfo.textContent = "Yokai information placeholder";
    } else if (ghostId === "hantu") {
      ghostInfo.textContent = "Hantu information placeholder";
    } else if (ghostId === "goryo") {
      ghostInfo.textContent = "Goryo information placeholder";
    } else if (ghostId === "myling") {
      ghostInfo.textContent = "Myling information placeholder";
    } else if (ghostId === "onryo") {
      ghostInfo.textContent = "Onryo information placeholder";
    } else if (ghostId === "twins") {
      ghostInfo.textContent = "The Twins information placeholder";
    } else if (ghostId === "raiju") {
      ghostInfo.textContent = "Raiju information placeholder";
    } else if (ghostId === "obake") {
      ghostInfo.textContent = "Obake information placeholder";
    } else if (ghostId === "mimic") {
      ghostInfo.textContent = "The Mimic information placeholder";
    } else if (ghostId === "moroi") {
      ghostInfo.textContent = "Moroi information placeholder";
    } else if (ghostId === "deogen") {
      ghostInfo.textContent = "Deogen information placeholder";
    } else if (ghostId === "thaye") {
      ghostInfo.textContent = "Thaye information placeholder";
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
  