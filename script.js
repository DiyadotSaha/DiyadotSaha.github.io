// let serverUrl = "http://127.0.0.1:5001"; // Update this if running on a different machine

// async function trackVisit() {
//     try {
//          if (!sessionStorage.getItem("visitedToday")) {
//             await fetch(`${serverUrl}/track`); // Only increment count once
//             sessionStorage.setItem("visitedToday", "true");
//         }

//         let response = await fetch(`${serverUrl}/get_count`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch visitor count");
//         }

//         let data = await response.json();
//          document.getElementById("visitor-count").innerText = `Visitors today: ${data.visitors}`;

//     } catch (error) {
//         console.error("Error tracking visit:", error);
//         document.getElementById("visitor-count").innerText = "Error loading visitor count.";
//     }
// }

// document.addEventListener("DOMContentLoaded", trackVisit);
