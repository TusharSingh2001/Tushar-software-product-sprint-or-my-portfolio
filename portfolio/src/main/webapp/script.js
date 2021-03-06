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
      "I love anything matcha flavored.",
      "My name has the meaning of sunrise and dawn.",
      "I like Marvel Movies.",
      "I am trying to learn ice skating.",
      "My favorite anime is The Promised Neverland.",
    ];
  
    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;

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
  
  /**
   * Dark Mode Toggle Control
   */
  document.getElementById("dark-mode-toggle").onclick = function (e) {
    darkmode.toggleDarkMode();
  };