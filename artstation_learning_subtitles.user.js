// ==UserScript==
// @name     Artstation Learning Subtitles
// @version  0.0.1
// @grant    GM.setValue
// @grant    GM.getValue
// ==/UserScript==

(async () => {
  // const refreshRate = 5000;                      // Refreshes every 10s
  // const newCount = document.images.length;        // Counts images on page
  // const oldCount = await GM.getValue('oldCount', -1);

  
  // setTimeout(async () => {
  //  await GM.setValue('artstation_learning_player_settings', '{"subtitles_lang":"en","playback_speed":1,"volume":100,"muted":false}');
  //  let value = await GM.getValue('artstation_learning_player_settings');
  //  console.log('✨ Susso', value);
  // }, refreshRate);
  
  // const response = await GM.setValue('artstation_learning_player_settings', '{"subtitles_lang":"en","playback_speed":1,"volume":100,"muted":false}');
  localStorage.setItem('artstation_learning_player_settings', '{"subtitles_lang":"en","playback_speed":1,"volume":100,"muted":false}');
  // const value = localStorage.getItem('artstation_learning_player_settings');
  // console.log('🔥 First set: ', value);
  
  window.setInterval(async function(){
  	// const response = await GM.setValue('artstation_learning_player_settings', '{"subtitles_lang":"en","playback_speed":1,"volume":100,"muted":false}');
  	// let value = await GM.getValue('artstation_learning_player_settings');
    localStorage.setItem('artstation_learning_player_settings', '{"subtitles_lang":"en","playback_speed":1,"volume":100,"muted":false}');
   	// const value = localStorage.getItem('artstation_learning_player_settings');
  	// console.log('✅ Set local storage: ', value);
	}, 1000);

  // if (newCount > oldCount){ 
  //  alert('More images!'); 
  // } 
  // else { 
  //  setTimeout(() => { location.reload(); }, refreshRate); 
  // } 
})();
