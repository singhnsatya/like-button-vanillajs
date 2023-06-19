function createLikebutton(buttonName, iconName) {
	const likeButton = document.createElement("button");

	const iconSpan = document.createElement("span");
	likeButton.appendChild(iconSpan);

	// button name
	const buttonNameSpan = document.createElement("span");
	likeButton.appendChild(buttonNameSpan);
	buttonNameSpan.innerHTML = buttonName;

	const buttonIcon = document.createElement("i");
	iconName.split(" ").forEach((i) => buttonIcon.classList.add(i));
	iconSpan.appendChild(buttonIcon);

	document.body.appendChild(likeButton);
}

function onClick(e) {
	e.preventDefault();
	makeApiCall();
	e.stopPropagation();
}
