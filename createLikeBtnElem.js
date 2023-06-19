class CreateLikeBtnElem {
	button = null;
	IconSpan = null;
	buttonIcon = null;
	buttonNameSpan = null;
	likedStatus = false;
	buttonId = null;
	iconName = null;
	buttonName = null;
	constructor(buttonName, iconName) {
		this.buttonId = Math.floor(1000 + Math.random() * 9000);
		this.iconName = iconName;
		this.buttonName = buttonName;
		this.init();
		this.createIconSpan();
		this.createButtonIcon();
		this.addEventListeners();
	}

	init() {
		this.button = document.createElement("button");
		this.button.classList.add("like-button");
	}

	createIconSpan() {
		this.iconSpan = document.createElement("span");
		this.button.appendChild(this.iconSpan);

		// button name
		this.buttonNameSpan = document.createElement("span");
		this.button.appendChild(this.buttonNameSpan);
		this.buttonNameSpan.innerHTML = this.buttonName;
	}

	createButtonIcon() {
		this.buttonIcon = document.createElement("i");
		this.iconName.split(" ").forEach((i) => this.buttonIcon.classList.add(i));
		this.iconSpan.appendChild(this.buttonIcon);
	}

	addEventListeners() {
		this.button.addEventListener("click", (e) => this.onButtonClick(e));
	}

	updateToLoadingState() {
		this.buttonIcon.classList.remove("fa-heart");
		this.buttonIcon.classList.add("fa-circle-notch");
	}

	likeActive() {
		this.buttonIcon.classList.add("fa-heart");
		this.buttonIcon.classList.remove("fa-circle-notch");
		this.buttonNameSpan.innerHTML = "Liked";
	}

	likeNotActive() {
		this.buttonIcon.classList.add("fa-heart");
		this.buttonIcon.classList.remove("fa-circle-notch");
		this.button.classList.remove("clicked");
		this.buttonNameSpan.innerHTML = "Like";
	}

	updateToSuccessState(response) {
		response?.data?.type == "LIKE_ADDED"
			? this.likeActive()
			: this.likeNotActive();
	}
	updateToErrorState() {
		this.likeNotActive();
	}

	onButtonClick(e) {
		this.button.classList.add("clicked");
		this.likedStatus === false
			? this.makeApiCall(e, "ADD_LIKE")
			: this.makeApiCall(e, "REMOVE_LIKE");
	}

	async makeApiCall(e, type) {
		this.updateToLoadingState();
		const response = await likeApi(type);
		if (response.success) {
			this.likedStatus = type === "ADD_LIKE" ? true : false;
			this.updateToSuccessState(response);
		} else {
			this.likedStatus = false;
			this.updateToErrorState(response);
		}
	}
}
