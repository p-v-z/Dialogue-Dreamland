﻿// Init
console.log("Initializing unity-io.js");
const getUnityInstance = () => {
	if (unityInstance == null) {
		unityInstance = document.unityInstance;
	} 
	return unityInstance;
}
var unityInstance = getUnityInstance();

// Submit an api key to Unity
const unitySubmitApiKey = (key) => {
	console.log("Submit api key to Unity");
	getUnityInstance().SendMessage("InterOp", "SubmitApiKey", key);
}

// Submit a chat message to Unity
const unitySubmitInput = () => {
	var input = document.getElementById("txtChat");
	console.log("Submit input to Unity, value: " + input.value);
	getUnityInstance().SendMessage("InterOp", "SubmitChatMessage", input.value);
	ShowInputAction(false);
	input.value = "";
}