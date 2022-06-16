// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Adds a random fun fact about myself to the page.
 */
function addRandomFact() {
    const facts = [
      "I love to try new cuisines!",
      "I am a big Chelsea FC (soccer club) supporter",
      "I love watching thriller movies.",
      "I have played at cricket and badminton at a competitive level ",
      "Some of my favorite animes are Attack on Titan, Hunter x Hunter, and Full Metal Alchemist",
    ];
  
    // Pick a random fun fact.
    const fact = facts[Math.floor(Math.random() * facts.length)];
  
    // Add it to the page.
    const factContainer = document.getElementById("fact-container");
    factContainer.innerText = fact;
  }
  
  /**
   * Gets messages as json from hello endpoint. Randomly select one.
   */
  async function getMessage() {
    const res = await fetch("/hello");
    const message = await res.json();
    const oneMessage = message[Math.floor(Math.random() * message.length)];
    document.getElementById("message-container").innerText = oneMessage;
  }
  
  const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });